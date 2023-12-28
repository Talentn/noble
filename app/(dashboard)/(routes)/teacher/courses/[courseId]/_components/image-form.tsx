"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ImageIcon, Pencil, PlusCircle } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Course } from "@prisma/client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FileUpload } from "@/components/file-upload";

interface ImageFormProps {
  initialData: Course;
  courseId: string;
};

const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Image est requis",
  }),
});

export const ImageForm = ({
  initialData,
  courseId
}: ImageFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imageUrl: initialData?.description || ""
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
        Image du cours
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && (
            <>Cancel</>
          )}
          {!isEditing && !initialData.imageUrl && (
            <>
            <PlusCircle className="h-4 w-4 mr-2"/>
            Ajouter une image
            </>
          )}
           {!isEditing && initialData.imageUrl &&(
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Editer Image
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        !initialData.imageUrl ? (
            <div className="flex items-center justify-center h-60 bg-slate-200 rouneded-md">
                <ImageIcon className="h-10 w-10 text-slate-500" />
                </div>
        ) : (
            <div className="relative aspect-video mt-2">
                <Image
                alt = "upload"
                fill
                className="object-cover rounded-md"
                src={initialData.imageUrl}
                />
            </div>
        )
      )}
      {isEditing && (
        <div>
            <FileUpload 
            endpoint="courseImage"
            onChange={(url) => {
                if (url) {
                    onSubmit({ imageUrl: url });
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