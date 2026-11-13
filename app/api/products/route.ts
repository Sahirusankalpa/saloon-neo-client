import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest){
    const name = req.nextUrl.searchParams.get("name")
    const age = req.nextUrl.searchParams.get("age")
    const category = req.nextUrl.searchParams.get("category")

    console.log(name)
    console.log(age)
    console.log(category)
    return NextResponse.json({
        message : "Get request received into /api/products"
    })
}