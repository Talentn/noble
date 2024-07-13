import { Category, Course } from "@prisma/client";
import { db } from "@/lib/db";

type CourseWithCategory = Course & {
    category: Category | null;
    chapters: { id: string }[];
};

type GetCourses = {
    title?: string;
    categoryId?: string;
};

export const getProducts = async ({
    title,
    categoryId,
}: GetCourses): Promise<CourseWithCategory[]> => {
    try {
        const courses = await db.course.findMany({
            where: {
                isPublished: true,
                title: {
                    contains: title,
                },
                categoryId: categoryId,
            },
            include: {
                category: true,
                chapters: {
                    where: {
                        isPublished: true,
                    },
                    select: {
                        id: true,
                    }
                },
            },
            orderBy: {
                createAt: "desc",
            },
        });

        return courses;
    } catch (error) {
        console.log("[GET_COURSES]", error);
        return [];
    }
}
