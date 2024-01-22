"use client";

import { ConfirmModal } from "@/components/modals/confirm-modal";
import { Button } from "@/components/ui/button";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import axios from "axios";
import { on } from "events";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface ActionsProps {
    disabled: boolean;
    courseId: string;
    isPublished: boolean;
};

export const Actions = ({
    disabled,
    courseId,
    isPublished,
}: ActionsProps) => {
    const router = useRouter();
    const confetti = useConfettiStore();
    const [isLoading, setIsloading] = useState(false);
    const onClick = async () => {
        try {
            setIsloading(true);
            if(isPublished) {
            await axios.patch(`/api/courses/${courseId}/unpublish`);
            toast.success("Cours unpublié");
            router.refresh();
            } else 
            {
                await axios.patch(`/api/courses/${courseId}/publish`);
                toast.success("Cours publié");
                confetti.onOpen();
                router.refresh();
            }
        }
        catch {
            toast.error("Une erreur est survenue");
        }
        finally {
            setIsloading(false);
        }
    }
    const onDelete = async () => {
    try {
        setIsloading(true);
        await axios.delete(`/api/courses/${courseId}`);
        toast.success("Cours supprimé");
        router.refresh();
        router.push(`/teacher/courses`);
    
    } catch  {
        toast.error("Une erreur est survenue");
    } finally {
        setIsloading(false);
}
    }

    return (
        <div className="flex items-center gap-x-2">
            <Button
                onClick={onClick}
                disabled={disabled || isLoading}
                variant="outline"
                size="sm"
            >
                {isPublished ? "Unpublié" : "Publié"}
            </Button>
            <ConfirmModal onConfirm={onDelete}>
            <Button size={"sm"} disabled={isLoading}>
                <Trash className="h-4 w-4" />
            </Button>
            </ConfirmModal>

        </div>
    )
};