import Image from "next/image";
import {motion} from "framer-motion";

import {fadeIn} from "./variants";

export const Etape2 = () => {
    return (
        <Image 
        height={100}
        width={100}
        alt="etape2"
        src="/etape2.png"
        />
    )
}