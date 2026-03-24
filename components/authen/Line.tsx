import { LinePropsType } from "@/types/LinePropsType";

function Line({ children,active, done, id, customStyle,x1,x2,y1,y2}: LinePropsType) {
    return (
        <svg width="120" height="40" style={ customStyle }>
            <defs>
                <marker
                    id={id}
                    markerWidth="10"
                    markerHeight="10"
                    refX="10"
                    refY="5"
                    orient="auto"
                >
                    <path d="M0,0 L10,5 L0,10 Z" fill={done ? "green" : "gray"} />
                </marker>
            </defs>

            <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={done ? "green" : "gray"}
                strokeWidth="2"
                markerEnd={`url(#${id})`}
                className={active ? "flow" : ""}

            />
            <text
                x="50"
                y="15"
                textAnchor="middle"
                fontSize="12"
            >
                {children}
            </text>
        </svg>
    );
}