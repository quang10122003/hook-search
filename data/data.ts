import { HookType } from "@/types/HookType";

export const hooks: HookType[] = [
  {
    id: "use-state",
    name: "useState",
    desc: "Data.hooks.useState.desc",
    code: `const [count, setCount] = useState(0);

return (
  <button onClick={() => setCount(count + 1)}>
    {count}
  </button>
);`,
  },
  {
    id: "use-effect",
    name: "useEffect",
    desc: "Data.hooks.useEffect.desc",
    code: `useEffect(() => {
  console.log("Component mounted");

  return () => {
    console.log("Cleanup");
  };
}, []);`,
  },
  {
    id: "use-context",
    name: "useContext",
    desc: "Data.hooks.useContext.desc",
    code: `const value = useContext(MyContext);

return <div>{value}</div>;`,
  },
  {
    id: "use-ref",
    name: "useRef",
    desc: "Data.hooks.useRef.desc",
    code: `const inputRef = useRef<HTMLInputElement>(null);

const focusInput = () => {
  inputRef.current?.focus();
};`,
  },
  {
    id: "use-memo",
    name: "useMemo",
    desc: "Data.hooks.useMemo.desc",
    code: `const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);`,
  },
  {
    id: "use-callback",
    name: "useCallback",
    desc: "Data.hooks.useCallback.desc",
    code: `const handleClick = useCallback(() => {
  console.log("clicked");
}, []);`,
  },
  {
    id: "use-reducer",
    name: "useReducer",
    desc: "Data.hooks.useReducer.desc",
    code: `const [state, dispatch] = useReducer(reducer, initialState);

dispatch({ type: "increment" });`,
  },
  {
    id: "use-layout-effect",
    name: "useLayoutEffect",
    desc: "Data.hooks.useLayoutEffect.desc",
    code: `useLayoutEffect(() => {
  console.log("Runs before paint");
}, []);`,
  },
  {
    id: "use-imperative-handle",
    name: "useImperativeHandle",
    desc: "Data.hooks.useImperativeHandle.desc",
    code: `useImperativeHandle(ref, () => ({
  focus: () => {
    inputRef.current?.focus();
  }
}));`,
  },
  {
    id: "use-id",
    name: "useId",
    desc: "Data.hooks.useId.desc",
    code: `const id = useId();

return <label htmlFor={id}>Name</label>;`,
  },
];

export const authorization = [
  {
    model: "RBAC",
    description: "Data.authorization.rbac.description",
    advantages: "Data.authorization.rbac.advantages",
    disadvantages: "Data.authorization.rbac.disadvantages",
  },
  {
    model: "ABAC",
    description: "Data.authorization.abac.description",
    advantages: "Data.authorization.abac.advantages",
    disadvantages: "Data.authorization.abac.disadvantages",
  },
  {
    model: "ACL",
    description: "Data.authorization.acl.description",
    advantages: "Data.authorization.acl.advantages",
    disadvantages: "Data.authorization.acl.disadvantages",
  },
  {
    model: "PBAC",
    description: "Data.authorization.pbac.description",
    advantages: "Data.authorization.pbac.advantages",
    disadvantages: "Data.authorization.pbac.disadvantages",
  },
  {
    model: "OAuth Scope",
    description: "Data.authorization.oauthScope.description",
    advantages: "Data.authorization.oauthScope.advantages",
    disadvantages: "Data.authorization.oauthScope.disadvantages",
  },
];

export const authencation = [
  {
    method: "Password",
    description: "Data.authentication.password.description",
    advantages: "Data.authentication.password.advantages",
    disadvantages: "Data.authentication.password.disadvantages",
  },
  {
    method: "JWT Token",
    description: "Data.authentication.jwt.description",
    advantages: "Data.authentication.jwt.advantages",
    disadvantages: "Data.authentication.jwt.disadvantages",
  },
  {
    method: "Session",
    description: "Data.authentication.session.description",
    advantages: "Data.authentication.session.advantages",
    disadvantages: "Data.authentication.session.disadvantages",
  },
  {
    method: "OAuth",
    description: "Data.authentication.oauth.description",
    advantages: "Data.authentication.oauth.advantages",
    disadvantages: "Data.authentication.oauth.disadvantages",
  },
  {
    method: "2FA",
    description: "Data.authentication.twoFa.description",
    advantages: "Data.authentication.twoFa.advantages",
    disadvantages: "Data.authentication.twoFa.disadvantages",
  },
  {
    method: "Biometric",
    description: "Data.authentication.biometric.description",
    advantages: "Data.authentication.biometric.advantages",
    disadvantages: "Data.authentication.biometric.disadvantages",
  },
];

