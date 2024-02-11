import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },

        clearCart:(state)=>{
            let len=state.items.length;
            state.items.splice(0,len); //will remove all the elements of the arrau
        },

        removeItem:(state,action)=>{
            let itemIdx=state.items.indexOf(action.payload);
            state.items.splice(itemIdx,1); //will remove one element from the index
        }
    }
});
export const {addItem,clearCart,removeItem}=cartSlice.actions;
export default cartSlice.reducer;