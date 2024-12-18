export const isTeacher = (userId?: string | null) => {
    return userId === process.env.TEACHER_ID;
}