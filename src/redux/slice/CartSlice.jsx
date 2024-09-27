import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"Cart",
    initialState:[],
    reducers: {
        add: (state, action) => {
            state.push(action.payload); // by action.payload we can define the input parameter which we can given in add fun. in other component
        },
        remove: (state, action) => {
            // by filter method we can remove
            return state.filter((item) => item.id !== action.payload);
        },
    }
})

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;