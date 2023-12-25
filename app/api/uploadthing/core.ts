import { auth } from "@clerk/nextjs";
import { error } from "console";
import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
 
const handleAuth = () => { 
    const  {userId } = auth();
    if (!userId) throw new Error("Non autorisé");
    return {
        userId
    };
 }; 
 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
 courseImage : f({ image: {maxFileSize: "4MB", maxFileCount: 1} })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
 courseAttachement: f(["text", "image", "video", "audio","pdf"])
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
 chapterVideo: f({ video:{ maxFileCount:1, maxFileSize: "512GB"}})
 .middleware(() => handleAuth())
 .onUploadComplete(() =>{})
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;