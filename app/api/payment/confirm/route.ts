import { NextRequest, NextResponse } from "next/server";
import axios from 'axios';
import https from 'https';
import fs from 'fs';
import path from "path";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
    try {
        const { orderId, courseId, userId } = await req.json();

        // Validate input
        if (!orderId || !courseId || !userId) {
            return NextResponse.json({ success: false, message: "Missing required parameters." }, { status: 400 });
        }

        // Load the ClickToPay CA bundle
        const clicToPayCaBundlePath = path.join(process.cwd(), 'certs', 'STAR_nobel_tn.ca-bundle'); // Adjust if necessary
        const clicToPayCaBundle = fs.readFileSync(clicToPayCaBundlePath);

        // Create an HTTPS agent with the ClickToPay CA bundle
        const clicToPayAgent = new https.Agent({
            ca: clicToPayCaBundle,
        });

        // Prepare query parameters for ClickToPay
        const queryParams = new URLSearchParams({
            userName: process.env.CLICTOPAY_USER!,
            password: process.env.CLICTOPAY_PASSWORD!,
            orderId: orderId,
            language: "en",
        }).toString();

        // Make GET request to ClickToPay using Axios with the custom agent
        const response = await axios.get(`https://test.clictopay.com/payment/rest/getOrderStatus.do?${queryParams}`, {
            httpsAgent: clicToPayAgent, // Use the ClickToPay agent
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
