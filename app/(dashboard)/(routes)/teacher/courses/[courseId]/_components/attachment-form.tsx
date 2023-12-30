"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ImageIcon, Pencil, PlusCircle } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Attachment, Course } from "@prisma/client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FileUpload } from "@/components/file-upload";

interface AttachmentFormProps {
  initialData: Course & { attachments: Attachment[]};
  courseId: string;
};

const formSchema = z.object({
  url: z.string().min(1),
});

export const AttachmentForm = ({
  initialData,
  courseId
}: AttachmentFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: initialData?.description || ""
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}`, values);
      toast.success("Image mis à jour");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Error");
    }
  }

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
      pièces jointes
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && (
            <>Cancel</>
          )}
          {!isEditing && (
            <>
            <PlusCircle className="h-4 w-4 mr-2"/>
            Ajouter une fichier
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <>
        {initialData.attachments.length === 0 && (
          <p className="text-sm mt-2 text-slate-500 italic">
            pas de pièces jointes
          </p>
        )}
        
        </>
        
      )}
      {isEditing && (
        <div>
            <FileUpload 
            endpoint="courseImage"
            onChange={(url) => {
                if (url) {
                    onSubmit({ url: url });
                }
            }}
            />
            <div className="text-xs test-muted-foreground mt-4">
                16:9 aspect ratio recommendée
            </div>
    </div>
      )}
      </div>
  )
}