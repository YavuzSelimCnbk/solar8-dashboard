import { Calendar, Download, Filter } from "lucide-react";
import ComparisonChart from "@/components/ComparisonChart";
import StatsCard from "@/components/StatsCard";

export default function AnalyticsPage() {
    return (
        <main className="flex-1 overflow-auto p-8 custom-scrollbar">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight">Analytics</h1>
                        <p className="text-gray-400 mt-1">Deep dive into historical performance and efficiency.</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        {/* Date Picker Mock */}
                        <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-solar-border rounded-lg text-sm text-gray-300">
                            <Calendar size={16} />
                            <span>Jan 2026 - Dec 2026</span>
                        </div>

                        <button className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-solar-border rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
                            <Filter size={16} />
                            <span>Filters</span>
                        </button>
                        <button className="flex items-center gap-2 px-3 py-2 bg-solar-primary text-white rounded-lg text-sm font-medium hover:bg-solar-primary/90 transition-colors shadow-lg shadow-solar-primary/20">
                            <Download size={16} />
                            <span>Export Report</span>
                        </button>
                    </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatsCard title="Total Year Generation" value="4.2 GWh" trend="+12%" trendUp={true} />
                    <StatsCard title="Average Efficiency" value="96.8%" trend="+0.5%" trendUp={true} />
                    <StatsCard title="Revenue Generated" value="$840K" trend="+15%" trendUp={true} />
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 gap-6">
                    <ComparisonChart />
                </div>
            </div>
        </main>
    );
}
