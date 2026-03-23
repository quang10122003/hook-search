import { HookType } from "@/types/HookType";

export const hooks: HookType[] = [
    {
        id: "use-state",
        name: "useState",
        desc: "Quản lý state trong functional component."
    },
    {
        id: "use-effect",
        name: "useEffect",
        desc: "Xử lý side effects như fetch data, DOM manipulation."
    },
    {
        id: "use-context",
        name: "useContext",
        desc: "Truy cập dữ liệu từ Context mà không cần props drilling."
    },
    {
        id: "use-ref",
        name: "useRef",
        desc: "Giữ giá trị mutable hoặc tham chiếu tới DOM element."
    },
    {
        id: "use-memo",
        name: "useMemo",
        desc: "Tối ưu hiệu năng bằng cách memo hóa giá trị."
    },
    {
        id: "use-callback",
        name: "useCallback",
        desc: "Memo hóa function để tránh re-render không cần thiết."
    },
    {
        id: "use-reducer",
        name: "useReducer",
        desc: "Quản lý state phức tạp với reducer pattern."
    },
    {
        id: "use-layout-effect",
        name: "useLayoutEffect",
        desc: "Giống useEffect nhưng chạy đồng bộ sau DOM update."
    },
    {
        id: "use-imperative-handle",
        name: "useImperativeHandle",
        desc: "Tùy chỉnh ref được expose từ component."
    },
    {
        id: "use-id",
        name: "useId",
        desc: "Tạo id duy nhất ổn định cho accessibility."
    }
];