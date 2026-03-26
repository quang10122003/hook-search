"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "./Header"
import InputHook from "./SearchBox"
import HookDesc from "./HookDesc"
import styles from "../style/tab.module.css"
import AuthenLayout from "./authen/AuthLayout"
import { useTranslations } from "next-intl"
import { useAppDispatch, useAppSelector } from "@/hook"
import ReduxLayout from "./redux/ReduxLayout"

export function Tab() {
    const t = useTranslations("Tab")
    const search = useAppSelector(state=>state.hook.search)
    const dispatch = useAppDispatch()
    return (
        <Tabs className={styles.tab} defaultValue="hook">
            <TabsList className={styles.tab__list}>
                <TabsTrigger style={{ fontSize: "16px" }} value="hook">
                    {t("hookTab")}
                </TabsTrigger>
                <TabsTrigger style={{ fontSize: "16px" }} value="authen">
                    {t("authenTab")}
                </TabsTrigger>
                <TabsTrigger style={{ fontSize: "16px" }} value="reudux">
                    redux
                </TabsTrigger>
            </TabsList>

            <TabsContent className={styles.tab__content} value="hook">
                <Card className={styles.tab__card}>
                    <CardContent className={styles["tab__card-content"]}>
                        <Header />
                        <InputHook search={search} dispatch={dispatch} />
                        <HookDesc dispatch={dispatch} />
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent className={styles.tab__content} value="authen">
                <Card className={styles.tab__card}>
                    <CardContent className={styles["tab__card-content"]}>
                        <AuthenLayout />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent className={styles.tab__content} value="reudux">
                <Card className={styles.tab__card}>
                    <CardContent className={styles["tab__card-content"]}>
                        <ReduxLayout/>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
