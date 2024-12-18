import { authMiddleware } from "@clerk/nextjs";

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

export default authMiddleware({
  publicRoutes: ["/api/uploadthing", "/api/payment/confirm", "/api/coursesLandingPage", "/main"]// Keep this for the public API route
});
