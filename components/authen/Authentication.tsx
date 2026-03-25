import styles from "../../style/Authentication.module.css"
import { authencation } from "@/data/data"
export default function Authentication() {
    return (
        <div className={styles.authentication}>
            <h1 className={styles.authentication__title}>Authencation</h1>
            <span className={styles.authentication__desc}>
                <strong>Khái niệm:</strong> Authentication là cơ chế trong hệ thống phần mềm dùng để xác minh danh tính của client (user hoặc service) trước khi cho phép truy cập tài nguyên. Nó đơn giản trả lời cho câu hỏi: bạn là ai?
            </span>

            <strong className={styles.authentication__tableTitle}>Các loại xác thực authentication thường gặp:</strong>

            <table className={styles.authentication__table}>
                <thead className={styles.authentication__tableHead}>
                    <tr>
                        <th className={styles.authentication__tableHeadCell}>Method</th>
                        <th className={styles.authentication__tableHeadCell}>Description</th>
                        <th className={styles.authentication__tableHeadCell}>Advantages</th>
                        <th className={styles.authentication__tableHeadCell}>Disadvantages</th>
                    </tr>
                </thead>

                <tbody>
                    {authencation.map((item, index) => (
                        <tr key={index}>
                            <td className={styles.authentication__tableCell}>{item.method}</td>
                            <td className={styles.authentication__tableCell}>{item.description}</td>
                            <td className={styles.authentication__tableCell}>{item.advantages}</td>
                            <td className={styles.authentication__tableCell}>{item.disadvantages}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
