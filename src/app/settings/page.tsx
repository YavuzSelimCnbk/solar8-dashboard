import SettingsForm from "@/components/SettingsForm";

export default function SettingsPage() {
    return (
        <main className="flex-1 overflow-auto p-8 custom-scrollbar">
            <div className="max-w-3xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white tracking-tight">Settings</h1>
                    <p className="text-gray-400 mt-1">Manage your account preferences and integrations.</p>
                </div>

                <SettingsForm />
            </div>
        </main>
    );
}
