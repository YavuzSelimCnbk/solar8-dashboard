import { AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const activities = [
    {
        id: 1,
        message: "Panel A12: Efficiency Drop Detected",
        type: "warning",
        time: "2 min ago",
    },
    {
        id: 2,
        message: "System Maintenance Completed",
        type: "success",
        time: "1 hour ago",
    },
    {
        id: 3,
        message: "Grid Connection Stable",
        type: "info",
        time: "3 hours ago",
    },
    {
        id: 4,
        message: "Inverter B3 Offline",
        type: "error",
        time: "5 hours ago",
    },
    {
        id: 5,
        message: "Daily Backup Successful",
        type: "success",
        time: "8 hours ago",
    },
];

const iconMap = {
    warning: AlertTriangle,
    success: CheckCircle,
    info: Info,
    error: XCircle,
};

const colorMap = {
    warning: "text-amber-500 bg-amber-500/10",
    success: "text-solar-primary bg-solar-primary/10",
    info: "text-blue-500 bg-blue-500/10",
    error: "text-red-500 bg-red-500/10",
};

export default function LiveFeed() {
    return (
        <div className="glass-panel p-6 rounded-xl h-[400px] flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-4">Live Activity</h3>
            <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                {activities.map((activity) => {
                    const Icon = iconMap[activity.type as keyof typeof iconMap];
                    return (
                        <div key={activity.id} className="flex gap-3 items-start group">
                            <div className={cn("p-2 rounded-lg shrink-0", colorMap[activity.type as keyof typeof colorMap])}>
                                <Icon size={16} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-200 group-hover:text-white transition-colors">
                                    {activity.message}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
