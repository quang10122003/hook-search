import { HookType } from "@/types/HookType";

export const hooks: HookType[] = [
    {
        id: "use-state",
        name: "useState",
        desc: "quản lý các state cơ bản trong react gồm 1 mảng [state, setState]",
        code: `const [count, setCount] = useState(0);

return (
  <button onClick={() => setCount(count + 1)}>
    {count}
  </button>
);`
    },
    {
        id: "use-effect",
        name: "useEffect",
        desc: "là 1 hàm call back tự khởi chạy khi tải trang, unmount hoặc theo dependency",
        code: `useEffect(() => {
  console.log("Component mounted");

  return () => {
    console.log("Cleanup");
  };
}, []);`
    },
    {
        id: "use-context",
        name: "useContext",
        desc: "cho phép tạo 1 kho lưu trữ chung mà không cần truyền props",
        code: `const value = useContext(MyContext);

return <div>{value}</div>;`
    },
    {
        id: "use-ref",
        name: "useRef",
        desc: "tạo tham chiếu đến DOM",
        code: `const inputRef = useRef<HTMLInputElement>(null);

const focusInput = () => {
  inputRef.current?.focus();
};`
    },
    {
        id: "use-memo",
        name: "useMemo",
        desc: "tối ưu bằng cách memo giá trị",
        code: `const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);`
    },
    {
        id: "use-callback",
        name: "useCallback",
        desc: "tối ưu function để tránh re-render",
        code: `const handleClick = useCallback(() => {
  console.log("clicked");
}, []);`
    },
    {
        id: "use-reducer",
        name: "useReducer",
        desc: "quản lý state phức tạp",
        code: `const [state, dispatch] = useReducer(reducer, initialState);

dispatch({ type: "increment" });`
    },
    {
        id: "use-layout-effect",
        name: "useLayoutEffect",
        desc: "chạy đồng bộ sau DOM update",
        code: `useLayoutEffect(() => {
  console.log("Runs before paint");
}, []);`
    },
    {
        id: "use-imperative-handle",
        name: "useImperativeHandle",
        desc: "tùy chỉnh ref expose",
        code: `useImperativeHandle(ref, () => ({
  focus: () => {
    inputRef.current?.focus();
  }
}));`
    },
    {
        id: "use-id",
        name: "useId",
        desc: "tạo id unique",
        code: `const id = useId();

return <label htmlFor={id}>Name</label>;`
    }
];
export const authorization = [
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

export const authencation = [
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


export const lineOfAuthentication  = [
  { id: "1", x1: "0%", x2: "100%", label: "1) POST /login", activeFrom: 1, doneFrom: 2 },
  { id: "2", x1: "100%", x2: "0%", label: "2) Trả token", activeFrom: 3, doneFrom: 4 },
  { id: "3", x1: "0%", x2: "100%", label: "3) GET /profile", activeFrom: 5, doneFrom: 6 },
  { id: "4", x1: "100%", x2: "0%", label: "4) trả data", activeFrom: 7, doneFrom: 8 },
  { id: "5", x1: "0%", x2: "100%", label: "5) POST /refresh", activeFrom: 9, doneFrom: 10 },
  { id: "6", x1: "100%", x2: "0%", label: "6) Trả access token mới", activeFrom: 11, doneFrom: 12 },
];

export const Step_ContentOfAuthentication: Record<number, { user: string; server: string }> = {
    0: { user: "User", server: "Máy chủ chờ yêu cầu" },
    1: { user: "Gửi login", server: "Chờ request" },
    2: { user: "Đợi xác thực", server: "Xác thực username/password" },
    3: { user: "Đợi token", server: "Tạo JWT" },
    4: { user: "Nhận token", server: "Đã trả token" },
    5: { user: "Gọi API", server: "Chờ API" },
    6: { user: "Đợi data", server: "Verify JWT" },
    7: { user: "Đợi data", server: "Trả data" },
    8: { user: "Nhận data", server: "Done" },
    9: { user: "Token hết hạn", server: "Chờ refresh" },
    10: { user: "Đợi refresh", server: "Verify refresh token" },
    11: { user: "Đợi token mới", server: "Trả token mới" },
    12: { user: "Nhận token mới", server: "Done" },
};
export const TOTAL_STEPS_OF_AUTHENCATION = Object.keys(Step_ContentOfAuthentication).length - 1;

export const LineOfAuthorization = [
  { id: "1", x1: "0%", x2: "100%", label: "1) GET /api/data Authorization: kèm Bearer accessToken", activeFrom: 1, doneFrom: 2 },
  { id: "2", x1: "100%", x2: "0%", label: "2) Gửi response về cho user", activeFrom: 6, doneFrom: 7 },
]

export const Step_ContentOfAuthorization: Record<number, { user: string; server: string }> = {
        0: { user: "User", server: "Máy chủ chờ yêu cầu" },
        1: { user: "Gửi yêu cầu truy cập tài nguyên", server: "Máy chủ chờ yêu cầu", },
        2: { user: "Đang đợi kết quả", server: "1: kiểm tra JWT(Kiểm tra chữ ký, Kiểm tra hạn ,Decode payload)", },
        3: { user: "Đang đợi kết quả", server: "2: kiểm tra quyền của user(Role)", },
        4: { user: "Đang đợi kết quả", server: "3:Truy vấn DB lấy dữ liệu", },
        5: { user: "Đang đợi kết quả", server: "4:tạo repone", },
        6: { user: "Đang đợi kết quả", server: "5: trả repone cho user", },
        7: { user: "Nhận repone", server: "hoàn thành trả repone", },
    };

export const TOTAL_STEPS_OF_AUTHORIZATION = Object.keys(Step_ContentOfAuthorization).length - 1 