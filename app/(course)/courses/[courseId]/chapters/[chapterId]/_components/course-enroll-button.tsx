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
}: CourseEnrollButtonProps ) => {
    const [isLaoding, setIsLoading] = useState(false);
    const onClick = async () => {
        try {
            setIsLoading(true);
            const response = await axios.post(`/api/courses/${courseId}/checkout`)
            window.location.assign(response.data.url);

        } catch {
            toast.error("Une erreur s'est produite");
        } finally {
        setIsLoading(false);
    }
}

    return (
        <Button 
        onClick={onClick}
        disabled={isLaoding}        
        size="sm" 
                className="w-full md:w-auto">
            S&apos;inscrire pour {formatPrice(price)}
        </Button>
    )
}
