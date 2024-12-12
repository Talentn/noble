import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import PaymentStatusHandler from "@/components/PaymentStatusHandler";
import https from "https";
import fs from "fs";
import path from "path";

interface CourseIdPageProps {
    params: { courseId: string };
    searchParams: { [key: string]: string | undefined };
}

const CourseIdPage = async ({ params, searchParams }: CourseIdPageProps) => {
    const { courseId } = params;

    // Retrieve the current user
    const user = await currentUser();
    if (!user || !user.id) {
        return redirect("/login");
    }

    // Retrieve the course information from the database
    const course = await db.course.findUnique({
        where: { id: courseId },
        include: {
            chapters: {
                where: {
                    isPublished: true,
                },
                orderBy: {
                    position: "asc",
                },
            },
        },
    });

    if (!course) {
        return redirect("/");
    }

    // Check for payment status in query parameters
    const status = searchParams.success;
    const orderId = searchParams.orderId;

    let paymentStatus = "";

    const caBundlePath = path.join(process.cwd(), "certs", "STAR_nobel_tn.ca-bundle");
    const caBundle = fs.readFileSync(caBundlePath, "utf-8");

    const httpsAgent = new https.Agent({
    ca: caBundle,
});
    if (status === "1" && orderId) {
        try {
            // Confirm payment by calling your server-side payment verification API
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/payment/confirm`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    orderId,
                    courseId,
                    userId: user.id,
                }),
                httpsAgent,
            });

            const result = await response.json();
            paymentStatus = result.success ? "success" : "failed";
        } catch (error) {
            console.error("Erreur lors de la confirmation de paiement:", error);
            paymentStatus = "failed";
        }
    } else if (status === "failed") {
        paymentStatus = "failed";
    }

    return (
        <PaymentStatusHandler
            paymentStatus={paymentStatus}
            courseId={courseId}
            chapters={course.chapters}
        />
    );
};

export default CourseIdPage;
