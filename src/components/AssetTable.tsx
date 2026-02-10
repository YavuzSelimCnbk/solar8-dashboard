"use client";

import { useState } from "react";
import { Power, RefreshCw, Settings, Search, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

const assets = [
    { id: "SP-001", location: "Sector A - North", status: "active", output: "450 W", efficiency: "98%", lastMaintained: "2024-02-15" },
    { id: "SP-002", location: "Sector A - North", status: "active", output: "448 W", efficiency: "97%", lastMaintained: "2024-02-15" },
    { id: "SP-003", location: "Sector A - East", status: "warning", output: "320 W", efficiency: "72%", lastMaintained: "2023-11-20" },
    { id: "SP-004", location: "Sector B - West", status: "active", output: "455 W", efficiency: "99%", lastMaintained: "2024-01-10" },
    { id: "SP-005", location: "Sector B - West", status: "offline", output: "0 W", efficiency: "0%", lastMaintained: "2023-12-05" },
    { id: "SP-006", location: "Sector C - South", status: "active", output: "460 W", efficiency: "99%", lastMaintained: "2024-02-01" },
    { id: "SP-007", location: "Sector C - South", status: "active", output: "458 W", efficiency: "98%", lastMaintained: "2024-02-01" },
    { id: "SP-008", location: "Sector D - East", status: "warning", output: "310 W", efficiency: "68%", lastMaintained: "2023-10-15" },
];

const statusStyles = {
    active: "bg-solar-primary/10 text-solar-primary border-solar-primary/20",
    warning: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    offline: "bg-red-500/10 text-red-500 border-red-500/20",
};

export default function AssetTable() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredAssets = assets.filter(asset =>
        asset.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        asset.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="glass-panel rounded-xl overflow-hidden flex flex-col h-full">
            {/* Table Header / Toolbar */}
            <div className="p-6 border-b border-solar-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-xl font-bold text-white">Solar Assets</h2>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                        <input
                            type="text"
                            placeholder="Search assets..."
                            className="pl-10 pr-4 py-2 bg-white/5 border border-solar-border rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-solar-primary/50 transition-colors w-full sm:w-64"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button className="p-2 bg-white/5 border border-solar-border rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                        <Filter size={18} />
                    </button>
                </div>
            </div>

            {/* Data Table */}
            <div className="overflow-x-auto flex-1 custom-scrollbar">
                <table className="w-full text-left text-sm">
                    <thead className="bg-white/5 text-gray-400 font-medium">
                        <tr>
                            <th className="px-6 py-4">Asset ID</th>
                            <th className="px-6 py-4">Location</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Output</th>
                            <th className="px-6 py-4">Efficiency</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-solar-border">
                        {filteredAssets.map((asset) => (
                            <tr key={asset.id} className="group hover:bg-white/[0.02] transition-colors">
                                <td className="px-6 py-4 font-medium text-white">{asset.id}</td>
                                <td className="px-6 py-4 text-gray-300">{asset.location}</td>
                                <td className="px-6 py-4">
                                    <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-medium border", statusStyles[asset.status as keyof typeof statusStyles])}>
                                        {asset.status.charAt(0).toUpperCase() + asset.status.slice(1)}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-300">{asset.output}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-300 w-8">{asset.efficiency}</span>
                                        <div className="w-24 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                            <div
                                                className={cn("h-full rounded-full",
                                                    parseInt(asset.efficiency) > 90 ? "bg-solar-primary" :
                                                        parseInt(asset.efficiency) > 70 ? "bg-amber-500" : "bg-red-500"
                                                )}
                                                style={{ width: asset.efficiency }}
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-md" title="Reboot">
                                            <Power size={16} />
                                        </button>
                                        <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-md" title="Diagnostics">
                                            <RefreshCw size={16} />
                                        </button>
                                        <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-md" title="Edit">
                                            <Settings size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
