import { useTranslations } from "next-intl"
import styles from "../../style/authorization.module.css"
import { authorization } from "@/data/data"
export default function Authorization() {
    const t = useTranslations("authen.Authorization")
    const tData = useTranslations()
    return (
        <div className={styles.authorization}>
            <h1 className={styles.authorization__title}>{t("title")}</h1>
            <span className={styles.authorization__desc}>
                <strong>{t("conception")}:</strong> {t("conceptionDesc")}
            </span>

            <strong className={styles.authorization__tableTitle}>{t("tableTitle")}:</strong>

            <table className={styles.authorization__table}>
                <thead className={styles.authorization__tableHead}>
                    <tr>
                        {(t.raw("tableHeadCell") as string[]).map((item) => (
                            <th
                                key={item}
                                className={styles.authorization__tableHeadCell}
                            >
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody >
                    {authorization.map((item, index) => (
                        <tr key={index}>
                            <td className={styles.authorization__tableCell}>{item.model}</td>
                            <td className={styles.authorization__tableCell}>{tData(item.description)}</td>
                            <td className={styles.authorization__tableCell}>{tData(item.advantages)}</td>
                            <td className={styles.authorization__tableCell}>{tData(item.disadvantages)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
