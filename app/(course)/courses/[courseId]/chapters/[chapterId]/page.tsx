import { getChapter } from "@/actions/get-chapter";
import { Banner } from "@/components/banner";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { VideoPlayer } from "./_components/video-player";
import { CourseEnrollButton } from "./_components/course-enroll-button";
import { Separator } from "@/components/ui/separator";
import { Preview } from "@/components/preview";
import { File } from "lucide-react";
import { CourseProgressButton } from "./_components/course-progress-button";

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
                    label="Vous avez déjà completé ce chapitre."
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
                <div>
                <div className="p-4 flex flex-col md:flex-row items-center justify-between">
                    <h2 className="text-2xl font-semibold mb-2">
                        {chapter.title}
                    </h2>
                    {purchase ? (
                        <CourseProgressButton
                        chapterId={params.chapterId}
                        courseId={params.courseId}
                        nextChapterId={nextChapter?.id}
                        isCompleted={!!userProgress?.isCompleted}
                      />
                    ) : (
                        <CourseEnrollButton 
                        courseId={params.courseId}
                        price={course.price!}
                        />
                    )}
                </div>
                <Separator />
                <div>
                    <Preview value={chapter.description!} />
                </div>
                {!!attachements.length && (
                    <>
                    <Separator />
                    <div className="p-4">
                        {attachements.map((attachement) => (
                            <a
                            href ={attachement.url} 
                            target="_blank"
                            key={attachement.id} 
                            className="flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline"
                            >
                                <File/>
                                <p className="line-clamp-1">
                                    {attachement.name}
                                </p>
                            </a>
                        ))}
                    </div>
                    </>
                )}
            </div>
        </div>
        </div>
    )
}

export  default ChapterIdPage;