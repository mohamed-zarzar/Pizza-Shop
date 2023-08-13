import {createSlice, PayloadAction } from '@reduxjs/toolkit'
import { orderDetails,orderType } from '../../type'





type InitialState = {
    orderList: orderType[],
    isOpen:boolean,
}

const initialState: InitialState = {
    orderList: [],
    isOpen : false,
}


const orderSlice = createSlice({
    name: 'orderSlice',
    initialState,
    reducers: {
        addNewOrder: (state, action: PayloadAction<orderType>) => {  
            state.orderList.push({...action.payload});
        },
        changeOpen : (state) => {
            state.isOpen = !state.isOpen;
        }
    },
}
)

export default orderSlice.reducer;
export const { addNewOrder,changeOpen} = orderSlice.actions;