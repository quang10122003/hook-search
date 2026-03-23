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