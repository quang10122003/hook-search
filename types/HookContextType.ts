import { Dispatch, SetStateAction } from "react"
import { HookType } from "./HookType"

export interface HookContextType  {
    search: string
    setSearch: Dispatch<SetStateAction<string>>
    selectHook: HookType | null
    setSelectHook: Dispatch<SetStateAction<HookType | null>>
}
