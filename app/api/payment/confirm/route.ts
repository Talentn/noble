import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import https from "https";
import fs from "fs";
import { db } from "@/lib/db";
import path from "path";

export async function POST(req: NextRequest) {
    try {
        const { orderId, courseId, userId } = await req.json();

        // Validate input
        if (!orderId || !courseId || !userId) {
            return NextResponse.json({ success: false, message: "Missing required parameters." }, { status: 400 });
        }

        // Validate environment variables
        const username = process.env.CLICTOPAY_USER;
        const password = process.env.CLICTOPAY_PASSWORD;
        if (!username || !password) {
            console.error("ClicToPay credentials are missing in environment variables.");
            return NextResponse.json({ success: false, message: "Server misconfiguration: Missing payment credentials." }, { status: 500 });
        }

        const caBundlePath = path.join(process.cwd(), "certs", "STAR_nobel_tn.crt");
        const caBundle = fs.readFileSync(caBundlePath);
        
        const agent = new https.Agent({
            ca: caBundle, // Load your CA bundle
            rejectUnauthorized: true, // Ensure certificates are validated
        });

        // Prepare query parameters
        const queryParams = new URLSearchParams({
            userName: username,
            password: password,
            orderId: orderId,
            language: "en",
        }).toString();

        // Make GET request using Axios with the custom agent
        let response;
        try {
            response = await axios.get(`https://ipay.clictopay.com/payment/rest/getOrderStatus.do?${queryParams}`, {
                httpsAgent: agent,
            });
            console.log("ClicToPay API Response Status:", response.status, response.statusText);
            console.log("Payment Status Data:", response.data);
        } catch (axiosError) {
            console.error("Error during Axios request:", axiosError.message, axiosError.response?.data || axiosError);
            return NextResponse.json({ success: false, message: "Error contacting payment provider." }, { status: 502 });
        }

        // Validate response structure
        if (!response.data || typeof response.data.OrderStatus === "undefined") {
            console.error("Invalid response from payment provider:", response.data);
            return NextResponse.json({ success: false, message: "Invalid payment provider response." }, { status: 502 });
        }

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
                console.error("Database Error during purchase creation:", {
                    userId,
                    courseId,
                    error: dbError,
                });
                return NextResponse.json({ success: false, message: "Database error while saving purchase." }, { status: 500 });
            }
        }

        return NextResponse.json({ success: false, message: "Payment failed or not completed." });
    } catch (error) {
        console.error("Unexpected error occurred:", error.message, error.stack);
        return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
    }
}
