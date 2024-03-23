// components/CourseEnrollButton.tsx
"use client"
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { formatPrice } from "@/lib/format";

interface CourseEnrollButtonProps {
  price: number;
  courseId: string;
}

export const CourseEnrollButton = ({ price, courseId }: CourseEnrollButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post("app\api\courses\[courseId]\checkout", {
        receiverWalletId: "65fc863787ed39c524380ac6", // Replace with your receiver wallet ID
        token: "TND",
        amount: price,
        type: "immediate",
        description: "Enrollment for Course",
        acceptedPaymentMethods: ["wallet", "bank_card", "e-DINAR"],
        lifespan: 10,
        checkoutForm: true,
        addPaymentFeesToAmount: true,
        firstName: "John",
        lastName: "Doe",
        phoneNumber: "22777777",
        email: "john.doe@gmail.com",
        orderId: courseId,
        webhook: "/api/webhook", // Replace with your webhook endpoint
        silentWebhook: true,
        successUrl: "https://your-website.com/payment-success",
        failUrl: "https://your-website.com/payment-failure",
        theme: "light",
      });

      window.location.assign(response.data.payUrl);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="px-4 py-2 bg-blue-500 text-white rounded-md"
    >
      {isLoading ? 'Enrolling...' : `Enroll for ${formatPrice(price)}`}
    </button>
  );
};
