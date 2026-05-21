// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { FaSun, FaMoon } from 'react-icons/fa';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [darkMode, setDarkMode] = useState(() => {
//         if (typeof window !== 'undefined') {
//             const savedTheme = localStorage.getItem('theme');
//             if (savedTheme) {
//                 return savedTheme === 'dark';
//             }
//             return true;
//         }
//         return true;
//     });

//     useEffect(() => {
//         if (darkMode) {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem('theme', 'dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem('theme', 'light');
//         }
//     }, [darkMode]);

//     const toggleDarkMode = () => {
//         setDarkMode(!darkMode);
//     };

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleLinkClick = () => {
//         setIsOpen(false);
//     };

//     return (
//         <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg fixed w-full z-50 transition-all duration-300 border-b border-gray-200/50 dark:border-gray-700/50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between h-16">
//                     {/* Logo Section - Premium */}
//                     <div className="flex items-center">
//                         <NavLink to="/" className="flex-shrink-0 flex items-center group">
//                             <div className="relative">
//                                 <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 tracking-tight">
//                                     Pumpa
//                                 </span>
//                                 <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
//                             </div>
//                         </NavLink>
//                     </div>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:flex items-center space-x-1">
//                         <NavLink
//                             to="/"
//                             className={({ isActive }) =>
//                                 `relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg ${isActive
//                                     ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30'
//                                     : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
//                                 }`
//                             }
//                             end
//                         >
//                             {({ isActive }) => (
//                                 <>
//                                     Home
//                                     {isActive && (
//                                         <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
//                                     )}
//                                 </>
//                             )}
//                         </NavLink>
//                         <NavLink
//                             to="/about"
//                             className={({ isActive }) =>
//                                 `relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg ${isActive
//                                     ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30'
//                                     : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
//                                 }`
//                             }
//                         >
//                             {({ isActive }) => (
//                                 <>
//                                     About
//                                     {isActive && (
//                                         <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
//                                     )}
//                                 </>
//                             )}
//                         </NavLink>
//                         <NavLink
//                             to="/services"
//                             className={({ isActive }) =>
//                                 `relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg ${isActive
//                                     ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30'
//                                     : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
//                                 }`
//                             }
//                         >
//                             {({ isActive }) => (
//                                 <>
//                                     Services
//                                     {isActive && (
//                                         <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
//                                     )}
//                                 </>
//                             )}
//                         </NavLink>
//                         <NavLink
//                             to="/contact"
//                             className={({ isActive }) =>
//                                 `relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg ${isActive
//                                     ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30'
//                                     : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
//                                 }`
//                             }
//                         >
//                             {({ isActive }) => (
//                                 <>
//                                     Contact
//                                     {isActive && (
//                                         <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
//                                     )}
//                                 </>
//                             )}
//                         </NavLink>

//                         {/* Premium Dark Mode Toggle Button with React Icons */}
                     
         

//                         <button
//                             onClick={toggleDarkMode}
//                             className={`
//     relative ml-2 px-4 py-2 rounded-2xl overflow-hidden
//     group cursor-pointer
//     transition-all duration-500
//     active:scale-95
//     shadow-lg hover:shadow-2xl

//     ${!darkMode
//                                     ? `
//             bg-gradient-to-r
//             from-emerald-100 via-lime-100 to-white

//             hover:from-slate-900
//             hover:via-black
//             hover:to-slate-800

//             border-1 border-black/60
//             `
//                                     : `
//             bg-gradient-to-r
//             from-slate-900 via-black to-slate-800

//             hover:from-amber-200 border-2 border-amber-400
//             hover:via-orange-200
//             hover:to-yellow-100
//             `
//                                 }
//     `}
//                             aria-label="Toggle Theme"
//                         >
//                             {/* Animated Overlay */}
//                             <div
//                                 className={`
//         absolute inset-0 opacity-0 group-hover:opacity-100
//         transition-all duration-500

//         ${darkMode
//                                         ? `
//                 bg-gradient-to-r
//                 from-yellow-300/20 via-orange-200/10 to-amber-300/20
//                 `
//                                         : `
//                 bg-gradient-to-r
//                 from-blue-500/10 via-purple-500/10 to-slate-900/20
//                 `
//                                     }
//         `}
//                             />

//                             {/* Glow */}
//                             <div
//                                 className={`
//         absolute -inset-1 blur-xl opacity-0
//         group-hover:opacity-100
//         transition-all duration-500

//         ${darkMode
//                                         ? "bg-amber-400/20"
//                                         : "bg-blue-500/20"
//                                     }
//         `}
//                             />

//                             {/* Content */}
//                             <div className="relative z-10 flex items-center gap-2">
//                                 {darkMode ? (
//                                     <>
//                                         <FaSun
//                                             className="
//                     text-amber-400 group-hover:text-amber-600
//                     group-hover:rotate-180
//                     group-hover:scale-110
//                     transition-all duration-700
//                     drop-shadow-[0_0_10px_rgba(253,224,71,0.8)]
//                     "
//                                         />

//                                         <span
//                                             className="
//                     text-xs font-semibold tracking-wider uppercase
//                     text-amber-100 group-hover:text-slate-900
//                     transition-all duration-500
//                     "
//                                         >
//                                             Energy
//                                         </span>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <FaMoon
//                                             className="
//                     text-slate-700
//                     group-hover:text-blue-200
//                     group-hover:-rotate-12
//                     group-hover:scale-110
//                     transition-all duration-500
//                     drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]
//                     "
//                                         />

//                                         <span
//                                             className="
//                     text-xs font-semibold tracking-wider uppercase
//                     text-slate-700 group-hover:text-white
//                     transition-all duration-500
//                     "
//                                         >
//                                             Champion
//                                         </span>
//                                     </>
//                                 )}
//                             </div>
//                         </button>


                       









                        




                       















                        
                          


                       









                       

                       















                       




//                         {/* Premium CTA Button */}
//                         {/* <NavLink
//                             to="/contact"
//                             className="ml-2 px-5 py-2 text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-blue-600 via-blue-600 to-purple-600 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
//                         >
//                             Get Started
//                         </NavLink> */}
//                     </div>

//                     {/* Mobile menu button */}
//                     <div className="flex items-center md:hidden">
//                         <button
//                             onClick={toggleDarkMode}
//                             className="p-2 mr-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-amber-500 dark:text-amber-400 hover:shadow-md transition-all duration-300"
//                             aria-label="Toggle dark mode"
//                         >
//                             {darkMode ? (
//                                 <FaSun className="w-4 h-4 text-amber-400" />
//                             ) : (
//                                 <FaMoon className="w-4 h-4 text-slate-700" />
//                             )}
//                         </button>

//                         <button
//                             onClick={toggleMenu}
//                             type="button"
//                             className="inline-flex items-center justify-center p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             aria-controls="mobile-menu"
//                             aria-expanded={isOpen}
//                         >
//                             <span className="sr-only">Open main menu</span>
//                             {!isOpen ? (
//                                 <svg
//                                     className="block h-5 w-5"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                     aria-hidden="true"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M4 6h16M4 12h16M4 18h16"
//                                     />
//                                 </svg>
//                             ) : (
//                                 <svg
//                                     className="block h-5 w-5"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                     aria-hidden="true"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 </svg>
//                             )}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu - Premium */}
//             <div
//                 className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 invisible'
//                     }`}
//                 id="mobile-menu"
//             >
//                 <div className="px-4 pt-2 pb-4 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 shadow-lg">
//                     <NavLink
//                         to="/"
//                         className={({ isActive }) =>
//                             `block px-4 py-3 rounded-xl text-base font-medium tracking-wide transition-all duration-200 ${isActive
//                                 ? 'text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 font-semibold'
//                                 : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
//                             }`
//                         }
//                         onClick={handleLinkClick}
//                         end
//                     >
//                         Home
//                     </NavLink>
//                     <NavLink
//                         to="/about"
//                         className={({ isActive }) =>
//                             `block px-4 py-3 rounded-xl text-base font-medium tracking-wide transition-all duration-200 ${isActive
//                                 ? 'text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 font-semibold'
//                                 : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
//                             }`
//                         }
//                         onClick={handleLinkClick}
//                     >
//                         About
//                     </NavLink>
//                     <NavLink
//                         to="/services"
//                         className={({ isActive }) =>
//                             `block px-4 py-3 rounded-xl text-base font-medium tracking-wide transition-all duration-200 ${isActive
//                                 ? 'text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 font-semibold'
//                                 : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
//                             }`
//                         }
//                         onClick={handleLinkClick}
//                     >
//                         Services
//                     </NavLink>
//                     <NavLink
//                         to="/contact"
//                         className={({ isActive }) =>
//                             `block px-4 py-3 rounded-xl text-base font-medium tracking-wide transition-all duration-200 ${isActive
//                                 ? 'text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 font-semibold'
//                                 : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
//                             }`
//                         }
//                         onClick={handleLinkClick}
//                     >
//                         Contact
//                     </NavLink>

//                     {/* Mobile CTA Button */}
//                     <div className="pt-3">
//                         <NavLink
//                             to="/contact"
//                             className="block w-full text-center px-4 py-3 text-base font-semibold tracking-wide text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-lg transition-all duration-300"
//                             onClick={handleLinkClick}
//                         >
//                             Get Started
//                         </NavLink>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;























// src/components/Header/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DarkModeToggle from '../Reusable/DarkModeToggle';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg fixed w-full z-50 transition-all duration-300 border-b border-gray-200/50 dark:border-gray-700/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <NavLink to="/" className="flex-shrink-0 flex items-center group">
                            <div className="relative">
                                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 tracking-tight">
                                    Pumpa
                                </span>
                                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                            </div>
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg ${isActive
                                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                }`
                            }
                            end
                        >
                            {({ isActive }) => (
                                <>
                                    Home
                                    {isActive && (
                                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                                    )}
                                </>
                            )}
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg ${isActive
                                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    About
                                    {isActive && (
                                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                                    )}
                                </>
                            )}
                        </NavLink>
                        <NavLink
                            to="/programs"
                            className={({ isActive }) =>
                                `relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg ${isActive
                                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                   Programs
                                    {isActive && (
                                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                                    )}
                                </>
                            )}
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg ${isActive
                                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    Contact
                                    {isActive && (
                                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                                    )}
                                </>
                            )}
                        </NavLink>

                        {/* Dark Mode Toggle Component */}
                        <DarkModeToggle />
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <DarkModeToggle />

                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 invisible'
                    }`}
                id="mobile-menu"
            >
                <div className="px-4 pt-2 pb-4 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 shadow-lg">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `block px-4 py-3 rounded-xl text-base font-medium tracking-wide transition-all duration-200 ${isActive
                                ? 'text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 font-semibold'
                                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                            }`
                        }
                        onClick={handleLinkClick}
                        end
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `block px-4 py-3 rounded-xl text-base font-medium tracking-wide transition-all duration-200 ${isActive
                                ? 'text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 font-semibold'
                                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                            }`
                        }
                        onClick={handleLinkClick}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/programs"
                        className={({ isActive }) =>
                            `block px-4 py-3 rounded-xl text-base font-medium tracking-wide transition-all duration-200 ${isActive
                                ? 'text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 font-semibold'
                                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                            }`
                        }
                        onClick={handleLinkClick}
                    >
                        Programs
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `block px-4 py-3 rounded-xl text-base font-medium tracking-wide transition-all duration-200 ${isActive
                                ? 'text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 font-semibold'
                                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                            }`
                        }
                        onClick={handleLinkClick}
                    >
                        Contact
                    </NavLink>

                    {/* Mobile CTA Button */}
                    <div className="pt-3">
                        <NavLink
                            to="/contact"
                            className="block w-full text-center px-4 py-3 text-base font-semibold tracking-wide text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-lg transition-all duration-300"
                            onClick={handleLinkClick}
                        >
                            Get Started
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;