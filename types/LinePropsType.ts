export interface LinePropsType{
    children: React.ReactNode
    active:boolean
    done :boolean
    id : string
    customStyle?: React.CSSProperties;
    x1:string,
    x2:string,
    y1: string,
    y2: string
}