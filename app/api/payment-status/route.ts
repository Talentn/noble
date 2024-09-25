import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
    const { orderId, courseId, userId } = await req.json();

    // Call ClicToPay to check the payment status
    const response = await fetch('https://test.clictopay.com/payment/rest/getOrderStatus.do', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userName: process.env.CLICTOPAY_USER,
            password: process.env.CLICTOPAY_PASSWORD,
            orderId,
        }),
    });

    console.log('ClicToPay API Response Status:', response.status, response.statusText);
if (!response.ok) {
    const errorDetails = await response.text();
    console.error('Error Response Body:', errorDetails);
}

    const statusData = await response.json();

    // If the payment was successful
    if (statusData.orderStatus === '2') {
        // Save the purchase in the database
        await db.purchase.create({
            data: {
                userId,
                courseId,
            },
        });

        return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, message: 'Payment failed or not completed.' });
}
