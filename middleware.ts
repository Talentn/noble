import { authMiddleware } from "@clerk/nextjs";

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

export default authMiddleware({
  publicRoutes: ["/api/uploadthing"], // Keep this for the public API route
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/"], // Exclude /teacher/create from authentication
});
