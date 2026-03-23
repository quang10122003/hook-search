"use client"

import { createContext, ReactNode, useState } from "react"

type HookProviderType = {
    children : ReactNode
}
export const HookContext = createContext()
export default function HookProvider({ children }: HookProviderType){
    const [search,setSearch] = useState("")
    const data={
        search,
        setSearch
        
    }
    return(
        <HookContext.Provider value={data}>
            {children}
        </HookContext.Provider>
    )
}