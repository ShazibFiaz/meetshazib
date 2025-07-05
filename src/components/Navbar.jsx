"use client";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { scroller } from "react-scroll";
import { X, Menu } from "lucide-react";

const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "experience", label: "Resume" },
    { id: "project", label: "Portfolio" },
];

function CreateMenus({ activeLink, setActiveLink, closeDropdown }) {
    const location = useLocation(); 

    return menuItems.map((item) => (
        <button
            key={item.id}
            onClick={() => {
                if (location === "/") {
                    scroller.scrollTo(item.id, { smooth: true, duration: 500 });
                } else {
                    window.location.href = `/#${item.id}`;
                }
                setActiveLink(item.id);
                closeDropdown && closeDropdown();
            }}
            className={`px-7 py-3 cursor-pointer block transition-all duration-300 uppercase text-lg tracking-wide rounded-full ${
                activeLink === item.id
                    ? "text-white shadow-lg"
                    : "text-gray-300 hover:text-white"
            }`}
        >
            {item.label}
        </button>
    ));
}

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("home");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(currentScrollY < lastScrollY);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <header
                className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 px-300 py-3 flex items-center bg-[#0A101E] bg-opacity-50 shadow-none ${
                    isVisible ? "translate-y-0" : "-translate-y-full"
                } hidden lg:flex`}
            >
                {/* <div className="text-4xl font-bold text-[#FEC544] tracking-wide uppercase mr-40">
                    U<span className="text-white">sama</span>
                </div> */}
                <img 
                src="/assets/logoNew.png" 
                alt="Usama Logo" 
                className="h-12 mr-40" 
                />

                <ul className="flex gap-6 items-center">
                    <CreateMenus setActiveLink={setActiveLink} activeLink={activeLink} />
                </ul>
            </header>
            <div
                className={`lg:hidden fixed top-0 left-0 w-full px-4 py-3 flex items-center justify-between z-50 transition-all duration-500 ${
                    isDropdownOpen ? "bg-[#0A101E] bg-opacity-90" : "bg-transparent"
                }`}
            >
                <button
                    className="rounded-full border p-2 text-[#FEC544] hover:bg-gray-900 transition-all"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    {isDropdownOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            <div
                className={`fixed top-0 left-0 w-full transition-all duration-500 z-40 flex flex-col items-start ${
                    isDropdownOpen ? "h-[60vh] opacity-100 visible bg-[#0A101E] bg-opacity-90 pt-20 pl-1" : "h-0 opacity-0 invisible"
                }`}
            >
                <nav
                    className={`flex flex-col space-y-6 transition-all duration-500 ${
                        isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                >
                    <CreateMenus
                        setActiveLink={setActiveLink}
                        activeLink={activeLink}
                        closeDropdown={() => setIsDropdownOpen(false)}
                    />
                </nav>
            </div>
        </>
    );
}
