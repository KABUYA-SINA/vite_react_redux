import { createSlice } from "@reduxjs/toolkit"

export const counterReducer = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value++
        },
        decrement: (state) => {
            state.value--
        }
    }
})
export const { increment, decrement } = counterReducer.actions

export default counterReducer.reducer