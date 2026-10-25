import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <li>
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                    `font-bold ${isActive ? "text-green-500 border border-green-500 bg-transparent" : ""}`
                }
            >
                Home
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/books"
                className={({ isActive }) =>
                    `font-bold ${isActive ? "text-green-500 border border-green-500 bg-transparent" : ""}`
                }
            >
                Listed Books
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/books-to-read"
                className={({ isActive }) =>
                    `font-bold ${isActive ? "text-green-500 border border-green-500 bg-transparent" : ""}`
                }
            >
                Page to Read
            </NavLink>
        </li>
    </>;

    return (
        <header className="w-full bg-white shadow-sm">
            <nav className="navbar w-[94%] md:w-[90%] lg:w-[80%] mx-auto bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
                        >
                            {links}
                        </ul>
                    </div>

                    <Link to="/" className="text-xl font-extrabold text-black whitespace-nowrap">
                        Book Vibe
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal items-center gap-3 px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end gap-2">
                    <button className="btn btn-sm border-none bg-green-600 text-white hover:bg-green-700">
                        Sign In
                    </button>
                    <button className="btn btn-sm border-none bg-cyan-500 text-white hover:bg-cyan-600">
                        Sign Up
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;