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

export const CourseEnrollButton = ({
    price,
    courseId,
}: CourseEnrollButtonProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const onClick = async () => {
        try {
            setIsLoading(true);
            // Make a POST request to your backend API route to initiate payment
            const response = await axios.post(`/api/courses/${courseId}/checkout`);

            // Redirect the user to ClicToPay’s payment page
            window.location.assign(response.data.url);

        } catch (error) {
            console.error("Error:", error);
            toast.error("Une erreur s'est produite");
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
            S'inscrire pour {formatPrice(price)}
        </Button>
    );
};
