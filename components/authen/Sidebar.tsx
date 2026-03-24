import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import styles from "../../style/siderBar.module.css"
import { SidebarType } from "@/types/SidebarType"
export default function Sidebar({ setmenuState }: SidebarType) {
    function handlderClickMenu(value:string){
        setmenuState(value)
    }
  return (
      <Tabs defaultValue="authencation" orientation="vertical" className={styles.tab}>
          <TabsList className={styles.tab__list}>
              <TabsTrigger onClick={() => handlderClickMenu("authencation")} className={styles.tab__content} value="authencation">Authencation</TabsTrigger>
              <TabsTrigger onClick={() => handlderClickMenu("authorization")} className={styles.tab__content} value="analytics">Authorization</TabsTrigger>
              <TabsTrigger onClick={() => handlderClickMenu("authencationFlow")} className={styles.tab__content} value="reports">AuthencationFlow</TabsTrigger>
              <TabsTrigger onClick={() => handlderClickMenu("authorizationFlow")} className={styles.tab__content} value="settings">Settings</TabsTrigger>
          </TabsList>
          
      </Tabs>
  )
}