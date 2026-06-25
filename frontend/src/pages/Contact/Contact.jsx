
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaWhatsapp,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaEnvelope,
    FaClock,
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaCopy,
    FaCheck,
    FaParking,
    FaWheelchair,
    FaCoffee,
    FaShuttleVan
} from 'react-icons/fa';
import BackToTop from '../../components/Reusable/BackToTop';
import ContactForm from '../../components/Reusable/ContactForm';
import SocialMediaLinks from '../../components/Reusable/SocialMediaLinks';
import GoogleMapEmbed from '../../components/Reusable/GoogleMapEmbed';
import SectionDivider from '../../components/Reusable/SectionDivider';
import bgImg from '../../assets/bgImg.png';

const Contact = () => {
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleCopyPhone = () => {
        navigator.clipboard.writeText('011-1198 9375');
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('info@pumpasquash.com');
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6 }
    };

    return (
        <div className="pt-16 overflow-hidden">
            {/* Hero Section with Full Background Image - Clear */}
            <section
                className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center"
                style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Subtle Dark Overlay - Minimal for image clarity */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Glow Effect - Soft Glow from center */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="absolute w-[600px] h-[600px] bg-green-500/15 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-75"></div>
                </div>
            </section>

            {/* Contact Header Section - Moved Below Image */}
            <section className="py-12 md:py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-green-200/50 dark:border-green-800/50 shadow-lg"
                        >
                            <span className="text-green-600 text-sm">📞</span>
                            <span className="text-xs sm:text-sm font-semibold text-green-700 dark:text-green-400 tracking-[0.1em] uppercase">
                                Get in Touch
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-4 mt-4"
                        >
                            Contact Us
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-[1.8] max-w-2xl mx-auto font-light tracking-wide"
                        >
                            Get in Touch with Pumpa Squash Academy
                        </motion.p>

                        
                                                <motion.div
                                                                        className="flex items-center justify-center gap-3 sm:gap-4 mb-4 mt-4 sm:mb-6"
                                                                        initial={{ opacity: 0, scaleX: 0 }}
                                                                        whileInView={{ opacity: 1, scaleX: 1 }}
                                                                        viewport={{ once: true }}
                                                                        transition={{ duration: 0.5, delay: 0.4 }}
                                                                    >
                                                                        <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-green-500" />
                                                                        <div className="flex gap-1">
                                                                            {[...Array(3)].map((_, i) => (
                                                                                <motion.div
                                                                                    key={i}
                                                                                    className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full"
                                                                                    initial={{ scale: 0 }}
                                                                                    whileInView={{ scale: 1 }}
                                                                                    viewport={{ once: true }}
                                                                                    transition={{ delay: 0.5 + (i * 0.1) }}
                                                                                />
                                                                            ))}
                                                                        </div>
                                                                        <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-green-500" />
                                                                    </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Cards Section */}
            <section className="py-1 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {/* WhatsApp Card */}
                        <motion.a
                            href="https://wa.me/601111989375"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-200/50 dark:border-gray-700/50"
                        >
                            <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors duration-300">
                                <FaWhatsapp className="text-3xl text-green-600 dark:text-green-400 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">WhatsApp Us</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-3 font-light tracking-wide">Click to chat with us</p>
                            <p className="text-green-600 dark:text-green-400 font-semibold tracking-wide">011-1198 9375</p>
                        </motion.a>

                        {/* Phone Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50"
                        >
                            <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                                <FaPhoneAlt className="text-3xl text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Call Us</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-3 font-light tracking-wide">Mon-Sat, 9AM - 6PM</p>
                            <div className="flex items-center gap-2">
                                <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide">011-1198 9375</p>
                                <button
                                    onClick={handleCopyPhone}
                                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                                    title="Copy number"
                                >
                                    {copiedPhone ? <FaCheck className="text-green-500" /> : <FaCopy className="text-gray-400" />}
                                </button>
                            </div>
                        </motion.div>

                        {/* Location Card */}
                        <motion.a
                            href="https://maps.app.goo.gl/2j3WqoMnhtxbB4Ax8"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-200/50 dark:border-gray-700/50"
                        >
                            <div className="bg-red-100 dark:bg-red-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors duration-300">
                                <FaMapMarkerAlt className="text-3xl text-red-600 dark:text-red-400 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Visit Us</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-3 font-light tracking-wide">Get directions</p>
                            <p className="text-red-600 dark:text-red-400 font-semibold tracking-wide">Open in Google Maps</p>
                        </motion.a>

                        {/* Email Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50"
                        >
                            <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors duration-300">
                                <FaEnvelope className="text-3xl text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Email Us</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-3 font-light tracking-wide">Send us an email</p>
                            <div className="flex items-center gap-2 flex-wrap">
                                <p className="text-purple-600 dark:text-purple-400 font-semibold tracking-wide break-all">info@pumpasquash.com</p>
                                <button
                                    onClick={handleCopyEmail}
                                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                                    title="Copy email"
                                >
                                    {copiedEmail ? <FaCheck className="text-green-500" /> : <FaCopy className="text-gray-400" />}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <ContactForm />
                </div>
            </section>

            {/* Map and Address Section */}
            <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <motion.div {...fadeInUp} className="grid lg:grid-cols-2 gap-12">
                            {/* Address Details */}
                            <div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-6">
                                    Our Location
                                </h2>
                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                                    {/* Clickable Address */}
                                    <a
                                        href="https://maps.app.goo.gl/2j3WqoMnhtxbB4Ax8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-4 mb-6 group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-xl transition-all duration-300"
                                    >
                                        <FaMapMarkerAlt className="text-3xl text-green-600 dark:text-green-400 mt-1 group-hover:scale-110 transition-transform" />
                                        <div>
                                            <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                                Pumpa Squash Academy (Subang Branch)
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 leading-[1.8] font-light tracking-wide">
                                                Jalan SS 12/1, SS 12,<br />
                                                47500 Subang Jaya,<br />
                                                Selangor, Malaysia
                                            </p>
                                            <p className="text-green-600 dark:text-green-400 mt-2 text-sm font-medium tracking-[0.15em] uppercase group-hover:underline">
                                                📍 Click to open in Google Maps →
                                            </p>
                                        </div>
                                    </a>

                                    {/* Opening Hours */}
                                    <div className="flex items-start gap-4 mb-6 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
                                        <FaClock className="text-3xl text-green-600 dark:text-green-400 mt-1" />
                                        <div>
                                            <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">
                                                Opening Hours
                                            </h3>
                                            <div className="space-y-2 text-gray-600 dark:text-gray-400 font-light tracking-wide leading-[1.8]">
                                                <p>Monday - Friday: 9:00 AM - 9:00 PM</p>
                                                <p>Saturday: 9:00 AM - 6:00 PM</p>
                                                <p>Sunday: 10:00 AM - 4:00 PM</p>
                                                <p className="text-sm text-green-600 dark:text-green-400 font-medium tracking-wide mt-2">*Public holidays may vary</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Amenities */}
                                    <div className="p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
                                        <h3 className="text-lg font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight">
                                            Amenities Available
                                        </h3>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-medium tracking-wide">
                                                <FaParking className="text-green-600" />
                                                <span>Free Parking</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-medium tracking-wide">
                                                <FaWheelchair className="text-green-600" />
                                                <span>Wheelchair Access</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-medium tracking-wide">
                                                <FaCoffee className="text-green-600" />
                                                <span>Café Nearby</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-medium tracking-wide">
                                                <FaShuttleVan className="text-green-600" />
                                                <span>Public Transport Access</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                                    <a
                                        href="https://wa.me/601111989375"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3.5 rounded-xl font-semibold tracking-wide hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
                                    >
                                        <FaWhatsapp className="text-xl" />
                                        Chat on WhatsApp
                                    </a>
                                    <a
                                        href="https://maps.app.goo.gl/2j3WqoMnhtxbB4Ax8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 border-2 border-green-600 px-6 py-3.5 rounded-xl font-semibold tracking-wide hover:bg-green-50 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
                                    >
                                        <FaMapMarkerAlt className="text-xl" />
                                        Get Directions
                                    </a>
                                </div>
                            </div>

                            <GoogleMapEmbed />
                        </motion.div>
                    </div>
                </div>
            </section>

            <SocialMediaLinks />
            <SectionDivider />

            {/* Back to Top Button */}
            <BackToTop threshold={300} position="bottom-8 right-8" />
        </div>
    );
};

export default Contact;