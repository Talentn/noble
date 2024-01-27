import { getChapter } from "@/actions/get-chapter";
import { Banner } from "@/components/banner";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { VideoPlayer } from "./_components/video-player";

const ChapterIdPage = async ({
    params
}: {
    params :{ courseId: string; chapterId: string}
}) => {
    const {userId} = auth();
    if (!userId) {
        return redirect("/");
    }
    const {
        chapter,
        course,
        purchase,
        muxData,
        attachements,
        userProgress,
        nextChapter,
    } = await getChapter({
        userId,
        chapterId: params.chapterId,
        courseId: params.courseId,
    });

    if (!chapter || !course) {
        return redirect("/");
    }
    const isLocked = !purchase && !chapter.isFreen;
    const completeOnEnd = !!purchase && !userProgress?.isCompleted;

    return (
        <div>
            {userProgress?.isCompleted && (
                <Banner
                variant="success"
                    label="Vous avez déjà suivi ce chapitre."
                />
            )}
               {isLocked && (
                <Banner
                variant="warning"
                    label="Vous devez acheter ce cours pour regarder ce chapitre."
                />
            )}
            <div className="flex flex-col max-w-4xl mx-auto pb-20">
                <div className="p-4">
                    <VideoPlayer 
                        chapterId={params.chapterId}
                        title={chapter.title}
                        courseId={params.courseId}
                        nextChapterId={nextChapter?.id}
                        playbackId={muxData?.playbackId!}
                        isLocked={isLocked}
                        completeOnEnd={completeOnEnd}
                    />
                </div>

            </div>
        </div>
    )
}

export  default ChapterIdPage;