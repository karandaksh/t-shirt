import React, { useState } from 'react'
import { NavLink, Link, } from 'react-router-dom'



const index = () => {


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);


    // const navLinkClass = "";
    // const activeClassName = "text-blue-600 font-semibold";


    const menuItems = [
        { name: 'home', path: '/home', isActive: false, id: 'home' },
        { name: 'latest', path: '/latest', isActive: false, id: 'latest' },
        { name: 'men', path: '/men', isActive: false, id: 'men' },
        { name: 'women', path: '/women', isActive: false, id: 'women' },
        { name: 'child', path: '/child', isActive: false, id: 'child' },
        { name: 'contact us', path: '/contact', isActive: false, id: 'contactus' },
    ]




    return (
        <nav className="bg-white shadow-md w-full">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="text-xl font-bold text-blue-600">
                        <NavLink to="/">My Logo</NavLink>

                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 ml-auto">

                        {menuItems.map((item) => (
                            <NavLink key={item.name} to={item.path} className={({ isActive }) => isActive ? `text-blue-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium uppercase` : `text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium uppercase`}>
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none" >
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />)
                                    :
                                    (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />)}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    {menuItems.map((item) => (
                        <NavLink key={item.name} to={item.path} onClick={() => setIsOpen(false)} // Close menu on click
                            className={({ isActive }) => isActive ? `text-blue-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium uppercase block` : `text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium uppercase block`}
                        // className={({ isActive }) =>
                        //     isActive ? `${navLinkClass} ${activeClassName} block` : `${navLinkClass} block`
                        // }

                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default index
