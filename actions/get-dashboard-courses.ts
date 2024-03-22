import { Category, Chapter, Course, Purchase } from "@prisma/client";
import { db } from "@/lib/db";
import { getProgress } from "@/actions/get-progress";

type CourseWithProgressWithCategory = Course & {
  category: Category;
  chapters: Chapter[];
  progress: number | null;
};

type DashboardCourses = {
  completedCourses: CourseWithProgressWithCategory[];
  coursesInProgress: CourseWithProgressWithCategory[];
};

export const getDashboardCourses = async (userId: string): Promise<DashboardCourses> => {
  try {
    const purchasedCourses = await db.purchase.findMany({
      where: {
        userId: userId,
      },
      select: {
        course: {
          include: {
            category: true,
            chapters: {
              where: {
                isPublished: true,
              }
            }
          }
        }
      }
    });

    const courses = purchasedCourses.map((purchase) => purchase.course) as CourseWithProgressWithCategory[];

    for (let course of courses) {
      const progress = await getProgress(userId, course.id);
      course["progress"] = progress;
    }

    const completedCourses = courses.filter((course) => course.progress === 100);
    const coursesInProgress = courses.filter((course) => (course.progress ?? 0) < 100);

    return {
      completedCourses,
      coursesInProgress,
    }
  } catch (error) {
    console.log("[GET_DASHBOARD_COURSES]", error);
    return {
      completedCourses: [],
      coursesInProgress: [],
    }
  }
}

export const enrollInFreeCourse = async (userId: string, courseId: string): Promise<CourseWithProgressWithCategory | null> => {
  try {
    // Check if the course is free
    const course = await db.course.findUnique({
      where: {
        id: courseId,
      },
      include: {
        category: true,
        chapters: {
          where: {
            isPublished: true,
          }
        }
      }
    });

    if (!course || course.price !== 0) {
      return null; // Course is not free or doesn't exist
    }

    // Create a purchase record with a price of 0 for the free course
    await db.purchase.create({
      data: {
        userId,
        courseId,
        price: 0,
      }
    });

    // Calculate the progress for the newly enrolled course
    const progress = await getProgress(userId, courseId);

    return {
      ...course,
      progress,
    };
  } catch (error) {
    console.log("[ENROLL_IN_FREE_COURSE]", error);
    return null;
  }
}