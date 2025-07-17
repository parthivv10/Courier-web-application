import Navbar from "../components/common/Navbar";
import SideBar from "../components/common/SideBar";
import { useState } from "react";

export default function GlobalLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 flex">
            {/* Sidebar for desktop, drawer for mobile */}
            <SideBar open={sidebarOpen} setOpen={setSidebarOpen} />
            {/* Overlay for mobile sidebar */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden" onClick={() => setSidebarOpen(false)}></div>
            )}
            {/* Main Content */}
            <main className="flex-1 w-full p-2 sm:p-4 md:p-8 transition-all duration-300 md:ml-80">
                {/* Header with mobile menu button */}
                <Navbar onMenuClick={() => setSidebarOpen(true)} />
                {children}
            </main>
        </div>
    );
}