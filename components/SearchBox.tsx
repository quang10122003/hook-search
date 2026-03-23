"use client"
import { Input } from "./ui/input"
import styles from "../style/Input.module.css"
import { DataTable } from "./data-table"
import { columns } from "./columns"
import { useContext } from "react"
import {HookContext} from "../context/HookContext"
import { filterHooks } from "@/app/action"
export default function InputHook() {
  const { search, setSearch } = useContext(HookContext)

  const filteredHooks = filterHooks(search)

  function searchaAction(e){
    setSearch(e.target.value)
    
  }

  return (
    <>
      <div className={`${styles.searchbox} flex`}>
        <Input
          className={styles.searchbox__input}
          placeholder="nhap ten hook"
          value={search}
          onChange={(e) => searchaAction(e)}
        />
      </div>
      <div className={styles.listHook}>
        <DataTable columns={columns} data={filteredHooks} />
      </div>
    </>

  )
}
