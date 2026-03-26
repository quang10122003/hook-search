import styles from "@/style/ReduxLayout.module.css"

export default function ReduxLayout() {
    return (
        <section className={styles.reduxLayout}>
            <article className={styles.reduxLayout__section}>
                <h1 className={styles.reduxLayout__title}>redux</h1>
                <p className={styles.reduxLayout__text}>
                    <strong>kiến trúc luồng dữ liệu:</strong> {"User Action => dispatch => reducer(logic) => strore(update state)=>useSelector( lấy data)=> ui re-rende"}
                </p>

                <p className={styles.reduxLayout__text}>
                    <strong>Store:</strong> nó là nguồn dữ liệu duy nhất lưu toàn bộ state của 1 dự án dưới dạng state tree
                </p>
                <ul className={styles.reduxLayout__list}>
                    <li className={styles.reduxLayout__item}>getState(): đọc state</li>
                    <li className={styles.reduxLayout__item}>getState(): dùng để gửi 1 sự kiện ( action) đến reducer để thực hiện logic</li>
                    <li className={styles.reduxLayout__item}>subscribe(): đăng ký 1 hàm với store hàm đc đăng ký sẽ tự động đc gọi kho state thay đổi</li>
                </ul>

                <p className={styles.reduxLayout__text}>
                    <strong>State:</strong> dữ liệu của dự án tại 1 thời điểm{" "}
                    <span className={styles.reduxLayout__explain}>
                        (Giải thích: state nếu thay đổi thì phải có tính bất biến tức là tạo ra bản sao để so sánh và re-render ui)
                    </span>
                </p>
                <p className={styles.reduxLayout__text}>
                    <strong>Action:</strong> là 1 đối tượng js đơn giản thường để mô tả ý định thay đổi trạng thái thường gồm (type, payload)
                </p>
                <p className={styles.reduxLayout__text}>
                    <strong>Dispatch:</strong> là 1 hàm của store để gửi action về reducer để thực hiện nghiệp vụ logic của action đó
                </p>
                <p className={styles.reduxLayout__text}>
                    <strong>Reducer:</strong> là các hàm nhận vào ( state, action) trả về state mới
                </p>
                <p className={styles.reduxLayout__text}>
                    <strong>useSelector:</strong> là hàm lấy dữ liệu từ store và đăng ký subscribe() vào store để re-reder ui khi state thay đổi
                </p>
                <p className={styles.reduxLayout__text}>
                    <strong>Middleware:</strong> xử lý các logic bên ngoài như call api v.v(nó thực hiện sau khi Dispatch và trước khi Reducer) (dispatch → middleware → reducer)
                </p>
            </article>

            <article className={styles.reduxLayout__section}>
                <h1 className={styles.reduxLayout__title}>REDUX TOOLKIT</h1>
                <p className={styles.reduxLayout__text}>
                    <strong>Khái niệm:</strong> nó là công cụ sử dụng hiện đại của redux tối ưu 3 nhược điểm của redux (nhiều code thừa , Immutable phức tạp,Setup phức tạp)
                </p>
                <h2 className={styles.reduxLayout__subtitle}>các tiện ích lớn</h2>
                <ul className={styles.reduxLayout__list}>
                    <li className={styles.reduxLayout__item}>
                        Gộp Action + Reducer → Slice{" "}
                        <span className={styles.reduxLayout__explain}>
                            (Giải thích: ở redux ta phải tách riêng Action Reducer Type (có file khác nhau))
                        </span>
                        <div className={styles.reduxLayout__example}>
                            <p className={styles.reduxLayout__exampleLabel}>Ví dụ code</p>
                            <p className={styles.reduxLayout__exampleTitle}>Redux</p>
                            <pre className={styles.reduxLayout__code}><code>{`// actionTypes.ts
export const SET_SEARCH = "SET_SEARCH";

// actions.ts
export const setSearch = (payload: string) => ({
  type: SET_SEARCH,
  payload
});

// reducer.ts
const initialState = { search: "" };
export function hookReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
}`}</code></pre>
                            <p className={styles.reduxLayout__exampleTitle}>Redux Toolkit</p>
                            <pre className={styles.reduxLayout__code}><code>{`// hookSlice.ts
const hookSlice = createSlice({
  name: "hook",
  initialState: { search: "" },
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    }
  }
});

export const { setSearch } = hookSlice.actions;
export default hookSlice.reducer;`}</code></pre>
                        </div>
                    </li>
                    <li className={styles.reduxLayout__item}>
                        tự động tạo action : action được generate tự động từ reducer name của Slice
                        <div className={styles.reduxLayout__example}>
                            <p className={styles.reduxLayout__exampleLabel}>Ví dụ code</p>
                            <p className={styles.reduxLayout__exampleTitle}>Redux</p>
                            <pre className={styles.reduxLayout__code}><code>{`// phải tự viết action creator
export const SET_SEARCH = "SET_SEARCH";
export const setSearch = (payload: string) => ({
  type: SET_SEARCH,
  payload
});

dispatch(setSearch("react"));`}</code></pre>
                            <p className={styles.reduxLayout__exampleTitle}>Redux Toolkit</p>
                            <pre className={styles.reduxLayout__code}><code>{`// action tạo tự động từ reducers trong slice
const hookSlice = createSlice({
  name: "hook",
  initialState: { search: "" },
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    }
  }
});

dispatch(setSearch("react"));`}</code></pre>
                        </div>
                    </li>
                    <li className={styles.reduxLayout__item}>Loại bỏ switch-case : map ping trực Dispatch(action) và funtion của redercer</li>
                    <li className={styles.reduxLayout__item}>Giải quyết Immutable bằng Immer</li>
                    <li className={styles.reduxLayout__item}>
                        Setup store tự động{" "}
                        <span className={styles.reduxLayout__explain}>
                            (Giải thích: redux thì phải thêm Middleware + devtool thủ công, redux-toolkit thì sử dụng configureStore là auto)
                        </span>
                    </li>
                </ul>
            </article>
        </section>
    )
}
