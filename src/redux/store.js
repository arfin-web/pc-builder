import { configureStore } from '@reduxjs/toolkit'
import pcBuilderReducer from '../redux/features/pcBuilderSlice'

export const store = configureStore({
    reducer: {
        pcBuilder: pcBuilderReducer,
    },
})