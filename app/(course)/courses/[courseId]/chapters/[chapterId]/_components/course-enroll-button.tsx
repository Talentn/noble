"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface CourseEnrollButtonProps {
    price: number;
    courseId: string;
}

export const CourseEnrollButton = ({ price, courseId }: CourseEnrollButtonProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
        try {
            setIsLoading(true);
            const response = await axios.post(`/api/courses/${courseId}/checkout`);

            if (response.data?.url) {
                // Redirect the user to ClicToPay’s payment page
                window.location.assign(response.data.url);
            } else {
                throw new Error("Échec de la création de la session de paiement. Aucune URL retournée.");
            }
        } catch (error: any) {
            console.error("Erreur:", error);
            toast.error(error.response?.data || "Une erreur s'est produite. Veuillez réessayer.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Button
            onClick={onClick}
            disabled={isLoading}
            size="sm"
            className="w-full md:w-auto"
        >
            S&apos;inscrire pour {formatPrice(price)}
        </Button>
    );
};
