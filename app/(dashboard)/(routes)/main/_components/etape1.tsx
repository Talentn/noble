import Image from "next/image";
import {motion} from "framer-motion";

import {fadeIn} from "./variants";

export const Etape1 = () => {
    return (
        <Image 
        height={100}
        width={100}
        alt="etape1"
        src="/etape1.png"
        />
    )
}