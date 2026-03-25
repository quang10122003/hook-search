export interface LinePropsType {
    id: string;
    x1: string;
    x2: string;
    step: number;
    activeFrom: number;
    doneFrom: number;
    children: React.ReactNode;
    customStyle?: React.CSSProperties;
};