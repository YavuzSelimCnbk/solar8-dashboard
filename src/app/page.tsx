import Link from "next/link";
import { Zap, DollarSign, PanelsTopLeft, Leaf } from "lucide-react";
import StatsCard from "@/components/StatsCard";
import AnalyticsChart from "@/components/AnalyticsChart";
import LiveFeed from "@/components/LiveFeed";
import WeatherWidget from "@/components/WeatherWidget";

export default function Home() {
  return (
    <main className="flex-1 overflow-auto p-8 custom-scrollbar">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Executive Dashboard</h1>
            <p className="text-gray-400 mt-1">Real-time overview of your solar assets.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-solar-primary/10 px-3 py-1 text-sm font-medium text-solar-primary ring-1 ring-inset ring-solar-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-solar-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-solar-primary"></span>
              </span>
              System Online
            </span>
            <div className="text-xs text-gray-500 font-mono">
              Last updated: Just now
            </div>
          </div>
        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Peak Power"
            value="1.2 GW"
            trend="+12.5%"
            trendUp={true}
            icon={Zap}
          />
          <StatsCard
            title="Annual Savings"
            value="$4.2M"
            trend="+8.2%"
            trendUp={true}
            icon={DollarSign}
          />
          <StatsCard
            title="Active Panels"
            value="12,450"
            trend="-2"
            trendUp={false}
            icon={PanelsTopLeft}
          />
          <StatsCard
            title="CO2 Reduction"
            value="850 Tons"
            trend="+24%"
            trendUp={true}
            icon={Leaf}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart - Spans 2 columns */}
          <div className="lg:col-span-2">
            <AnalyticsChart />
          </div>

          {/* Side Widgets */}
          <div className="space-y-6">
            <WeatherWidget />
            <LiveFeed />
          </div>
        </div>

        {/* Quick Actions / Footer */}
        <div className="border-t border-solar-border pt-6 mt-8 flex justify-between items-center text-sm text-gray-500">
          <p>© 2026 Solar8 Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
