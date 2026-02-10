"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
    { month: "Jan", thisYear: 4000, lastYear: 2400 },
    { month: "Feb", thisYear: 3000, lastYear: 1398 },
    { month: "Mar", thisYear: 2000, thisYearPredicted: 2500, lastYear: 9800 },
    { month: "Apr", thisYear: 2780, lastYear: 3908 },
    { month: "May", thisYear: 1890, lastYear: 4800 },
    { month: "Jun", thisYear: 2390, lastYear: 3800 },
    { month: "Jul", thisYear: 3490, lastYear: 4300 },
];

export default function ComparisonChart() {
    return (
        <div className="glass-panel p-6 rounded-xl h-[400px] flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-6">Yearly Yield Comparison</h3>
            <div className="flex-1 w-full min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorThisYear" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorLastYear" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#D946EF" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#D946EF" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" stroke="#666" tickLine={false} axisLine={false} />
                        <YAxis stroke="#666" tickLine={false} axisLine={false} />
                        <CartesianGrid strokeDasharray="3 3" stroke="#1F1B2E" vertical={false} />
                        <Tooltip
                            contentStyle={{ backgroundColor: "rgba(13, 13, 18, 0.9)", borderColor: "#1F1B2E", borderRadius: "8px", color: "#fff" }}
                            itemStyle={{ color: "#fff" }}
                        />
                        <Legend />
                        <Area type="monotone" dataKey="thisYear" name="2026 Yield" stroke="#8B5CF6" fillOpacity={1} fill="url(#colorThisYear)" strokeWidth={2} />
                        <Area type="monotone" dataKey="lastYear" name="2025 Yield" stroke="#D946EF" fillOpacity={1} fill="url(#colorLastYear)" strokeWidth={2} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
