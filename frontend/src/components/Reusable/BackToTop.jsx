// src/components/Common/BackToTop.jsx
import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = ({ threshold = 300, position = "bottom-8 right-8" }) => {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > threshold) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {showBackToTop && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    onClick={scrollToTop}
                    className={`fixed ${position} z-50 p-4 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
                    aria-label="Back to top"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaArrowUp className="w-5 h-5 group-hover:animate-bounce" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;