import Image from "next/image";
import {motion} from "framer-motion";

import {fadeIn} from "./variants";

export const Logo = () => {
    return (
        <Image 
        height={430}
        width={430}
        alt="logo"
        src="/alfred.png"
        />
    )
}