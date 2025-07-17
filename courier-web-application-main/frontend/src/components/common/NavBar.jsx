import { LogOut, Settings, Menu } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from '../../utils/auth';

export default function Navbar({ onMenuClick }) {
     const [showDropdown, setShowDropdown] = useState(false);
    let { pathname } = useLocation()
    const navigate = useNavigate();
    
    // Get user info from sessionStorage
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    
    // Get the first name from user data (backend uses snake_case)
    const firstName = user?.first_name || user?.email?.split('@')[0] || 'U';
    const profileInitial = firstName.charAt(0).toUpperCase();
    
    if(pathname==="/"){
        pathname="/dashboard"
    }
    
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    const handleLogout = () => {
        logout();
        navigate('/login');
    };
    
    const handleSettings = () => {
        navigate('/settings');
        setShowDropdown(false);
    };
    return (
      <>
        <header className="flex z-10 relative justify-between items-center mb-8 bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-2xl border border-orange-200 shadow-lg">
          {/* Mobile menu button */}
          <button
            className="md:hidden mr-4 p-2 rounded-full hover:bg-orange-100"
            onClick={onMenuClick}
            aria-label="Open sidebar menu"
          >
            <Menu className="w-7 h-7 text-orange-500" />
          </button>
          <h1 className="text-3xl font-bold text-gray-800 flex-1">
            {pathname.split("/")[1].charAt(0).toUpperCase() + pathname.split("/")[1].slice(1)}
          </h1>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
                onClick={toggleDropdown}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg border-2 border-orange-300 hover:scale-110 transition-transform duration-300 shadow-lg"
            >
                {profileInitial}
            </button>

            {showDropdown && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white bg-opacity-95 backdrop-blur-md rounded-2xl shadow-2xl border border-orange-200 z-[700] overflow-hidden">
                    <button onClick={handleSettings} className="w-full flex items-center gap-3 px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                        <Settings className="w-5 h-5 relative z-10" />
                        <span className="font-medium relative z-10">Settings</span>
                    </button>
                    <div className="border-t border-orange-200">
                        <button onClick={handleLogout} className="w-full flex items-center gap-3 px-6 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 transition-all duration-300 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                            <LogOut className="w-5 h-5 relative z-10" />
                            <span className="font-medium relative z-10">Logout</span>
                        </button>
                    </div>
                </div>
            )}
          </div>
        </header>
      </>
    );
}