import { Dispatch, SetStateAction } from "react";
import { HookType } from "./HookType";
import { AppDispatch } from "@/app/store";

export interface InputHookType{
    search:string,
    dispatch: AppDispatch
}