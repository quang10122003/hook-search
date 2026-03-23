"use client"
import type { ChangeEvent } from "react"
import { Input } from "./ui/input"
import styles from "../style/Input.module.css"
import { DataTable } from "./data-table"
import { columns } from "./columns"
import { filterHooks } from "@/app/action"
import { InputHookType } from "@/types/InputHookType"

export default function InputHook({ search, setSearch, setSelectHook }: InputHookType) {
  const filteredHooks = filterHooks(search)

  function searchaAction(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
    setSelectHook(null)
  }

  return (
    <>
      <div className={`${styles.searchbox} flex`}>
        <Input
          className={styles.searchbox__input}
          placeholder="nhap ten hook"
          value={search}
          onChange={searchaAction}
        />
      </div>
      <div className={styles.listHook}>
        <DataTable setSelectHook={setSelectHook} columns={columns} data={filteredHooks} />
      </div>
    </>

  )
}
