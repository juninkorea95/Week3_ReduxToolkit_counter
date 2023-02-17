import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    number: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        plusOne: (state, action) => {
            state.number = state.number + action.payload
        },
        minusOne: (state, action) => {
            state.number = state.number - action.payload
        }
    },
})

export default counterSlice.reducer
console.log(counterSlice)
export const {plusOne,minusOne} = counterSlice.actions