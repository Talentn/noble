"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import { db } from "@/lib/db";

interface CourseEnrollButtonProps {
  price: number;
  courseId: string;
  userId: string;
}

export const CourseEnrollButton = ({
  price,
  courseId,
  userId,
}: CourseEnrollButtonProps) => {
  const handleFreeEnrollment = async () => {
    try {
      // Create a new purchase record with a price of 0 for the free course
      await db.purchase.create({
        data: {
          userId,
          courseId,
          price: 0,
        },
      });

      // Optionally, you can update the UI or fetch updated data here
      console.log("Course enrolled successfully!");
    } catch (error) {
      console.error("Failed to enroll in the free course:", error);
    }
  };

  return (
    <Button
      size="sm"
      className="w-full md:w-auto"
      onClick={price === 0 ? handleFreeEnrollment : undefined}
    >
      {price === 0 ? "Inscription gratuite" : `S'inscrire pour ${formatPrice(price)}`}
    </Button>
  );
};