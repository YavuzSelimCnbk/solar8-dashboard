import MaintenanceList from "@/components/MaintenanceList";
import StatsCard from "@/components/StatsCard";
import { Wrench, AlertTriangle, ShieldCheck } from "lucide-react";

export default function MaintenancePage() {
    return (
        <main className="flex-1 overflow-auto p-8 custom-scrollbar">
            <div className="max-w-7xl mx-auto space-y-8">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">AI Maintenance</h1>
                    <p className="text-gray-400 mt-1">Predictive analysis and system health monitoring.</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatsCard title="System Health Score" value="94/100" trend="+2%" trendUp={true} icon={ShieldCheck} />
                    <StatsCard title="Active Alerts" value="3" trend="-1" trendUp={true} icon={AlertTriangle} />
                    <StatsCard title="Maintenance Scheduled" value="2 Jobs" icon={Wrench} />
                </div>

                {/* Predictions List */}
                <MaintenanceList />
            </div>
        </main>
    );
}
