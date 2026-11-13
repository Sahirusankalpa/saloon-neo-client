import { NextRequest, NextResponse } from "next/server";

export function GET(){
    console.log("Get request received");
    return NextResponse.json({
        massage : "Get request received in to /api"
    })
}

export async function POST(req : NextRequest){
    const body = await req.json()
    
    const massage = "Good morning "+body.designetion+" "+body.student+" Welcome to the "+body.Subject+" class"

    console.log(massage);

    return NextResponse.json(
        {
            welcomeNote : massage
        }
)
}

export function PUT(){
    console.log("Put request received");
}

export function DELETE(){
    console.log("Delete request received");
}