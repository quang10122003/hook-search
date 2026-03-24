import styles from "../../style/authorization.module.css"
export default function Authorization() {
    const authorization = [
        {
            model: "RBAC",
            description: "Role-Based Access Control (phân quyền theo vai trò)",
            advantages: "Dễ quản lý, phổ biến",
            disadvantages: "Không linh hoạt khi hệ thống lớn",
        },
        {
            model: "ABAC",
            description: "Attribute-Based Access Control (dựa trên thuộc tính)",
            advantages: "Linh hoạt cao",
            disadvantages: "Phức tạp khi triển khai",
        },
        {
            model: "ACL",
            description: "Access Control List (theo từng resource)",
            advantages: "Chi tiết, kiểm soát chính xác",
            disadvantages: "Khó quản lý khi nhiều user",
        },
        {
            model: "PBAC",
            description: "Policy-Based Access Control",
            advantages: "Quản lý tập trung",
            disadvantages: "Cần policy engine",
        },
        {
            model: "OAuth Scope",
            description: "Phân quyền theo scope API",
            advantages: "Phù hợp microservices",
            disadvantages: "Khó quản lý khi nhiều scope",
        },
    ];
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