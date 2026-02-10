import AssetTable from "@/components/AssetTable";

export default function AssetsPage() {
    return (
        <main className="flex-1 overflow-auto p-8 custom-scrollbar h-full flex flex-col">
            <div className="flex-1 max-w-7xl mx-auto w-full flex flex-col space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight">Asset Management</h1>
                        <p className="text-gray-400 mt-1">Monitor and control your solar panel infrastructure.</p>
                    </div>
                </div>

                <div className="flex-1 min-h-0">
                    <AssetTable />
                </div>
            </div>
        </main>
    );
}
