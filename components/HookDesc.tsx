import { HookDescType } from "@/types/HookDescType"
import styles from "../style/HookDesc.module.css"
import { useTranslations } from "next-intl"

export default function HookDesc({ selectHook }: HookDescType) {
  const t = useTranslations()

  if (!selectHook) {
    return <div />
  }

  return (
    <div className={`${styles.hookDesc} flex`}>
      <h2 className={styles.hookDesc__title}>{selectHook.name}</h2>
      <p className={styles.hookDesc__desc}>{t(selectHook.desc)}</p>
      <div className={styles.hookDesc__blockcode}>
        <pre>
          <code>
            {selectHook.code}
          </code>
        </pre>
      </div>

    </div>
  )
}
