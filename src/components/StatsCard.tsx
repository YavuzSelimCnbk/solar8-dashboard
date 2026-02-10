import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
    title: string;
    value: string;
    trend?: string;
    trendUp?: boolean;
    icon?: LucideIcon;
    className?: string;
}

export default function StatsCard({ title, value, trend, trendUp, icon: Icon, className }: StatsCardProps) {
    return (
        <div className={cn("glass-panel rounded-xl p-6 relative overflow-hidden group", className)}>
            <div className="flex items-start justify-between relative z-10">
                <div>
                    <p className="text-sm font-medium text-gray-400">{title}</p>
                    <div className="mt-2 flex items-baseline gap-2">
                        <h3 className="text-3xl font-bold text-white tracking-tight glow-text">{value}</h3>
                        {trend && (
                            <span className={cn(
                                "text-xs font-medium px-1.5 py-0.5 rounded",
                                trendUp ? "bg-solar-primary/10 text-solar-primary" : "bg-solar-secondary/10 text-solar-secondary"
                            )}>
                                {trend}
                            </span>
                        )}
                    </div>
                </div>
                {Icon && (
                    <div className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-solar-primary group-hover:bg-solar-primary/10 transition-colors">
                        <Icon size={20} />
                    </div>
                )}
            </div>

            {/* Decorative Glow */}
            <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-solar-primary/20 blur-2xl group-hover:bg-solar-primary/30 transition-all duration-500 pointer-events-none" />
        </div>
    );
}
