import styles from "../../style/lineStyle.module.css";
import { LinePropsType } from "@/types/LinePropsType";
export function Line({ children, id, customStyle, x1, x2, step, activeFrom, doneFrom }: LinePropsType) {

    const isActive = step === activeFrom;
    const isDone = step >= doneFrom;


    const strokeColor = isDone? "#16a34a" : (isActive ? "#2563eb"  : "#9ca3af")

    return (
        <svg
            width="100%"
            height="40"
            style={{ ...customStyle, overflow: "visible" }}
        >
            <defs>
                <marker
                    id={id}
                    markerWidth="10"
                    markerHeight="10"
                    refX="10"
                    refY="5"
                    orient="auto"
                >
                    <path
                        d="M0,0 L10,5 L0,10 Z"
                        fill={strokeColor}
                    />
                </marker>
            </defs>

            <line
                x1={x1}
                y1="10"
                x2={x2}
                y2="10"
                stroke={strokeColor}
                strokeWidth="2"
                markerEnd={`url(#${id})`}
                className={isActive ? styles.flow : ""}
            />

            <text
                x="50%"
                y="24"
                textAnchor="middle"
                fontSize="13px"
                fill="#374151"
            >
                {children}
            </text>
        </svg>
    );
}