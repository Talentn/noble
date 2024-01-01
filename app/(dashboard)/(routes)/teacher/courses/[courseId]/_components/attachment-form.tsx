"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { File, ImageIcon, Loader2, Pencil, PlusCircle, X } from "lucide-react";
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
  const [deletingId, setDeletingId] = useState<string | null>(null);

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
      await axios.post(`/api/courses/${courseId}/attachments`, values);
      toast.success("Fichier mis à jour");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Erreur");
    }
  };

  const onDelete = async (id: string ) => {
  try {
    setDeletingId(id);
    await axios.delete(`/api/courses/${courseId}/attachments/${id}`);
    toast.success("Fichier a été supprimé");
    router.refresh();
    }
 catch{
  toast.error("erreur")
 }
 finally {
  setDeletingId(null);
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
        {initialData.attachments.length > 0 && (
          <div className="space-y-2">
            {initialData.attachments.map((attachment) => (
              <div
                key={attachment.id}
                className="flex items-center p-3 w-full bg-sky-100 border-sky-200 border text-sky-700 rounded-md"
              >
                <File  className="h-4 w-4 mr-2 flex-shrink-0"/>
                <p className="text-xs line-clamp-1">
                  {attachment.name}
                </p>
                {deletingId === attachment.id && (
                  <div>
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                )}
                      {deletingId !== attachment.id && (
                  <button
                  onClick={() => onDelete(attachment.id)}
                  className="ml-auto hover:opacity-75 transition"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
        </>
        
      )}
      {isEditing && (
        <div>
            <FileUpload 
            endpoint="courseAttachement"
            onChange={(url) => {
                if (url) {
                    onSubmit({ url: url });
                }
            }}
            />
            <div className="text-xs test-muted-foreground mt-4">
                Ajouter des piéces jointes
            </div>
    </div>
      )}
      </div>
  )
}