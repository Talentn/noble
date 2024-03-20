import { Sidebar } from "lucide-react";
import SiteDescription from "./_components/site-description";
import Features from "./_components/features";
import About from "./_components/about";
import Pricing from "./_components/pricing";
import Footer from "@/components/footer";


const MainPage = async ({}) => {

    return(
        <>
        <SiteDescription />
        <About/>
        <Features/>
        
        <Pricing/>
        </>
    )
    
}
export default MainPage;