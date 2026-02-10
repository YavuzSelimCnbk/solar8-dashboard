import { AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const predictions = [
    {
        id: "PRED-001",
        component: "Inverter B3",
        prediction: "Efficiency drop > 15%",
        probability: "89%",
        timeToFailure: "48 hours",
        priority: "critical",
    },
    {
        id: "PRED-002",
        component: "Panel Array A4",
        prediction: "Micro-crack expansion",
        probability: "65%",
        timeToFailure: "2 weeks",
        priority: "low",
    },
    {
        id: "PRED-003",
        component: "Cooling Fan 2",
        prediction: "Motor vibration anomaly",
        probability: "92%",
        timeToFailure: "24 hours",
        priority: "critical",
    },
    {
        id: "PRED-004",
        component: "Battery Cell C1",
        prediction: "Thermal runaway risk",
        probability: "45%",
        timeToFailure: "1 month",
        priority: "low",
    },
];

export default function MaintenanceList() {
    return (
        <div className="glass-panel rounded-xl overflow-hidden">
            <div className="p-6 border-b border-solar-border">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Clock className="text-solar-primary" />
                    AI Failure Predictions
                </h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-white/5 text-gray-400 font-medium">
                        <tr>
                            <th className="px-6 py-4">Component</th>
                            <th className="px-6 py-4">Prediction</th>
                            <th className="px-6 py-4">Probability</th>
                            <th className="px-6 py-4">Est. Time to Failure</th>
                            <th className="px-6 py-4 text-right">Priority</th>
                            <th className="px-6 py-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-solar-border">
                        {predictions.map((item) => (
                            <tr key={item.id} className="group hover:bg-white/[0.02] transition-colors">
                                <td className="px-6 py-4 font-medium text-white">{item.component}</td>
                                <td className="px-6 py-4 text-gray-300">{item.prediction}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-white font-bold">{item.probability}</span>
                                        <div className="w-16 h-1 bg-gray-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-solar-primary rounded-full"
                                                style={{ width: item.probability }}
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-300">{item.timeToFailure}</td>
                                <td className="px-6 py-4 text-right">
                                    <span className={cn(
                                        "px-2.5 py-0.5 rounded-full text-xs font-medium border",
                                        item.priority === "critical"
                                            ? "bg-red-500/10 text-red-500 border-red-500/20"
                                            : "bg-solar-primary/10 text-solar-primary border-solar-primary/20"
                                    )}>
                                        {item.priority.toUpperCase()}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-sm text-gray-400 hover:text-white underline">Schedule Fix</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
