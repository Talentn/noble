import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { getAnalytics } from "@/actions/get-analytics";

import { DataCard } from "./_components/data-card";
import { Chart } from "./_components/chart";
import Footer from "@/components/footer";

const AnalyticsPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const {
    data,
    totalRevenue,
    totalSales,
  } = await getAnalytics(userId);

  return ( 
    <div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <DataCard
            label="Revenu total"
            value={totalRevenue}
            shouldFormat
          />
          <DataCard
            label="Ventes totales"
            value={totalSales}
          />
        </div>
        <div>
          <Chart
          data={data}
        />
        </div>
      </div>
      <div className="fixed w-full bottom-0">
          <Footer/>
      </div>
    </div>
    
   );
}
 
export default AnalyticsPage;