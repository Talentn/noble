import { db } from "@/lib/db";
import { Attachment, Chapter, Course, UserProgress } from "@prisma/client";

interface GetChapterProps {
    userId: string;
    chapterId: string;
    courseId: string;
};

export const getChapter = async ({
    userId,
    chapterId,
    courseId,
}: GetChapterProps) => { 
    try {
        const purchase = await db.purchase.findUnique ({
            where: {
                userId_courseId: {
                    userId,
                    courseId,
                },
    }});

    const chapter = await db.chapter.findUnique ({
        where: {
            id: chapterId,
            isPublished: true,
        },
        include: {
            course: true,

        },
    });

    const course = await db.course.findUnique ({
        where: {
            isPublished : true,
            id: courseId,
        },
        select : {
            price: true,
        }
    });

    
    if (!chapter || !course) {
        throw new Error ("Chapitre n'est pas disponible");
    }

    let muxData = null;
    let attachements: Attachment[] = [];
    let nextChapter: Chapter | null = null;

    if(purchase) {
        attachements = await db.attachment.findMany ({
            where: {
                courseId: courseId,}
            });
        }

        if (chapter.isFreen || purchase) {
            muxData = await db.muxData.findUnique ({
                where: {
             chapterId: chapterId,
                }
            }
        
   );
   nextChapter = await db.chapter.findFirst ({
    where: {
        courseId: courseId,
        isPublished: true,
        position:{
            gt: chapter?.position,
        }
    },
    orderBy: {
        position: "asc",
    },
})

        }
        const userProgress = await db.userProgress.findUnique ({
            where: {
                userId_chapterId: {
                    userId,
                    chapterId,
                }
            }
        });
        return {
            chapter,
            course,
            muxData,
            attachements,
            nextChapter,
            userProgress,
            purchase,
        };
    } catch (error) {
        console.log ("[GET_CHAPTER]", error);
        return {
            chapter: null,
            course: null,
            muxData: null,
            attachements: null,
            nextChapter: null,
            userProgress: null,
            purchase: null,
        }
}
}