import { HookDescType } from "@/types/HookDescType"
import styles from "../style/HookDesc.module.css"

export default function HookDesc({ selectHook }: HookDescType) {
  if (!selectHook) {
    return <div />
  }

  return (
    <div className={`${styles.hookDesc} flex`}>
      <h2 className={styles.hookDesc__title}>{selectHook.name}</h2>
      <p className={styles.hookDesc__desc}>{selectHook.desc}</p>
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