export const lineOfAuthentication = [
  { id: "1", x1: "0%", x2: "100%", label: "Data.authenticationFlow.lines.line1", activeFrom: 1, doneFrom: 2 },
  { id: "2", x1: "100%", x2: "0%", label: "Data.authenticationFlow.lines.line2", activeFrom: 3, doneFrom: 4 },
  { id: "3", x1: "0%", x2: "100%", label: "Data.authenticationFlow.lines.line3", activeFrom: 5, doneFrom: 6 },
  { id: "4", x1: "100%", x2: "0%", label: "Data.authenticationFlow.lines.line4", activeFrom: 7, doneFrom: 8 },
  { id: "5", x1: "0%", x2: "100%", label: "Data.authenticationFlow.lines.line5", activeFrom: 9, doneFrom: 10 },
  { id: "6", x1: "100%", x2: "0%", label: "Data.authenticationFlow.lines.line6", activeFrom: 11, doneFrom: 12 },
];

export const Step_ContentOfAuthentication: Record<number, { user: string; server: string }> = {
  0: { user: "Data.authenticationFlow.steps.0.user", server: "Data.authenticationFlow.steps.0.server" },
  1: { user: "Data.authenticationFlow.steps.1.user", server: "Data.authenticationFlow.steps.1.server" },
  2: { user: "Data.authenticationFlow.steps.2.user", server: "Data.authenticationFlow.steps.2.server" },
  3: { user: "Data.authenticationFlow.steps.3.user", server: "Data.authenticationFlow.steps.3.server" },
  4: { user: "Data.authenticationFlow.steps.4.user", server: "Data.authenticationFlow.steps.4.server" },
  5: { user: "Data.authenticationFlow.steps.5.user", server: "Data.authenticationFlow.steps.5.server" },
  6: { user: "Data.authenticationFlow.steps.6.user", server: "Data.authenticationFlow.steps.6.server" },
  7: { user: "Data.authenticationFlow.steps.7.user", server: "Data.authenticationFlow.steps.7.server" },
  8: { user: "Data.authenticationFlow.steps.8.user", server: "Data.authenticationFlow.steps.8.server" },
  9: { user: "Data.authenticationFlow.steps.9.user", server: "Data.authenticationFlow.steps.9.server" },
  10: { user: "Data.authenticationFlow.steps.10.user", server: "Data.authenticationFlow.steps.10.server" },
  11: { user: "Data.authenticationFlow.steps.11.user", server: "Data.authenticationFlow.steps.11.server" },
  12: { user: "Data.authenticationFlow.steps.12.user", server: "Data.authenticationFlow.steps.12.server" },
};
export const TOTAL_STEPS_OF_AUTHENCATION = Object.keys(Step_ContentOfAuthentication).length - 1;

export const LineOfAuthorization = [
  { id: "1", x1: "0%", x2: "100%", label: "Data.authorizationFlow.lines.line1", activeFrom: 1, doneFrom: 2 },
  { id: "2", x1: "100%", x2: "0%", label: "Data.authorizationFlow.lines.line2", activeFrom: 6, doneFrom: 7 },
];

export const Step_ContentOfAuthorization: Record<number, { user: string; server: string }> = {
  0: { user: "Data.authorizationFlow.steps.0.user", server: "Data.authorizationFlow.steps.0.server" },
  1: { user: "Data.authorizationFlow.steps.1.user", server: "Data.authorizationFlow.steps.1.server" },
  2: { user: "Data.authorizationFlow.steps.2.user", server: "Data.authorizationFlow.steps.2.server" },
  3: { user: "Data.authorizationFlow.steps.3.user", server: "Data.authorizationFlow.steps.3.server" },
  4: { user: "Data.authorizationFlow.steps.4.user", server: "Data.authorizationFlow.steps.4.server" },
  5: { user: "Data.authorizationFlow.steps.5.user", server: "Data.authorizationFlow.steps.5.server" },
  6: { user: "Data.authorizationFlow.steps.6.user", server: "Data.authorizationFlow.steps.6.server" },
  7: { user: "Data.authorizationFlow.steps.7.user", server: "Data.authorizationFlow.steps.7.server" },
};

export const TOTAL_STEPS_OF_AUTHORIZATION = Object.keys(Step_ContentOfAuthorization).length - 1;
