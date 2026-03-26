import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux'
import type { rootState, AppDispatch, AppStore } from "./app/store"

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector

export const useAppStore = () => useStore<AppStore>()