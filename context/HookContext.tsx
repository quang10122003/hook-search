"use client"
import { createContext, useState, type ReactNode, type Dispatch, type SetStateAction } from "react"


export const HookContext = createContext()

export function HookProvider({ children }: { children: ReactNode }) {
    const [search, setSearch] = useState("")
    const data = {
        search,
        setSearch
    }
    return (
        <HookContext.Provider value={data}>
            {children}
        </HookContext.Provider>
    )
}
