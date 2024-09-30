import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import axios from "axios";

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

        // Create query parameters
        const queryParams = new URLSearchParams({
            userName: clictopayUser,
            password: clictopayPassword,
            orderId: orderId,
            language: "en",
        }).toString();

        // Make GET request using Axios
        const response = await axios.get(`https://test.clictopay.com/payment/rest/getOrderStatus.do?${queryParams}`);

        // Log response status and data for debugging purposes
        console.log('ClicToPay API Response Status:', response.status, response.statusText);
        console.log("Payment Status Data:", response.data);

        // Check if the payment was successful
        if (response.data.OrderStatus === 2) {
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
