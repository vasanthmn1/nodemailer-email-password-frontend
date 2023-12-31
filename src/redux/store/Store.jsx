import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from '../features/AuthSlice'

export const store = configureStore({
    reducer: {
        auth: AuthSlice,
    },
})