import Box from "./Box";
import styles from "../../style/AuthenticationFlow.module.css"
import { Line } from "./Line";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
export default function AuthorizationFlow() {
    const LINE = [
        { id: "1", x1: "0%", x2: "100%", label: "1) GET /api/data Authorization: kèm Bearer accessToken", activeFrom: 1, doneFrom: 2 },
        { id: "2", x1: "100%", x2: "0%", label: "2) Gửi response về cho user", activeFrom: 6, doneFrom: 7 },
    ]
    const STEP_CONTENT: Record<number, { user: string; server: string }> = {
        0: { user: "User", server: "Máy chủ chờ yêu cầu" },
        1: { user: "Gửi yêu cầu truy cập tài nguyên", server: "Máy chủ chờ yêu cầu", },
        2: { user: "Đang đợi kết quả", server: "1: kiểm tra JWT(Kiểm tra chữ ký, Kiểm tra hạn ,Decode payload)", },
        3: { user: "Đang đợi kết quả", server: "2: kiểm tra quyền của user(Role)", },
        4: { user: "Đang đợi kết quả", server: "3:Truy vấn DB lấy dữ liệu", },
        5: { user: "Đang đợi kết quả", server: "4:tạo repone", },
        6: { user: "Đang đợi kết quả", server: "5: trả repone cho user", },
        7: { user: "Nhận repone", server: "hoàn thành trả repone", },
    };
    function handlderStop() {
        setPlay((prev) => !prev)
    }
    function handlderReset() {
        setPlay(false)
        setStep(0)
    }
    const [step, setStep] = useState(0)
    const TOTAL_STEPS = 7
    const [play, setPlay] = useState(false)

   useEffect(() => {
           if (!play) return;
   
           const interval = setInterval(() => {
               setStep((prev)=>{
                   if(prev>= TOTAL_STEPS){
                       setPlay(false)
                       return 0
                   }
                   return (prev + 1)
               })
           }, 2000);
   
           return () => clearInterval(interval);
       }, [play]);
    const isUserActive = [0, 7].includes(step)
    const isServerActive = [2, 3, 4, 5, 6].includes(step)
    return (
        <>
            <div className={styles.boxflow}>
                <Box stepActive={isUserActive}>{STEP_CONTENT[step].user}</Box>

                <div className={styles.boxflow__lines}>
                    {LINE.map((line) => {
                        return (
                            <Line
                                key={line.id}
                                id={line.id}
                                x1={line.x1}
                                x2={line.x2}
                                step={step}
                                activeFrom={line.activeFrom}
                                doneFrom={line.doneFrom}                          >
                                {line.label}
                            </Line>
                        )
                    })}
                </div>
                <Box stepActive={isServerActive}>{STEP_CONTENT[step].server}</Box>
            </div>

            <div className={styles.boxflex__button}>
                <Button className={styles.buton} onClick={handlderStop}>
                    {play ? "Pause" : "Play"}
                </Button>

                <Button className={styles.buton} onClick={handlderReset} >
                    Reset
                </Button>
            </div>

        </>

    )
}