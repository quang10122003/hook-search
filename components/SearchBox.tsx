import { Input } from "./ui/input"
import styles from "../style/Input.module.css"
import { DataTable } from "./data-table"
import { columns } from "./columns"
import { hooks } from "@/data/hooks"
export default function InputHook() {
  return (
    <>
      <div className={`${styles.searchbox} flex`}>
        <Input className={styles.searchbox__input} />
      </div>
      <div className={styles.listHook}>
        <DataTable columns={columns} data={hooks} />
      </div>
    </>

  )
}
