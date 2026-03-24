import { BoxPropsType } from "@/types/BoxPropsType";
import styles from "../../style/BoxStyle.module.css"
export default function Box({ children, stepActive, customStyle:string}: BoxPropsType) {
  return (
      <div className={`${stepActive ? styles['box-activity'] :styles.box}`}>
          {children}
    </div>
  )
}