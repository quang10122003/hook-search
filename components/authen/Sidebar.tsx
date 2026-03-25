import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import styles from "../../style/siderBar.module.css"
import { SidebarType } from "@/types/SidebarType"
import { useTranslations } from "next-intl"
export default function Sidebar({ setmenuState }: SidebarType) {
    const t = useTranslations("authen")
    function handlderClickMenu(value:string){
        setmenuState(value)
    }
  return (
      <Tabs defaultValue="authencation" orientation="vertical" className={styles.tab}>
          <TabsList className={styles.tab__list}>
              <TabsTrigger onClick={() => handlderClickMenu("authencation")} className={styles.tab__content} value="authencation">Authencation</TabsTrigger>
              <TabsTrigger onClick={() => handlderClickMenu("authorization")} className={styles.tab__content} value="analytics">Authorization</TabsTrigger>
              <TabsTrigger onClick={() => handlderClickMenu("authencationFlow")} className={styles.tab__content} value="reports">{t("authencationFlow")}</TabsTrigger>
              <TabsTrigger onClick={() => handlderClickMenu("authorizationFlow")} className={styles.tab__content} value="settings">{t("authorizationFlow")}</TabsTrigger>
          </TabsList>
      </Tabs>
  )
}