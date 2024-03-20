import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const LandLayout = ({
    children 
}: {
    children: React.ReactNode
}) => {
    const { userId } = auth();

    if (userId) {
        redirect("/browse");
        return null; 
    }

    return ( 
        <div>{children}</div>
    );
}

export default LandLayout;
