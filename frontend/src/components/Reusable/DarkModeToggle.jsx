// src/components/Header/DarkModeToggle.jsx
import  { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme === 'dark';
            }
            return true;
        }
        return true;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <motion.button
            onClick={toggleDarkMode}
            initial={false}
            animate={{
                scale: darkMode ? 1 : 1,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
                relative ml-2 px-4 py-2 rounded-2xl overflow-hidden
                group cursor-pointer transition-all duration-500
                active:scale-95 shadow-lg hover:shadow-2xl
                ${!darkMode
                    ? `
                        bg-linear-to-r from-emerald-100 via-lime-100 to-white
                        hover:from-slate-900 hover:via-black hover:to-slate-800
                        border border-black/60
                    `
                    : `
                        bg-linear-to-r from-slate-900 via-black to-slate-800
                        hover:from-amber-200 border-2 border-amber-400
                        hover:via-orange-200 hover:to-yellow-100
                    `
                }
            `}
            aria-label="Toggle Theme"
        >
            {/* Animated Overlay */}
            <div
                className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100
                    transition-all duration-500
                    ${darkMode
                        ? `
                            bg-linear-to-r
                            from-yellow-300/20 via-orange-200/10 to-amber-300/20
                        `
                        : `
                            bg-linear-to-r
                            from-blue-500/10 via-purple-500/10 to-slate-900/20
                        `
                    }
                `}
            />

            {/* Glow Effect */}
            <div
                className={`
                    absolute -inset-1 blur-xl opacity-0
                    group-hover:opacity-100 transition-all duration-500
                    ${darkMode ? "bg-amber-400/20" : "bg-blue-500/20"}
                `}
            />

            {/* Content */}
            <div className="relative z-10 flex items-center gap-2">
                {darkMode ? (
                    <>
                        <FaSun
                            className="
                                text-amber-400 group-hover:text-amber-600
                                group-hover:rotate-180 group-hover:scale-110
                                transition-all duration-700
                                drop-shadow-[0_0_10px_rgba(253,224,71,0.8)]
                            "
                        />
                        <span
                            className="
                                text-xs font-semibold tracking-wider uppercase
                                text-amber-100 group-hover:text-slate-900
                                transition-all duration-500
                            "
                        >
                            Light
                        </span>
                    </>
                ) : (
                    <>
                        <FaMoon
                            className="
                                text-slate-700 group-hover:text-blue-200
                                group-hover:-rotate-12 group-hover:scale-110
                                transition-all duration-500
                                drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]
                            "
                        />
                        <span
                            className="
                                text-xs font-semibold tracking-wider uppercase
                                text-slate-700 group-hover:text-white
                                transition-all duration-500
                            "
                        >
                            Dark
                        </span>
                    </>
                )}
            </div>
        </motion.button>
    );
};

export default DarkModeToggle;