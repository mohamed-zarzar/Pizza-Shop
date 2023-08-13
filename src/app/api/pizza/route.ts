import { NextResponse } from "next/server";
import { PIZZA_CARDS } from "../../../../data";



export async function GET() {


    return NextResponse.json({data :PIZZA_CARDS})
}
