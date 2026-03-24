import React from "react";

export interface BoxPropsType{
    children: React.ReactNode,
    stepActive: boolean
    customStyle?:React.CSSProperties 
}