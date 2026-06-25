// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import DarkModeToggle from '../Reusable/DarkModeToggle';
// import logo from '../../assets/mylogos.png'


// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

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
//                     <div className="flex items-center">
//                         <NavLink to="/" className="flex-shrink-0 flex items-center group">
//                             <div className="relative flex items-center gap-2 sm:gap-3">
//                                 {/* Logo Image - Responsive */}
//                                 <img
//                                     src={logo}
//                                     alt="PUMPA SQUASH ACADEMY"
//                                     className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-all duration-300"
//                                 />

//                                 {/* Logo Text - Responsive */}
//                                 <div className="flex flex-col leading-tight">
//                                     <span className="text-base sm:text-xl md:text-2xl font-bold tracking-tight">
//                                         <span className="text-black dark:text-white">PUMPA</span>
//                                         <span className="text-green-600 dark:text-green-400"> SQUASH</span>
//                                     </span>
//                                     <span className="text-sm sm:text-lg md:text-xl font-bold tracking-tight text-black dark:text-white">
//                                         ACADEMY
//                                     </span>
//                                 </div>

//                                 {/* Underline animation */}
//                                 <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 group-hover:w-full transition-all duration-300"></div>
//                             </div>
//                         </NavLink>
//                     </div>
//                     {/* Desktop Menu */}
//                     <div className="hidden md:flex items-center space-x-1">
//                         <NavLink
//                             to="/"
//                             className={({ isActive }) =>
//                                 `relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg ${isActive
//                                     ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/30'
//                                     : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800'
//                                 }`
//                             }
//                             end
//                         >
//                             {({ isActive }) => (
//                                 <>
//                                     Home
//                                     {isActive && (
//                                         <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></span>
//                                     )}
//                                 </>
//                             )}
//                         </NavLink>
//                         <NavLink
//                             to="/about"
//                             className={({ isActive }) =>
//                                 `relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg ${isActive
//                                     ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/30'
//                                     : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800'
//                                 }`
//                             }
//                         >
//                             {({ isActive }) => (
//                                 <>
//                                     About
//                                     {isActive && (
//                                         <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></span>
//                                     )}
//                                 </>
//                             )}
//                         </NavLink>
//                         <NavLink
//                             to="/programs"
//                             className={({ isActive }) =>
//                                 `relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg ${isActive
//                                     ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/30'
//                                     : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800'
//                                 }`
//                             }
//                         >
//                             {({ isActive }) => (
//                                 <>
//                                     Programs
//                                     {isActive && (
//                                         <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></span>
//                                     )}
//                                 </>
//                             )}
//                         </NavLink>
//                         <NavLink
//                             to="/contact"
//                             className={({ isActive }) =>
//                                 `relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg ${isActive
//                                     ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/30'
//                                     : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800'
//                                 }`
//                             }
//                         >
//                             {({ isActive }) => (
//                                 <>
//                                     Contact
//                                     {isActive && (
//                                         <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></span>
//                                     )}
//                                 </>
//                             )}
//                         </NavLink>

//                         {/* Dark Mode Toggle Component */}
//                         <DarkModeToggle />
//                     </div>

//                     {/* Mobile menu button */}
//                     <div className="flex items-center md:hidden">
//                         <DarkModeToggle />

//                         <button
//                             onClick={toggleMenu}
//                             type="button"
//                             className="inline-flex items-center justify-center p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 ml-2"
//                             aria-controls="mobile-menu"
//                             aria-expanded={isOpen}
//                         >
//                             <span className="sr-only">Open main menu</span>
//                             {!isOpen ? (
//                                 <svg className="block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                                 </svg>
//                             ) : (
//                                 <svg className="block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             )}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
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
//                                 ? 'text-green-600 dark:text-green-400 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 font-semibold'
//                                 : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800'
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
//                                 ? 'text-green-600 dark:text-green-400 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 font-semibold'
//                                 : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800'
//                             }`
//                         }
//                         onClick={handleLinkClick}
//                     >
//                         About
//                     </NavLink>
//                     <NavLink
//                         to="/programs"
//                         className={({ isActive }) =>
//                             `block px-4 py-3 rounded-xl text-base font-medium tracking-wide transition-all duration-200 ${isActive
//                                 ? 'text-green-600 dark:text-green-400 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 font-semibold'
//                                 : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800'
//                             }`
//                         }
//                         onClick={handleLinkClick}
//                     >
//                         Programs
//                     </NavLink>
//                     <NavLink
//                         to="/contact"
//                         className={({ isActive }) =>
//                             `block px-4 py-3 rounded-xl text-base font-medium tracking-wide transition-all duration-200 ${isActive
//                                 ? 'text-green-600 dark:text-green-400 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 font-semibold'
//                                 : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800'
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
//                             className="block w-full text-center px-4 py-3 text-base font-semibold tracking-wide text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl hover:shadow-lg transition-all duration-300"
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












// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import DarkModeToggle from '../Reusable/DarkModeToggle';
// import logo from '../../assets/mylogos.png';

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => setIsOpen(!isOpen);
//     const handleLinkClick = () => setIsOpen(false);

//     const navLinkClass = ({ isActive }) =>
//         `relative px-4 py-2 text-[15px] font-bold uppercase tracking-[1.2px]
//         transition-all duration-300 rounded-lg
//         hover:text-green-500 hover:scale-105 hover:-translate-y-0.5
//         ${isActive
//             ? 'text-green-500'
//             : 'text-gray-700 dark:text-gray-300'
//         }`;

//     const activeLine = (isActive) =>
//         isActive ? (
//             <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></span>
//         ) : null;

//     return (
//         <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg fixed w-full z-50 border-b border-green-500/10 transition-all duration-300">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between h-16 items-center">

//                     {/* LOGO */}
//                     <NavLink to="/" className="flex items-center gap-3 group">
//                         <img
//                             src={logo}
//                             alt="Logo"
//                             className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-all duration-300"
//                         />

//                         <div className="leading-tight">
//                             <div className="text-base sm:text-xl md:text-2xl font-extrabold uppercase tracking-wider">
//                                 <span className="text-black dark:text-white">PUMPA</span>
//                                 <span className="text-green-500"> SQUASH</span>
//                             </div>
//                             <div className="text-sm sm:text-lg font-bold text-black dark:text-white uppercase tracking-wide">
//                                 ACADEMY
//                             </div>
//                         </div>
//                     </NavLink>

                   



//                     {/* DESKTOP MENU */}
//                     <div className="hidden md:flex items-center space-x-2">

//                         <NavLink to="/" className={navLinkClass} end>
//                             {({ isActive }) => (
//                                 <>
//                                     Home
//                                     {activeLine(isActive)}
//                                 </>
//                             )}
//                         </NavLink>

//                         <NavLink to="/about" className={navLinkClass}>
//                             {({ isActive }) => (
//                                 <>
//                                     About
//                                     {activeLine(isActive)}
//                                 </>
//                             )}
//                         </NavLink>

//                         <NavLink to="/programs" className={navLinkClass}>
//                             {({ isActive }) => (
//                                 <>
//                                     Programs
//                                     {activeLine(isActive)}
//                                 </>
//                             )}
//                         </NavLink>

//                         <NavLink to="/contact" className={navLinkClass}>
//                             {({ isActive }) => (
//                                 <>
//                                     Contact
//                                     {activeLine(isActive)}
//                                 </>
//                             )}
//                         </NavLink>

//                         {/* DARK MODE */}
//                         <DarkModeToggle />
//                     </div>

//                     {/* MOBILE BUTTON */}
//                     <div className="flex items-center md:hidden">
//                         <DarkModeToggle />

//                         <button
//                             onClick={toggleMenu}
//                             className="ml-2 p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
//                         >
//                             {!isOpen ? (
//                                 <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                                         d="M4 6h16M4 12h16M4 18h16" />
//                                 </svg>
//                             ) : (
//                                 <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                                         d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             )}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* MOBILE MENU */}
          




//             <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden
//     ${isOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0 invisible'}`}>

//                 <div className="px-4 pt-3 pb-5 space-y-2 
//         bg-white/95 dark:bg-gray-900/95 backdrop-blur-md 
//         border-t border-green-500/10">

//                     {/* NAV ITEMS */}
//                     <NavLink
//                         to="/"
//                         className="block px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider
//             text-gray-700 dark:text-gray-300 
//             hover:text-green-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
//                         onClick={handleLinkClick}
//                         end
//                     >
//                         Home
//                     </NavLink>

//                     <NavLink
//                         to="/about"
//                         className="block px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider
//             text-gray-700 dark:text-gray-300 
//             hover:text-green-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
//                         onClick={handleLinkClick}
//                     >
//                         About
//                     </NavLink>

//                     <NavLink
//                         to="/programs"
//                         className="block px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider
//             text-gray-700 dark:text-gray-300 
//             hover:text-green-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
//                         onClick={handleLinkClick}
//                     >
//                         Programs
//                     </NavLink>

//                     <NavLink
//                         to="/contact"
//                         className="block px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider
//             text-gray-700 dark:text-gray-300 
//             hover:text-green-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
//                         onClick={handleLinkClick}
//                     >
//                         Contact
//                     </NavLink>

