import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiLimitCount = await getApiLimitCount();

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar apiLimitCount={apiLimitCount} />
      </div>
      <main className="md:pl-72 h-full">
        <div className="md:bg-[#111827] md:h-full md:p-4 md:pl-0">
          <div className="md:rounded-xl md:bg-white md:h-full">
            <Navbar />
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
