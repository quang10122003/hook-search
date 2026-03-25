import styles from "../../style/authorization.module.css"
import { authorization } from "@/data/data"
export default function Authorization() {

    return (
        <div className={styles.authorization}>
            <h1 className={styles.authorization__title}>Authencation</h1>
            <span className={styles.authorization__desc}>
                <strong>Khái niệm:</strong> Authorization là cơ chế trong hệ thống phần mềm dùng để xác định quyền truy cập của client (user hoặc service) sau khi đã được xác thực. Nó đơn giản trả lời cho câu hỏi: bạn được phép làm gì?
            </span>

            <strong className={styles.authorization__tableTitle}>Các loại xác thực authorization thường gặp:</strong>

            <table className={styles.authorization__table}>
                <thead className={styles.authorization__tableHead}>
                    <tr>
                        <th className={styles.authorization__tableHeadCell}>Model</th>
                        <th className={styles.authorization__tableHeadCell}>Description</th>
                        <th className={styles.authorization__tableHeadCell}>Advantages</th>
                        <th className={styles.authorization__tableHeadCell}>Disadvantages</th>
                    </tr>
                </thead>

                <tbody >
                    {authorization.map((item, index) => (
                        <tr key={index}>
                            <td className={styles.authorization__tableCell}>{item.model}</td>
                            <td className={styles.authorization__tableCell}>{item.description}</td>
                            <td className={styles.authorization__tableCell}>{item.advantages}</td>
                            <td className={styles.authorization__tableCell}>{item.disadvantages}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}