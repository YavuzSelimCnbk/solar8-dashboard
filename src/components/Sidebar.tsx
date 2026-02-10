"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Sun,
    Activity,
    Cpu,
    CreditCard,
    Settings,
    ChevronLeft,
    ChevronRight,
    Menu,
    X
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

const navItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Solar Assets", href: "/assets", icon: Sun },
    { name: "Analytics", href: "/analytics", icon: Activity },
    { name: "AI Maintenance", href: "/maintenance", icon: Cpu },
    { name: "Billing", href: "/billing", icon: CreditCard },
    { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            {/* Mobile Header / Toggle */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-solar-card-bg border-b border-solar-border">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-solar-primary/20 flex items-center justify-center border border-solar-primary/50">
                        <Sun className="text-solar-primary" size={20} />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">
                        Solar<span className="text-solar-primary">8</span>
                    </span>
                </div>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 text-gray-400 hover:text-white"
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Desktop & Mobile Sidebar Overlay */}
            <aside
                className={cn(
                    "fixed md:relative z-40 flex h-full flex-col border-r border-solar-border bg-black/95 md:bg-black/50 backdrop-blur-xl transition-all duration-300",
                    isCollapsed ? "md:w-20" : "md:w-64",
                    isMobileMenuOpen ? "translate-x-0 w-64" : "-translate-x-full md:translate-x-0",
                    "top-0 bottom-0 left-0"
                )}
            >
                {/* Desktop Toggle Button */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="hidden md:flex absolute -right-3 top-8 h-6 w-6 items-center justify-center rounded-full border border-solar-border bg-black text-gray-400 hover:text-white hover:border-solar-primary transition-colors"
                >
                    {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
                </button>

                {/* Logo (Desktop) */}
                <div className="hidden md:flex h-16 items-center px-6">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-solar-primary/20 flex items-center justify-center border border-solar-primary/50">
                            <Sun className="text-solar-primary" size={20} />
                        </div>
                        {!isCollapsed && (
                            <span className="text-xl font-bold tracking-tight text-white">
                                Solar<span className="text-solar-primary">8</span>
                            </span>
                        )}
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-1 px-3 py-20 md:py-4">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                                    isActive
                                        ? "bg-solar-primary/10 text-solar-primary shadow-[0_0_10px_rgba(139,92,246,0.2)]"
                                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                                )}
                            >
                                <item.icon
                                    className={cn(
                                        "flex-shrink-0 transition-colors",
                                        isActive ? "text-solar-primary" : "text-gray-400 group-hover:text-white"
                                    )}
                                    size={20}
                                />
                                <span className={cn(
                                    "whitespace-nowrap transition-all duration-300",
                                    isCollapsed ? "md:opacity-0 md:w-0 md:overflow-hidden" : "opacity-100"
                                )}>
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                {/* User Profile */}
                <div className="border-t border-solar-border p-4">
                    <div className={cn("flex items-center gap-3 transition-all", isCollapsed ? "md:justify-center" : "")}>
                        <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-solar-primary to-solar-secondary border border-white/10 ring-2 ring-black" />
                        <div className={cn(
                            "flex-1 overflow-hidden transition-all duration-300",
                            isCollapsed ? "md:opacity-0 md:w-0" : "opacity-100"
                        )}>
                            <p className="truncate text-sm font-medium text-white">Alex Morgan</p>
                            <p className="truncate text-xs text-gray-400">Admin</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile Overlay Backdrop */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-30 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
}
