import Stripe from "stripe";
import { headers } from "next/headers"

import { stripe } from "@/lib/stripe";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.text();
    const signature = req.headers.get("Stripe-Signature") as string;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!);
    } catch (error : any) {
        return new NextResponse(`webhook error`, { status: 400 });
    }

    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session?.metadata?.userId;
    const courseId = session?.metadata?.courseId;
    if (event.type === "checkout.session.completed") {
        if (!userId || !courseId) {
            return new NextResponse("Invalid metadata", { status: 400 });
        }

        await db.purchase.create({
            data: {
                userId,
                courseId,
            },
        });
    } else {
        return new NextResponse("Invalid event type", { status: 200 });
    }

    return new NextResponse(null, { status: 200 });

}