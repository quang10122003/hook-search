import { useState } from "react"
import styles from "../../style/authen.module.css"
import Sidebar from "./Sidebar"
import Authentication from "./Authentication"
import Authorization from "./Authorization"
import AuthenticationFlow from "./AuthenticationFlow."
export default function AuthenLayout() {
    const [menuState, setmenuState] = useState("authencation")
    return (
        <div className={styles.authen}>
            <div className={styles.authen__left}>
                <Sidebar setmenuState={setmenuState}/>
            </div>
            <div className={styles.authen__right}>
                {menuState === "authencation" && <Authentication />}
                {menuState === "authorization" && <Authorization />}
                {menuState === "authencationFlow" && <AuthenticationFlow />}
                {menuState === "authorizationFlow" && <Authorization />}

            </div>
        </div>
    )
}