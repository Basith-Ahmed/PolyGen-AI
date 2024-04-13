import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription()

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-[280px] md:flex-col md:fixed md:inset-y-0 bg-gray-900">
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro}/>
      </div>
      <main className="md:pl-[280px] h-full">
        <div className="md:bg-[#f0f4f9] md:h-full md:p-4">
          <div className="md:rounded-lg md:bg-white md:h-full md:shadow-md">
            <Navbar />
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
