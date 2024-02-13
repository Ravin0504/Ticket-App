import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const ticketData = body.formData;
        await Ticket.create(ticketData);
        return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
    } catch (err) {
        return NextResponse.json({ message: "Error in creating new ticket", err }, { status: 501 });
    }
}


export async function GET() {
    try {
        const tickets = await Ticket.find();
        return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
    } catch (err) {
        return NextResponse.json({ message: "Error in Showing new ticket", err }, { status: 501 });
    }

}