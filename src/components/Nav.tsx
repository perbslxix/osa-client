import { Link, NavLink } from "react-router-dom"
import { FaRegBell } from "../hooks/icons"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

function Nav() {
    return (
        <nav className="bg-[#2A2E3A] px-20 py-6">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-1 gap-4">
                    <img 
                        src="/logo.png"
                        className="h-20 w-20"  
                        alt="logo"  
                    />
                    <div className="flex flex-col justify-center leading-4">
                        <h1 className="text-white uppercase text-xl font-bold">University Student Affairs</h1>
                        <h2 className="text-primary uppercase font-semibold">Management System</h2>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <button className="text-white text-2xl">
                        <FaRegBell/>
                    </button>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
            <div className="flex bg-primary mt-5 px-10 rounded-lg">
                <NavLink 
                    to="/"
                    className={({ isActive }) => (isActive ? "bg-[#DC4C5F] px-7 py-2 rounded-sm text-white font-semibold":"hover:bg-[#DC4C5F] px-7 py-2 rounded-sm text-white font-semibold")}
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/activities"
                    className={({ isActive }) => (isActive ? "bg-[#DC4C5F] px-7 py-2 rounded-sm text-white font-semibold":"hover:bg-[#DC4C5F] px-7 py-2 rounded-sm text-white font-semibold")}
                >
                    Activities
                </NavLink>
                <NavLink 
                    to="/organizations"
                    className={({ isActive }) => (isActive ? "bg-[#DC4C5F] px-7 py-2 rounded-sm text-white font-semibold":"hover:bg-[#DC4C5F] px-7 py-2 rounded-sm text-white font-semibold")}
                >
                    Organizations
                </NavLink>
                <NavLink 
                    to="/accreditation"
                    className={({ isActive }) => (isActive ? "bg-[#DC4C5F] px-7 py-2 rounded-sm text-white font-semibold":"hover:bg-[#DC4C5F] px-7 py-2 rounded-sm text-white font-semibold")}
                >
                    Accreditation
                </NavLink>
                <NavLink 
                    to="/osa-services"
                    className={({ isActive }) => (isActive ? "bg-[#DC4C5F] px-7 py-2 rounded-sm text-white font-semibold":"hover:bg-[#DC4C5F] px-7 py-2 rounded-sm text-white font-semibold")}
                >
                    OSA Services
                </NavLink>
                <NavLink 
                    to="/about"
                    className={({ isActive }) => (isActive ? "bg-[#DC4C5F] px-7 py-2 rounded-sm text-white font-semibold":"hover:bg-[#DC4C5F] px-7 py-2 rounded-sm text-white font-semibold")}
                >
                    About
                </NavLink>
            </div>
        </nav>
    )
}

export default Nav