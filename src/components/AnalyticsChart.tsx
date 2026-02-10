"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { time: "00:00", generation: 0, load: 30 },
    { time: "04:00", generation: 0, load: 25 },
    { time: "06:00", generation: 10, load: 45 },
    { time: "08:00", generation: 55, load: 60 },
    { time: "10:00", generation: 85, load: 70 },
    { time: "12:00", generation: 98, load: 75 },
    { time: "14:00", generation: 92, load: 80 },
    { time: "16:00", generation: 75, load: 85 },
    { time: "18:00", generation: 45, load: 90 },
    { time: "20:00", generation: 10, load: 80 },
    { time: "22:00", generation: 0, load: 60 },
    { time: "24:00", generation: 0, load: 40 },
];

export default function AnalyticsChart() {
    return (
        <div className="glass-panel p-6 rounded-xl h-[400px] flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-white">Generation vs. Load</h3>
                    <p className="text-sm text-gray-400">Real-time power distribution (kW)</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-solar-primary" />
                        <span className="text-gray-300">Generation</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-solar-secondary" />
                        <span className="text-gray-300">Load</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 w-full min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorGeneration" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#D946EF" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#D946EF" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1F1B2E" vertical={false} />
                        <XAxis
                            dataKey="time"
                            stroke="#666"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#666"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(13, 13, 18, 0.9)",
                                borderColor: "#1F1B2E",
                                borderRadius: "8px",
                                color: "#fff",
                            }}
                            itemStyle={{ color: "#fff" }}
                        />
                        <Area
                            type="monotone"
                            dataKey="generation"
                            stroke="#8B5CF6"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorGeneration)"
                        />
                        <Area
                            type="monotone"
                            dataKey="load"
                            stroke="#D946EF"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorLoad)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
