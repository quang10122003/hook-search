import Box from "./Box";
import styles from "../../style/AuthenticationFlow.module.css"
import { Line } from "./Line";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { LineOfAuthorization } from "@/data/data";
import { Step_ContentOfAuthorization } from "@/data/data";
import { TOTAL_STEPS_OF_AUTHORIZATION } from "@/data/data";
import { useTranslations } from "next-intl";
export default function AuthorizationFlow() {
    const t = useTranslations()

    const [step, setStep] = useState(0)
    const [play, setPlay] = useState(false)

    function handlderStop() {
        setPlay((prev) => !prev)
    }

    function handlderReset() {
        setPlay(false)
        setStep(0)
    }
    useEffect(() => {
        if (!play) return;

        const interval = setInterval(() => {
            setStep((prev) => {
                if (prev >= TOTAL_STEPS_OF_AUTHORIZATION) {
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
                <Box stepActive={isUserActive}>{t(Step_ContentOfAuthorization[step].user)}</Box>

                <div className={styles.boxflow__lines}>
                    {LineOfAuthorization.map((line) => {
                        return (
                            <Line
                                key={line.id}
                                id={line.id}
                                x1={line.x1}
                                x2={line.x2}
                                step={step}
                                activeFrom={line.activeFrom}
                                doneFrom={line.doneFrom}                          >
                                {t(line.label)}
                            </Line>
                        )
                    })}
                </div>
                <Box stepActive={isServerActive}>{t(Step_ContentOfAuthorization[step].server)}</Box>
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
