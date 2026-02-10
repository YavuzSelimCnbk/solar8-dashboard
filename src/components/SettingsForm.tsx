"use client";

import { useState } from "react";
import { User, Bell, Key, Save } from "lucide-react";

export default function SettingsForm() {
    const [apiKey, setApiKey] = useState("your_api_key_here_xxxxxxxxxxxxxxxx");

    return (
        <div className="space-y-6">
            {/* Profile Section */}
            <div className="glass-panel p-6 rounded-xl">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <User className="text-solar-primary" />
                    Profile Settings
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Full Name</label>
                        <input
                            type="text"
                            defaultValue="Alex Morgan"
                            className="w-full px-4 py-3 bg-white/5 border border-solar-border rounded-lg text-white focus:outline-none focus:border-solar-primary/50 transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Email Address</label>
                        <input
                            type="email"
                            defaultValue="alex@solar8.app"
                            className="w-full px-4 py-3 bg-white/5 border border-solar-border rounded-lg text-white focus:outline-none focus:border-solar-primary/50 transition-colors"
                        />
                    </div>
                </div>
            </div>

            {/* Notifications */}
            <div className="glass-panel p-6 rounded-xl">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Bell className="text-solar-primary" />
                    Notifications
                </h2>
                <div className="space-y-4">
                    {["Critical System Alerts", "Daily Performance Reports", "Billing Updates", "New Features"].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-solar-border">
                            <span className="text-gray-300">{item}</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked={i < 2} />
                                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-solar-primary"></div>
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* API Key */}
            <div className="glass-panel p-6 rounded-xl">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Key className="text-solar-primary" />
                    API Access
                </h2>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Secret Key</label>
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            value={apiKey}
                            readOnly
                            className="flex-1 px-4 py-3 bg-white/5 border border-solar-border rounded-lg text-gray-400 font-mono text-sm"
                        />
                        <button
                            onClick={() => setApiKey("sk_live_" + Math.random().toString(36).substring(2))}
                            className="px-4 py-3 bg-white/5 border border-solar-border rounded-lg text-white hover:bg-white/10 transition-colors"
                        >
                            Regenerate
                        </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Keep this key secret. It grants full access to your Solar8 account.</p>
                </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
                <button className="flex items-center gap-2 px-8 py-3 bg-solar-primary hover:bg-solar-primary/90 text-white font-bold rounded-lg shadow-lg shadow-solar-primary/20 transition-all">
                    <Save size={18} />
                    Save Changes
                </button>
            </div>
        </div>
    );
}
