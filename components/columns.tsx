"use client"

import { HookType } from "@/types/HookType"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<HookType>[] = [
    {
        accessorKey: "name",
        header: "Name",
    }
]