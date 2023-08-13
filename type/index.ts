import { StaticImageData } from "next/image";

export interface PizzCardType {
    id:number,
    title : string,
    img:StaticImageData,
    salary: number,
}

export interface orderDetails {
    name: string,
    phone : number,
    paymentWay : string,
    address  : string,
}

export interface orderType extends orderDetails {
    time : string,
    yourOrders :string,
    totalPrice : number,
    paymentStatus: string,
}
