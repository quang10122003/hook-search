import { HookType } from "@/types/HookType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface HookStateType{
    search: string,
    selectHook: HookType | null
}

const initialState: HookStateType ={
    search: "",
    selectHook:null
}

const hookSlice = createSlice({
    name:"hook",
    initialState,
    reducers:{
        setSearch : function(state,action:PayloadAction<string>){
            state.search = action.payload
        },
        setSelectHook:function(state,action:PayloadAction<HookType|null>){
            state.selectHook = action.payload;
        }
    }
});

export const { setSearch, setSelectHook } = hookSlice.actions
export default hookSlice.reducer