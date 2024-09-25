import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";

export async function POST(req: Request, { params }: { params: { courseId: string } }) {
    const { courseId } = params;
    try {
        // Retrieve the user (if necessary)
        const user = await currentUser();
        if (!user || !user.id || !user.emailAddresses?.[0]?.emailAddress) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        // Retrieve the course information from the database
        const course = await db.course.findUnique({
            where: { id: courseId, isPublished: true },
        });

        if (!course) {
            return new NextResponse("Course not found", { status: 404 });
        }

        // Replace with the ClicToPay test URL
        const response = await fetch('https://test.clictopay.com/payment/rest/register.do', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userName: process.env.CLICTOPAY_USER,  // Merchant username
                password: process.env.CLICTOPAY_PASSWORD,  // Merchant password
                orderNumber: courseId,
                amount: Math.round(course.price! * 100),  // Amount in cents
                currency: '788',  // TND (Tunisian Dinar)
                returnUrl: `${process.env.NEXT_PUBLIC_APP_URL}/courses/${courseId}?success=1`,
                failUrl: `${process.env.NEXT_PUBLIC_APP_URL}/courses/${courseId}?canceled=1`,
            }),
            
        });
        console.log('CLICTOPAY_USER:', process.env.CLICTOPAY_USER);
        console.log('CLICTOPAY_PASSWORD:', process.env.CLICTOPAY_PASSWORD);        
        const data = await response.json();

        if (!data.formUrl) {
            console.error('ClicToPay Error:', data);
            return new NextResponse("Failed to create payment session", { status: 500 });
        }

        // Return the ClicToPay form URL to the client
        return NextResponse.json({ url: data.formUrl });

    } catch (error) {
        console.error('Error creating payment session:', error);
        return new NextResponse("Internal server error", { status: 500 });
    }
}
