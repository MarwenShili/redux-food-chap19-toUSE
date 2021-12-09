import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:'cart' ,
    initialState : {items:[], totalQuantity:0, isOpenCart : false},
    reducers:{
       addItemToCart(state,action){
        const newItem= action.payload
        //chercher si le item est exist deja 
        const isExistItem = state.items.find((item)=> item.id === newItem.id)
        state.totalQuantity++;
        if(!isExistItem){
            state.items.push({
                id:newItem.id,
                name:newItem.title,
                price:newItem.price,
                quantity:1,
                totalPrice: newItem.price
            })
        }else {
            isExistItem.quantity++;
            isExistItem.totalPrice = isExistItem.totalPrice + newItem.price
        }
       },
       removeItemFromCart(state, action) {
        const id = action.payload;
        const existingItem = state.items.find(item => item.id === id);
        state.totalQuantity--;
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== id);
        } else {
          existingItem.quantity--;
        }
      },

       openCart(state){
        state.isOpenCart = !state.isOpenCart
       }


    }
})
export default cartSlice
export const cartActions= cartSlice.actions