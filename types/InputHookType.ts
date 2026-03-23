import { Dispatch, SetStateAction } from "react";
import { HookType } from "./HookType";

export interface InputHookType{
    search:string,
    setSearch: Dispatch<SetStateAction<string>>
    setSelectHook: Dispatch<SetStateAction<HookType | null>>
}