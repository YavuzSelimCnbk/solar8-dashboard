import { CloudSun, Sun, Wind, Droplets } from "lucide-react";

export default function WeatherWidget() {
    return (
        <div className="glass-panel p-6 rounded-xl flex flex-col h-[200px] relative overflow-hidden">
            <div className="flex items-center justify-between mb-4 relative z-10">
                <h3 className="text-lg font-semibold text-white">Site Conditions</h3>
                <span className="text-xs font-medium text-gray-400 bg-white/5 px-2 py-1 rounded">
                    Austin, TX
                </span>
            </div>

            <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-solar-primary/10 text-solar-primary">
                        <CloudSun size={32} />
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-white">82°F</div>
                        <div className="text-sm text-gray-400">Partly Cloudy</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-auto relative z-10">
                <div className="flex flex-col items-center p-2 rounded-lg bg-white/5">
                    <Sun size={16} className="text-amber-400 mb-1" />
                    <span className="text-xs text-gray-400">UV Index</span>
                    <span className="text-sm font-semibold text-white">High</span>
                </div>
                <div className="flex flex-col items-center p-2 rounded-lg bg-white/5">
                    <Wind size={16} className="text-blue-400 mb-1" />
                    <span className="text-xs text-gray-400">Wind</span>
                    <span className="text-sm font-semibold text-white">8 mph</span>
                </div>
                <div className="flex flex-col items-center p-2 rounded-lg bg-white/5">
                    <Droplets size={16} className="text-cyan-400 mb-1" />
                    <span className="text-xs text-gray-400">Humidity</span>
                    <span className="text-sm font-semibold text-white">45%</span>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Sun size={120} className="text-solar-primary" />
            </div>
        </div>
    );
}
