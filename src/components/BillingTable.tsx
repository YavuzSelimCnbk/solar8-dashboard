import { Download, FileText, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const invoices = [
    { id: "INV-2024-001", date: "Feb 01, 2024", amount: "$2,450.00", status: "paid" },
    { id: "INV-2024-002", date: "Jan 01, 2024", amount: "$2,450.00", status: "paid" },
    { id: "INV-2023-012", date: "Dec 01, 2023", amount: "$2,450.00", status: "paid" },
    { id: "INV-2023-011", date: "Nov 01, 2023", amount: "$2,100.00", status: "paid" },
];

export default function BillingTable() {
    return (
        <div className="glass-panel rounded-xl overflow-hidden mt-8">
            <div className="p-6 border-b border-solar-border flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Invoice History</h2>
                <button className="text-sm text-solar-primary hover:text-white transition-colors">Download All</button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-white/5 text-gray-400 font-medium">
                        <tr>
                            <th className="px-6 py-4">Invoice ID</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Amount</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-solar-border">
                        {invoices.map((inv) => (
                            <tr key={inv.id} className="group hover:bg-white/[0.02] transition-colors">
                                <td className="px-6 py-4 font-medium text-white flex items-center gap-2">
                                    <FileText size={16} className="text-gray-500" />
                                    {inv.id}
                                </td>
                                <td className="px-6 py-4 text-gray-300">{inv.date}</td>
                                <td className="px-6 py-4 text-white font-medium">{inv.amount}</td>
                                <td className="px-6 py-4">
                                    <span className="flex items-center gap-1.5 text-xs font-medium text-solar-primary bg-solar-primary/10 px-2 py-0.5 rounded-full border border-solar-primary/20 w-fit">
                                        <CheckCircle size={12} />
                                        Paid
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
                                        <Download size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
