import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
    try {
        const { orderId, courseId, userId } = await req.json();

        // Validate input
        if (!orderId || !courseId || !userId) {
            return NextResponse.json({ success: false, message: "Missing required parameters." }, { status: 400 });
        }

        // Prepare parameters for payment status check
        const clictopayUser = process.env.CLICTOPAY_USER;
        const clictopayPassword = process.env.CLICTOPAY_PASSWORD;

        if (!clictopayUser || !clictopayPassword) {
            console.error("Missing ClicToPay credentials in environment variables");
            return NextResponse.json({ success: false, message: "Internal server error: Missing payment credentials." }, { status: 500 });
        }

        // Call ClicToPay to check the payment status using GET request as per manual example
        const queryParams = new URLSearchParams({
            userName: clictopayUser,
            password: clictopayPassword,
            orderId: orderId,
            language: "en",
        }).toString();

        const response = await fetch(`https://test.clictopay.com/payment/rest/getOrderStatus.do?${queryParams}`, {
            method: 'GET',
        });

        // Log response status and text for debugging purposes
        console.log('ClicToPay API Response Status:', response.status, response.statusText);

        if (!response.ok) {
            const errorDetails = await response.text();
            console.error('Error Response Body:', errorDetails);
            return NextResponse.json({ success: false, message: "Error contacting payment service." }, { status: 500 });
        }

        const statusData = await response.json();
        console.log("Payment Status Data:", statusData);

        // Check if the payment was successful
// Check if the payment was successful
if (statusData.OrderStatus === 2) {
    try {
        // Save the purchase in the database
        const purchase = await db.purchase.create({
            data: {
                userId,
                courseId,
            },
        });
        
        console.log("Purchase created successfully:", purchase);
        return NextResponse.json({ success: true, message: "Payment successful." });
    } catch (dbError) {
        console.error("Database Error during purchase creation:", dbError);
        return NextResponse.json({ success: false, message: "Database error while saving purchase." }, { status: 500 });
    }
}

        return NextResponse.json({ success: false, message: "Payment failed or not completed." });
    } catch (error) {
        console.error("Unexpected error occurred:", error);
        return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
    }
}
