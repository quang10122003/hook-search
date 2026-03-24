"use client"

import Box from "./Box"
import styles from "../../style/AuthenticationFlow.module.css"
import { Line } from "./Line"
import { Button } from "../ui/button"
import { useEffect, useMemo, useState } from "react"

const LINE = [
    { id: "1", x1: "0%", x2: "100%", label: "1) POST /login + tên người dùng / mật khẩu" },
    { id: "2", x1: "100%", x2: "0%", label: "2) Gửi access token + refresh token" },
    { id: "3", x1: "0%", x2: "100%", label: "3) GET /profile với header Bearer token" },
    { id: "4", x1: "100%", x2: "0%", label: "4) Verify JWT và trả dữ liệu" },
    { id: "5", x1: "0%", x2: "100%", label: "5) Access token hết hạn → POST /refresh" },
    { id: "6", x1: "100%", x2: "0%", label: "6) Trả về access token mới" },
];

const STEP_CONTENT: Record<number, { user: string; server: string }> = {
    0: { user: "User", server: "Máy chủ chờ yêu cầu" },
    1: {user: "Gửi thông tin đăng nhập đến máy chủ xác thực",server: "Máy chủ chờ yêu cầu",},
    2: {user: "Đang đợi kết quả xác thực",server: "1: Xác thực tên người dùng và mật khẩu",},
    3: {user: "Đang đợi token",server: "2: Ký JWT và tạo access token, refresh token",},
    4: {user: "Nhận access token và refresh token",server: "Đã trả token cho user",},
    5: {user: "3: Gọi API được bảo vệ bằng access token",server: "Chờ request API",},
    6: {user: "Đang đợi phản hồi API",server: "4: Verify JWT và trả dữ liệu",},
    7: {user: "Đang đợi dữ liệu",server: "Đang trả dữ liệu cho user",},
    8: {user: "Nhận dữ liệu từ API",server: "Hoàn tất request API",},
    9: { user: "5: Access token hết hạn, gửi /refresh",server: "Chờ refresh token",},
    10: {user: "Đang đợi cấp token mới",server: "6: Xác thực refresh token",},
    11: {user: "Đang đợi access token mới", server: "Đang trả access token mới",},
    12: {user: "Nhận access token mới",server: "Hoàn tất chu kỳ JWT",},
};

export default function AuthenticationFlow() {
    const TOTAL_STEPS = 12
    const [step, setStep] = useState(0)
    const [play, setPlay] = useState(true)

    useEffect(() => {
        if (!play) return

        const interval = setInterval(() => {
            setStep((prev) => (prev >= TOTAL_STEPS ? 0 : prev + 1))
        }, 2000)

        return () => clearInterval(interval)
    }, [play, TOTAL_STEPS])

    const isLineStep = step % 2 === 1
    const currentContent = useMemo(() => STEP_CONTENT[step] ?? STEP_CONTENT[0], [step])

    const isUserActive = !isLineStep && [0, 4, 8, 12].includes(step)
    const isServerActive = !isLineStep && [2, 6, 10].includes(step)

    function handlerButtonReset() {
        setPlay(false)
        setStep(0)
    }

    return (
        <>
            <div className={styles.boxflow}>
                <Box stepActive={isUserActive}>{currentContent.user}</Box>

                <div className={styles.boxflow__lines}>
                    {LINE.map((line, index) => {
                        const lineStep = index * 2 + 1
                        return (
                            <Line
                                key={line.id}
                                active={step === lineStep}
                                done={step >= lineStep}
                                id={line.id}
                                x1={line.x1}
                                x2={line.x2}
                                y1={"10"}
                                y2={"10"}
                            >
                                {line.label}
                            </Line>
                        )
                    })}
                </div>

                <Box stepActive={isServerActive}>{currentContent.server}</Box>
            </div>

            <div className={styles.boxflex__button}>
                <Button className={styles.buton} onClick={() => setPlay((old) => !old)}>
                    {play ? "Pause" : "Play"}
                </Button>

                <Button className={styles.buton} onClick={handlerButtonReset}>
                    Reset
                </Button>
            </div>
        </>
    )
}
