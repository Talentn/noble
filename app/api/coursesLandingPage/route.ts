import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const courses = await db.course.findMany({
      where: { isPublished: true },
      select: {
        id: true,
        title: true,
        imageUrl: true,
        price: true,
      },
    });

    return NextResponse.json(courses);
  } catch (error) {
    console.error("[GET_COURSES_ERROR]", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
