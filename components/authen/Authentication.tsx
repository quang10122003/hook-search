import styles from "../../style/Authentication.module.css"

const authencation = [
    {
        method: "Password",
        description: "User enters username and password",
        advantages: "Simple, easy to implement",
        disadvantages: "Low security if weak password",
    },
    {
        method: "JWT Token",
        description: "Token-based authentication",
        advantages: "Stateless, scalable",
        disadvantages: "Hard to revoke token",
    },
    {
        method: "Session",
        description: "Server stores session",
        advantages: "Easy to manage, revoke",
        disadvantages: "Not scalable (server memory)",
    },
    {
        method: "OAuth",
        description: "Login via Google/Facebook",
        advantages: "No password needed",
        disadvantages: "Depend on third-party",
    },
    {
        method: "2FA",
        description: "Password + OTP",
        advantages: "High security",
        disadvantages: "More steps for user",
    },
    {
        method: "Biometric",
        description: "Fingerprint / Face ID",
        advantages: "Very secure, convenient",
        disadvantages: "Requires hardware",
    },
]

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
                    {authencation.map((item , index) => (
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
