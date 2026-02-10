import BillingTable from "@/components/BillingTable";
import { CreditCard, Check } from "lucide-react";

export default function BillingPage() {
    return (
        <main className="flex-1 overflow-auto p-8 custom-scrollbar">
            <div className="max-w-5xl mx-auto space-y-8">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Billing & Plans</h1>
                    <p className="text-gray-400 mt-1">Manage your subscription and payment methods.</p>
                </div>

                {/* Current Plan */}
                <div className="glass-panel p-8 rounded-xl relative overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-2">Enterprise Plan</h2>
                            <p className="text-gray-400 max-w-md">You are on the Enterprise plan. Your next billing date is <span className="text-white font-medium">March 1, 2026</span>.</p>

                            <div className="mt-6 flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <Check size={16} className="text-solar-primary" />
                                    <span>Unlimited Assets</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <Check size={16} className="text-solar-primary" />
                                    <span>AI Predictive Maintenance</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-300">
                                    <Check size={16} className="text-solar-primary" />
                                    <span>24/7 Priority Support</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-center md:text-right">
                            <div className="text-4xl font-bold text-white mb-1">$2,450<span className="text-lg text-gray-400 font-normal">/mo</span></div>
                            <button className="mt-4 px-6 py-3 bg-solar-primary hover:bg-solar-primary/90 text-white font-medium rounded-lg shadow-lg shadow-solar-primary/20 transition-all flex items-center justify-center gap-2 w-full md:w-auto">
                                <CreditCard size={18} />
                                Update Payment Method
                            </button>
                            <p className="text-xs text-gray-500 mt-3">Visa ending in 4242</p>
                        </div>
                    </div>

                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <CreditCard size={300} className="text-solar-primary" />
                    </div>
                </div>

                {/* Invoice History */}
                <BillingTable />
            </div>
        </main>
    );
}
