import { authMiddleware } from "@clerk/nextjs";

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

export default authMiddleware({
  publicRoutes: ["/api/uploadthing" , "/" , "https://api.preprod.konnect.network/api/v2/payments/init-payment"], // Keep this for the public API route
});
