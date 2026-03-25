import { useTranslations } from "next-intl"
import styles from "../style/Header.module.css"
export default function Header() {
  const t = useTranslations("Header")
  return (
    <div className={`${styles.header} flex`}>
      <h1 className={styles.header__title}>{t("header__title")}</h1>
    </div>
  )
}