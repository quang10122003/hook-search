import styles from "../style/Header.module.css"
export default function Header() {
  return (
    <div className={`${styles.header} flex`}>
      <h1 className={styles.header__title}>Search Hook</h1>
    </div>
  )
}