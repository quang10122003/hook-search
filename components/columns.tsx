"use client"

import { HookType } from "@/types/HookType"
import { ColumnDef } from "@tanstack/react-table"
import { useTranslations } from "next-intl"

export function useColumns(): ColumnDef<HookType>[] {
    const t = useTranslations("SearchBox.DataTable")
    return [
        {
            accessorKey: "name",
            header: t("header"),
        }
    ]
}