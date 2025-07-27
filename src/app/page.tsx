
import { DashboardClient } from "@/app/dashboard-client";

export default function Home() {
  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <DashboardClient />
    </div>
  );
}
