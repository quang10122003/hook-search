"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "./Header"
import InputHook from "./SearchBox"
import HookDesc from "./HookDesc"
import { useContext } from "react"
import { HookContext } from "@/context/HookContext"
import styles from "../style/tab.module.css"
import AuthenLayout from "./authen/AuthLayout"
import { useTranslations } from "next-intl"

export function Tab() {
    const t = useTranslations("Tab")
    const context = useContext(HookContext)

    if (!context) {
        throw new Error(t("contextMissing"))
    }

    const { search, setSearch, selectHook, setSelectHook } = context

    return (
        <Tabs className={styles.tab} defaultValue="hook">
            <TabsList className={styles.tab__list}>
                <TabsTrigger style={{ fontSize: "16px" }} value="hook">
                    {t("hookTab")}
                </TabsTrigger>
                <TabsTrigger style={{ fontSize: "16px" }} value="authen">
                    {t("authenTab")}
                </TabsTrigger>
            </TabsList>

            <TabsContent className={styles.tab__content} value="hook">
                <Card className={styles.tab__card}>
                    <CardContent className={styles["tab__card-content"]}>
                        <Header />
                        <InputHook search={search} setSearch={setSearch} setSelectHook={setSelectHook} />
                        <HookDesc selectHook={selectHook} />
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
        </Tabs>
    )
}
