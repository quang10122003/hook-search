"use client"
import { createContext, useState, type ReactNode, type Dispatch, type SetStateAction } from "react"
import type { HookType } from "@/types/HookType"
import { HookContextType } from "@/types/HookContextType"


export const HookContext = createContext<HookContextType | null>(null)

export function HookProvider({ children }: { children: ReactNode }) {
    const [search, setSearch] = useState("")
    const [selectHook, setSelectHook ] = useState<HookType | null>(null)
    const data = {
        search,
        setSearch,
        selectHook,
        setSelectHook
    }
    return (
        <HookContext.Provider value={data}>
            {children}
        </HookContext.Provider>
    )
}
