'use client'
import { v4 as uuidv4 } from 'uuid';
import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Navbarmenu } from "../data/Navbarmenu";
import Link from "next/link";
import { useThemeContext } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import { menuItems } from '../data/MenuItems';
import { useAuth } from '../context/Authcontext';


export default function Navbar() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const { theme } = useThemeContext();

    const [open, setopen] = useState(false);
    const toggleDropdown = () => setopen(!open);

    const { user, logout } = useAuth();
    useEffect(() => {
        if (openMobileMenu) {
            document.body.classList.add("max-md:overflow-hidden");
        } else {
            document.body.classList.remove("max-md:overflow-hidden");
        }
    }, [openMobileMenu]);

    return (
        <nav className={`flex items-center justify-between fixed z-50 top-0 w-full px-6 md:px-16 lg:px-24 xl:px-32 py-4 ${openMobileMenu ? '' : 'backdrop-blur'}`}>
            <a href="/">
                พอตฟอริโอ้.com
            </a>
            <div className="hidden items-center  md:gap-8 lg:gap-9 md:flex lg:pl-20">
                {Navbarmenu.map((menu) => (
                    <Link key={uuidv4()} href={menu.link} className="hover:text-slate-600 dark:hover:text-slate-300">
                        {menu.label}
                    </Link>
                ))}
                {/* Dropdownmenu */}
                <div className="relative inline-block text-left">
                    {/* ปุ่มกดสำหรับเปิด Dropdown */}
                    <button
                        onClick={toggleDropdown}
                        className="inline-flex justify-center w-full text-sm font-medium"
                    >
                        รายการเนื้อหา
                        <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {/* เมนูย่อย (Children) */}
                    {open && (
                        <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg  ring-1 ring-white ring-opacity-5 z-10">
                            <div className="py-1">
                                {menuItems.map((items) => (
                                    <li key={items.id} className='list-none'>
                                        <Link
                                            href={items.link}
                                            className="block px-4 py-2 text-sm"
                                        >
                                            {items.label}
                                        </Link>
                                    </li>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* Mobile menu */}
            <div className={`fixed inset-0 flex flex-col items-center justify-center gap-6 text-lg font-medium bg-white/60 dark:bg-black/40 backdrop-blur-md md:hidden transition duration-300 ${openMobileMenu ? "translate-x-0" : "-translate-x-full"}`}>
                {Navbarmenu.map((link) => (
                    <Link key={uuidv4()} href={link.link}>
                        {link.label}
                    </Link>
                ))}
                <button
                    onClick={toggleDropdown}
                    className="inline-flex justify-center w-full text-lg font-medium"
                >
                    รายการเนื้อหา
                    <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                {open && (
                    <div className="left-0 mt-2 w-56 text-center  ring-white  z-10">
                        <div className="py-1">
                            {menuItems.map((items) => (
                                <li key={items.id} className='list-none'>
                                    <Link
                                        href={items.link}
                                        className="block px-4 py-2 text-lg font-medium"
                                    >
                                        {items.label}
                                    </Link>
                                </li>
                            ))}
                        </div>
                    </div>
                )}
                {user ? (
                    <>
                        <Link href="/Register">
                            {user.firstname}
                        </Link>
                    </>
                ) : (
                    <>
                        <Link href="/Register">
                            สมัครสมาชิก
                        </Link>
                        <Link href="/Login">
                            เข้าสู่ระบบ
                        </Link>
                    </>
                )}
                <button className="aspect-square size-10 p-1 items-center justify-center bg-purple-600 hover:bg-purple-700 transition text-white rounded-md flex" onClick={() => setOpenMobileMenu(false)}>
                    <XIcon />
                </button>
            </div>
            <div className="flex items-center gap-4">
                <ThemeToggle />
                {
                    user ? (
                        <>
                            <Link href="#" className="hidden md:block hover:bg-slate-100 dark:hover:bg-purple-950 transition px-4 py-2 border border-purple-600 rounded-md">
                                {user.firstname}
                            </Link>
                        </>
                    ) : (
                        <>

                            <Link href="/Register" className="hidden md:block hover:bg-slate-100 dark:hover:bg-purple-950 transition px-4 py-2 border border-purple-600 rounded-md">
                                สมัครสมาชิก
                            </Link>

                            <Link href="/Login" className="hidden md:block hover:bg-slate-100 dark:hover:bg-purple-950 transition px-4 py-2 border border-purple-600 rounded-md">
                                เข้าสู่ระบบ
                            </Link>
                        </>
                    )
                }

                <button onClick={() => setOpenMobileMenu(!openMobileMenu)} className="md:hidden">
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </div>
        </nav>
    );
}