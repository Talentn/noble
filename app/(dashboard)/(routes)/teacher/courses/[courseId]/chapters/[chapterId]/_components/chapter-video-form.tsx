"use client";

import * as z from "zod";
import axios from "axios";
import MuxPlayer from "@mux/mux-player-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Pencil, PlusCircle, Video } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Chapter, muxData } from "@prisma/client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FileUpload } from "@/components/file-upload";

interface ChapterVideoFromProps {
  initialData: Chapter & { muxData?: muxData | null };
  courseId: string;
  chapterId: string;
};

const formSchema = z.object({
  videoUrl: z.string().min(1),
});

export const ChapterVideoFrom = ({
  initialData,
  courseId,
  chapterId
}: ChapterVideoFromProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      videoUrl: initialData?.description || ""
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`, values);
      toast.success("Chapitre mis à jour");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Error");
    }
  }

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Video de hapitre
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && (
            <>Cancel</>
          )}
          {!isEditing && !initialData.videoUrl && (
            <>
            <PlusCircle className="h-4 w-4 mr-2"/>
            Ajouter un vidéo
            </>
          )}
           {!isEditing && initialData.videoUrl &&(
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Editer le video
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        !initialData.videoUrl ? (
            <div className="flex items-center justify-center h-60 bg-slate-200 rouneded-md">
                <Video className="h-10 w-10 text-slate-500" />
                </div>
        ) : (
            <div className="relative aspect-video mt-2">
              <MuxPlayer
              playbackId={initialData?.muxData?.playbackId || ""}
              />
            </div>
        )
      )}
      {isEditing && (
        <div>
            <FileUpload 
            endpoint="chapterVideo"
            onChange={(url) => {
                if (url) {
                    onSubmit({ videoUrl: url });
                }
            }}
            />
            <div className="text-xs test-muted-foreground mt-4">
                Télécharger la vidéo de ce chapitre
            </div>
    </div>
      )}
      {initialData.videoUrl && !isEditing && (
        <div className="text-xs text-muted-foreground mt-2">
          Le traitement de la vidéo peut prendre quelques minutes
        </div>
      ) }
      </div>
  )
}