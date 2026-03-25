import Box from "./Box";
import styles from "../../style/AuthenticationFlow.module.css";
import { Line } from "./Line";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { lineOfAuthentication } from "@/data/data";
import { Step_ContentOfAuthentication } from "@/data/data";
import { TOTAL_STEPS_OF_AUTHENCATION } from "@/data/data";
export default function AuthenticationFlow() {
    const [step, setStep] = useState(0);
    const [play, setPlay] = useState(false);

    useEffect(() => {
        if (!play) return;

        const interval = setInterval(() => {
            setStep((prev) => {
                if (prev >= TOTAL_STEPS_OF_AUTHENCATION) {
                    setPlay(false)
                    return 0
                }
                return (prev + 1)
            })
        }, 2000);

        return () => clearInterval(interval);
    }, [play]);
    const currentContent = Step_ContentOfAuthentication[step] ?? Step_ContentOfAuthentication[0];

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
                    {lineOfAuthentication.map((line) => (
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