//                     {/* CTA */}
//                     <NavLink
//                         to="/contact"
//                         onClick={handleLinkClick}
//                         className="block mt-3 text-center px-4 py-3 
//             font-bold uppercase tracking-wider text-white 
//             bg-gradient-to-r from-green-500 to-emerald-500 
//             rounded-xl active:scale-95 transition-all duration-300"
//                     >
//                         Get Started
//                     </NavLink>
//                 </div>
//             </div>

//         </nav>
//     );
// };

// export default Navbar;





import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DarkModeToggle from '../Reusable/DarkModeToggle';
import logo from '../../assets/mylogos.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const handleLinkClick = () => setIsOpen(false);

    const navLinkClass = ({ isActive }) =>
        `relative px-2 lg:px-4 py-2 text-[13px] lg:text-[15px] font-bold uppercase
        tracking-[1px] lg:tracking-[1.2px]
        transition-all duration-300 rounded-lg
        hover:text-green-500 hover:scale-105 hover:-translate-y-0.5
        ${isActive
            ? 'text-green-500'
            : 'text-gray-700 dark:text-gray-300'
        }`;

    const activeLine = (isActive) =>
        isActive ? (
            <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></span>
        ) : null;

    return (
        <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg fixed w-full z-50 border-b border-green-500/10 transition-all duration-300">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex justify-between h-16 items-center gap-4">

                    {/* LOGO */}
                    <NavLink
                        to="/"
                        className="flex items-center gap-2 sm:gap-3 group shrink-0"
                    >
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain transition-all duration-300"
                        />

                      


                        <div className="leading-tight">

                            {/* MAIN BRAND */}
                            <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold uppercase tracking-wider">
                                <span className="text-black dark:text-white">PUMPA</span>
                                <span className="text-green-500"> SQUASH</span>
                            </div>

                            {/* SUB BRAND (FIXED) */}
                            <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-black dark:text-white uppercase tracking-wide">
                                ACADEMY
                            </div>

                        </div>
                    </NavLink>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex items-center lg:space-x-2 md:space-x-1">

                        <NavLink to="/" className={navLinkClass} end>
                            {({ isActive }) => (
                                <>
                                    Home
                                    {activeLine(isActive)}
                                </>
                            )}
                        </NavLink>

                        <NavLink to="/about" className={navLinkClass}>
                            {({ isActive }) => (
                                <>
                                    About
                                    {activeLine(isActive)}
                                </>
                            )}
                        </NavLink>

                        <NavLink to="/programs" className={navLinkClass}>
                            {({ isActive }) => (
                                <>
                                    Programs
                                    {activeLine(isActive)}
                                </>
                            )}
                        </NavLink>

                        <NavLink to="/contact" className={navLinkClass}>
                            {({ isActive }) => (
                                <>
                                    Contact
                                    {activeLine(isActive)}
                                </>
                            )}
                        </NavLink>

                        {/* DARK MODE */}
                        <DarkModeToggle />
                    </div>

                    {/* MOBILE BUTTON */}
                    <div className="flex items-center md:hidden">
                        <DarkModeToggle />

                        <button
                            onClick={toggleMenu}
                            className="ml-2 p-2 rounded-xl text-gray-700 dark:text-gray-200
                            hover:text-green-500 hover:bg-gray-100 dark:hover:bg-gray-800
                            transition-all duration-300"
                        >
                            {!isOpen ? (
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden
                ${isOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0 invisible'}`}>

                <div className="px-4 pt-3 pb-5 space-y-2
                bg-white/95 dark:bg-gray-900/95 backdrop-blur-md
                border-t border-green-500/10">

                    <NavLink
                        to="/"
                        className="block px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider
                        text-gray-700 dark:text-gray-300
                        hover:text-green-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                        onClick={handleLinkClick}
                        end
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className="block px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider
                        text-gray-700 dark:text-gray-300
                        hover:text-green-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                        onClick={handleLinkClick}
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/programs"
                        className="block px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider
                        text-gray-700 dark:text-gray-300
                        hover:text-green-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                        onClick={handleLinkClick}
                    >
                        Programs
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className="block px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider
                        text-gray-700 dark:text-gray-300
                        hover:text-green-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                        onClick={handleLinkClick}
                    >
                        Contact
                    </NavLink>

                    {/* CTA */}
                    <NavLink
                        to="/contact"
                        onClick={handleLinkClick}
                        className="block mt-3 text-center px-4 py-3
                        font-bold uppercase tracking-wider text-white
                        bg-gradient-to-r from-green-500 to-emerald-500
                        rounded-xl active:scale-95 transition-all duration-300"
                    >
                        Get Started
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;