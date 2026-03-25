import Box from "./Box";
import styles from "../../style/AuthenticationFlow.module.css";
import { Line } from "./Line";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
const TOTAL_STEPS = 12;
const LINE = [
    { id: "1", x1: "0%", x2: "100%", label: "1) POST /login", activeFrom: 1, doneFrom: 2 },
    { id: "2", x1: "100%", x2: "0%", label: "2) Trả token", activeFrom: 3, doneFrom: 4 },
    { id: "3", x1: "0%", x2: "100%", label: "3) GET /profile", activeFrom: 5, doneFrom: 6 },
    { id: "4", x1: "100%", x2: "0%", label: "4) trả data", activeFrom: 7, doneFrom: 8 },
    { id: "5", x1: "0%", x2: "100%", label: "5) POST /refresh", activeFrom: 9, doneFrom: 10 },
    { id: "6", x1: "100%", x2: "0%", label: "6) Trả access token mới", activeFrom: 11, doneFrom: 12 },
];
const STEP_CONTENT: Record<number, { user: string; server: string }> = {
    0: { user: "User", server: "Máy chủ chờ yêu cầu" },
    1: { user: "Gửi login", server: "Chờ request" },
    2: { user: "Đợi xác thực", server: "Xác thực username/password" },
    3: { user: "Đợi token", server: "Tạo JWT" },
    4: { user: "Nhận token", server: "Đã trả token" },
    5: { user: "Gọi API", server: "Chờ API" },
    6: { user: "Đợi data", server: "Verify JWT" },
    7: { user: "Đợi data", server: "Trả data" },
    8: { user: "Nhận data", server: "Done" },
    9: { user: "Token hết hạn", server: "Chờ refresh" },
    10: { user: "Đợi refresh", server: "Verify refresh token" },
    11: { user: "Đợi token mới", server: "Trả token mới" },
    12: { user: "Nhận token mới", server: "Done" },
};

export default function AuthenticationFlow() {
    const [step, setStep] = useState(0);
    const [play, setPlay] = useState(false);

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
    const currentContent = STEP_CONTENT[step] ?? STEP_CONTENT[0];

    const isUserActive = [0, 4, 8, 9, 12].includes(step);
    const isServerActive = [2, 3, 6, 10].includes(step);

    const handleReset = () => {
        setPlay(false);
        setStep(0);
    };

    return (
        <>
            <div className={styles.boxflow}>
                <Box stepActive={isUserActive}>
                    {currentContent.user}
                </Box>

                <div className={styles.boxflow__lines}>
                    {LINE.map((line) => (
                        <Line
                            key={line.id}
                            id={line.id}
                            x1={line.x1}
                            x2={line.x2}
                            step={step}
                            activeFrom={line.activeFrom}
                            doneFrom={line.doneFrom}
                        >
                            {line.label}
                        </Line>
                    ))}
                </div>

                <Box stepActive={isServerActive}>
                    {currentContent.server}
                </Box>
            </div>

            <div className={styles.boxflex__button}>
                <Button className={styles.buton} onClick={() => setPlay((p) => !p)}>
                    {play ? "Pause" : "Play"}
                </Button>

                <Button className={styles.buton} onClick={handleReset}>
                    Reset
                </Button>
            </div>
        </>
    );
}