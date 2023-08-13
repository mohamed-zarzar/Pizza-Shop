import {createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PizzCardType } from '../../type'


// export interface PizzCardType {
//     id:number,
//     title : string,
//     img:StaticImageData,
//     salary: number,
// }
interface PizzaCardBuying extends PizzCardType {
    quantity : number,
}

type InitialState = {
    buyingPizza: PizzaCardBuying[],
}

const initialState: InitialState = {
    buyingPizza: [],
}


const myPizzaSlice = createSlice({
    name: 'myPizzaSlice',
    initialState,
    reducers: {
        buyingPizaa: (state, action: PayloadAction<PizzaCardBuying>) => {
        const findCart = state.buyingPizza.find((cart:PizzaCardBuying)=> cart.id === action.payload.id)
            if(findCart){
                findCart.quantity += action.payload.quantity;
            } else {
                state.buyingPizza.push({
                    ...action.payload
                });
            }
        },
        deletPizza:(state, action: PayloadAction<number>) => {
            const findCart = state.buyingPizza.find((cart:PizzaCardBuying)=> cart.id === action.payload);
            if(findCart){
                state.buyingPizza = state.buyingPizza.filter((cart)=>{
                    if(cart.id === findCart.id) return false;
                    else return true;
                });
            }
        },
        clearPizza:(state) => {
            return {
                buyingPizza:[]
            };
        },
    },
}
)

export default myPizzaSlice.reducer;
export const { buyingPizaa,deletPizza,clearPizza} = myPizzaSlice.actions;