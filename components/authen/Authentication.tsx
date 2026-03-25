import { useTranslations } from "next-intl"
import styles from "../../style/Authentication.module.css"
import { authencation } from "@/data/data"
export default function Authentication() {
    const t = useTranslations("authen.Authentication")
    const tData = useTranslations()
    return (
        <div className={styles.authentication}>
            <h1 className={styles.authentication__title}>{t("title")}</h1>
            <span className={styles.authentication__desc}>
                <strong>{t("conception")}:</strong>{t("conceptionDesc")}
            </span>

            <strong className={styles.authentication__tableTitle}>{t("tableTitle")}:</strong>

            <table className={styles.authentication__table}>
                <thead className={styles.authentication__tableHead}>
                    <tr>
                        {(t.raw("tableHeadCell") as string[]).map((item) => (
                            <th key={item} className={styles.authentication__tableHeadCell}>{item}</th>
                        ))}
                    </tr>
                        
                </thead>

                <tbody>
                    {authencation.map((item, index) => (
                        <tr key={index}>
                            <td className={styles.authentication__tableCell}>{item.method}</td>
                            <td className={styles.authentication__tableCell}>{tData(item.description)}</td>
                            <td className={styles.authentication__tableCell}>{tData(item.advantages)}</td>
                            <td className={styles.authentication__tableCell}>{tData(item.disadvantages)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
