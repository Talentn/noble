import { NextRequest, NextResponse } from "next/server";
import axios from 'axios';
import https from 'https';
import fs from 'fs';
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
    try {
        const { orderId, courseId, userId } = await req.json();

        // Validate input
        if (!orderId || !courseId || !userId) {
            return NextResponse.json({ success: false, message: "Missing required parameters." }, { status: 400 });
        }

        // Load the CA bundle
        const caBundle = fs.readFileSync('.\certs\STAR_nobel_tn.ca-bundle');  // Update the path here

        // Create an HTTPS agent with the CA bundle
        const agent = new https.Agent({
            ca: caBundle,
        });

        // Prepare query parameters
        const queryParams = new URLSearchParams({
            userName: process.env.CLICTOPAY_USER!,
            password: process.env.CLICTOPAY_PASSWORD!,
            orderId: orderId,
            language: "en",
        }).toString();

        // Make GET request using Axios with the custom agent
        const response = await axios.get(`https://test.clictopay.com/payment/rest/getOrderStatus.do?${queryParams}`, {
            httpsAgent: agent,
        });

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
