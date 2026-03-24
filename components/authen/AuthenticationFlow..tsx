import Box from "./Box";
import styles from "../../style/AuthenticationFlow.module.css"
import { Line } from "./Line";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

const LINE = [
    { id: "1", x1: "0%", x2: "100%", label: "1) POST /login + tên người dùng/mật khẩu" },
    { id: "2", x1: "100%", x2: "0%", label: "2) Gửi accessToken + refreshToken" },
    { id: "3", x1: "0%", x2: "100%", label: "3) GET /profile với header Bearer token" },
    { id: "4", x1: "100%", x2: "0%", label: "4) Verify JWT và trả data" },
    { id: "5", x1: "0%", x2: "100%", label: "5) access token hết hạn -> POST /refresh" },
    { id: "6", x1: "100%", x2: "0%", label: "6) trả về access token mới" },
]

const USER_MESSAGES: Record<number, string> = {
    0: "User",
    1: "Gửi thông tin đăng nhập đến máy chủ xác thực",
    2: "Nhận refresh token và access token",
    3: "Gọi API được bảo vệ bằng access token",
    4: "Nhận dữ liệu",
    5: "Gửi refresh token để gia hạn quyền truy cập.",
    6: "Nhận access token mới",
}

const SERVER_MESSAGES: Record<number, string> = {
    0: "Máy chủ chờ yêu cầu",
    1: "Xác thực tên người dùng và mật khẩu",
    2: "Ký JWT và tạo access token ,refresh token",
    3: "Đọc herder ",
    4: "xác thực token jwt ",
    5: "Xác thực refresh token",
    6: "Cấp access token mới",
}

export default function AuthenticationFlow() {
    const TOTAL_STEPS = LINE.length
    const [step, setStep] = useState(0)
    const [play, setPlay] = useState(true)
    const [visited, setVisited] = useState<number[]>([0])

    useEffect(() => {
        if (!play) return

        const interval = setInterval(() => {
            setStep((prev) => {
                let nextState = prev + 1
                if (nextState > TOTAL_STEPS) {
                    nextState = 0
                }

                setVisited((old) => {
                    if (nextState === 0) {
                        return [0]
                    }
                    if (!old.includes(nextState)) {
                        return [...old, nextState]
                    }
                    return old
                })

                return nextState
            })
        }, 2000)

        return () => clearInterval(interval)
    }, [play, TOTAL_STEPS])


    function hanlderButonReset() {
        setPlay(false)
        setStep(0)
        setVisited([0])
    }

    return (
        <>
            <div className={styles.boxflow}>
                <Box stepActive={step === 0 || step % 2 === 1}>
                    {USER_MESSAGES[step]}
                </Box>

                <div className={styles.boxflow__lines}>
                    {LINE.map((line, index) => {
                        return (
                            <Line key={line.id} active={step === index + 1} done={visited.includes(index + 1)} id={line.id} x1={line.x1} x2={line.x2} y1={"10"} y2={"10"}>
                                {line.label}
                            </Line>
                        )
                    })}
                </div>

                <Box stepActive={step !== 0 && step % 2 === 0}>
                    {SERVER_MESSAGES[step]}
                </Box>
            </div>

            <div className={styles.boxflex__button}>
                <Button className={styles.buton} onClick={() => setPlay((old) => !old)}>
                    {play ? "Pause" : "Play"}
                </Button>

                <Button className={styles.buton} onClick={() => hanlderButonReset()}>
                    Reset
                </Button >
            </div>
        </>
    )
}
