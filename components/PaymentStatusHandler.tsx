"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface PaymentStatusHandlerProps {
    paymentStatus: string;
    courseId: string;
    chapters: Array<{ id: string }>;
}

const PaymentStatusHandler = ({ paymentStatus, courseId, chapters }: PaymentStatusHandlerProps) => {
    const router = useRouter();

    useEffect(() => {
        if (paymentStatus === "success") {
            toast.success("Le paiement a été réussi avec succès !");
        } else 
            toast.error("Le paiement a échoué. Veuillez réessayer.");
        

        // Redirect to the first chapter of the course
        if (chapters.length > 0) {
            router.push(`/courses/${courseId}/chapters/${chapters[0].id}`);
        }
    }, [paymentStatus, courseId, chapters, router]);

    return null; // No UI needed here, just handling notifications and redirects
};

export default PaymentStatusHandler;
