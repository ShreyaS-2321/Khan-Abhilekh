import { useState } from "react";
import { ChevronLeft, ChevronRight, LogOut, Home, Settings, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import morning from "../assets/morning.svg"
import afternoon from "../assets/afternoon.svg"
import night from "../assets/night.svg"
import { useNavigate } from "react-router-dom";
import { account } from "../../appwrite";

export default function Homepage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await account.deleteSession("current"); // Logs out the current session
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };


  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white ${isSidebarOpen ? "w-64" : "w-16"} transition-all duration-300 p-4 flex flex-col`}> 
        <button
          className="text-white p-2 rounded-full bg-gray-700 hover:bg-gray-600 self-end"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </button>

        <nav className="mt-6 flex flex-col gap-4">
          <Link to="/dashboard" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg">
            <Home size={20} /> {isSidebarOpen && "Home"}
          </Link>
          <Link to="/table" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg">
            <FileText size={20} /> {isSidebarOpen && "Shift Logs"}
          </Link>
          <Link to="/settings" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg">
            <Settings size={20} /> {isSidebarOpen && "Settings"}
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="flex justify-end bg-white p-4 shadow-md gap-4">
          <Link to ="/dashboard" className=" cursor-pointer flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg">Dashboard</Link>
          <button onClick={handleLogout} className=" cursor-pointer flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
            <LogOut size={20} /> Logout
          </button>
        </div>

        {/* Shift Blocks */}
        <div className="flex-1 flex items-center justify-center gap-6 p-6">
          <Link to="/shiftform" className="bg-white p-20 shadow-lg rounded-lg w-1/3 text-center flex-col justify-items-center cursor-pointer">
          <img src={morning} alt="" />
            <h2 className="text-xl font-semibold mt-2">Morning Shift</h2>
          </Link>
          <Link to="/shiftform" className="bg-white p-20 shadow-lg rounded-lg w-1/3 text-center justify-items-center cursor-pointer">
          <img src={afternoon} alt="" />
            <h2 className="text-xl font-semibold mt-2">Afternoon Shift</h2>
          </Link>
          <Link to="/shiftform" className="bg-white p-20 shadow-lg rounded-lg w-1/3 text-center justify-items-center cursor-pointer">
          <img src={night} alt="" />
            <h2 className="text-xl font-semibold mt-2">Night Shift</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
