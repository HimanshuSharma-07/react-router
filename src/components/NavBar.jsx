import React from 'react'
import { Link, NavLink } from 'react-router-dom';


function Header() {
    return (
        <header className="shadow sticky z-50 top-0 mx-auto">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-7fxl ">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://imgs.search.brave.com/mbWhHLydwYtmDSpeRX5NLS0-MaFS41flt5cnaCiEb_g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzIv/NTM4LzU5NC9zbWFs/bC9sZXR0ZXItaC1s/b2dvLWZyZWUtcG5n/LnBuZw"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                    
                                        `block py-2 ${isActive ? "text-orange-600" : "text-gray-700"}  pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent hover:underline lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({isActive}) =>
                                    
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-600" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent hover:underline  lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({isActive}) =>
                                    
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-600" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent hover:underline  lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({isActive}) =>
                                    
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-600" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent hover:underline  lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}



export default Header