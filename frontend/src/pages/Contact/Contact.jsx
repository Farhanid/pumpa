// src/pages/Contact.jsx
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
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white py-20 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl md:text-2xl text-green-100 mb-8">
                            Get in Touch with Pumpa Squash Academy
                        </p>
                        <div className="w-24 h-1 bg-green-400 mx-auto"></div>
                    </div>
                </div>
            </section>

            {/* Contact Cards Section */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto -mt-20 relative z-10">
                        {/* WhatsApp Card */}
                        <motion.a
                            href="https://wa.me/601111989375"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                        >
                            <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors duration-300">
                                <FaWhatsapp className="text-3xl text-green-600 dark:text-green-400 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">WhatsApp Us</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-3">Click to chat with us</p>
                            <p className="text-green-600 dark:text-green-400 font-semibold">011-1198 9375</p>
                        </motion.a>

                        {/* Phone Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                <FaPhoneAlt className="text-3xl text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Call Us</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-3">Mon-Sat, 9AM - 6PM</p>
                            <div className="flex items-center gap-2">
                                <p className="text-blue-600 dark:text-blue-400 font-semibold">011-1198 9375</p>
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
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                        >
                            <div className="bg-red-100 dark:bg-red-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-500 transition-colors duration-300">
                                <FaMapMarkerAlt className="text-3xl text-red-600 dark:text-red-400 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Visit Us</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-3">Get directions</p>
                            <p className="text-red-600 dark:text-red-400 font-semibold">Open in Google Maps</p>
                        </motion.a>

                        {/* Email Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                <FaEnvelope className="text-3xl text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Us</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-3">Send us an email</p>
                            <div className="flex items-center gap-2 flex-wrap">
                                <p className="text-purple-600 dark:text-purple-400 font-semibold break-all">info@pumpasquash.com</p>
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


            {/* Contact Form Section - Using Separated Component */}
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
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                    Our Location
                                </h2>
                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg mb-6">
                                    {/* Clickable Address */}
                                    <a
                                        href="https://maps.app.goo.gl/2j3WqoMnhtxbB4Ax8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-4 mb-6 group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-xl transition-all duration-300"
                                    >
                                        <FaMapMarkerAlt className="text-3xl text-green-600 dark:text-green-400 mt-1 group-hover:scale-110 transition-transform" />
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                                Pumpa Squash Academy (Subang Branch)
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                                Jalan SS 12/1, SS 12,<br />
                                                47500 Subang Jaya,<br />
                                                Selangor, Malaysia
                                            </p>
                                            <p className="text-green-600 dark:text-green-400 mt-2 text-sm group-hover:underline">
                                                📍 Click to open in Google Maps →
                                            </p>
                                        </div>
                                    </a>

                                    {/* Opening Hours */}
                                    <div className="flex items-start gap-4 mb-6 p-3">
                                        <FaClock className="text-3xl text-green-600 dark:text-green-400 mt-1" />
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                                Opening Hours
                                            </h3>
                                            <div className="space-y-2 text-gray-600 dark:text-gray-400">
                                                <p>Monday - Friday: 9:00 AM - 9:00 PM</p>
                                                <p>Saturday: 9:00 AM - 6:00 PM</p>
                                                <p>Sunday: 10:00 AM - 4:00 PM</p>
                                                <p className="text-sm text-green-600 dark:text-green-400 mt-2">*Public holidays may vary</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Amenities */}
                                    <div className="p-3">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                                            Amenities Available
                                        </h3>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                <FaParking className="text-green-600" />
                                                <span>Free Parking</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                <FaWheelchair className="text-green-600" />
                                                <span>Wheelchair Access</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                <FaCoffee className="text-green-600" />
                                                <span>Café Nearby</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                <FaShuttleVan className="text-green-600" />
                                                <span>Public Transport Access</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="https://wa.me/601111989375"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
                                    >
                                        <FaWhatsapp />
                                        Chat on WhatsApp
                                    </a>
                                    <a
                                        href="https://maps.app.goo.gl/2j3WqoMnhtxbB4Ax8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 border-2 border-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
                                    >
                                        <FaMapMarkerAlt />
                                        Get Directions
                                    </a>
                                </div>
                            </div>

                            {/* Google Maps Embed */}
                            <div className="h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                                <a
                                    href="https://maps.app.goo.gl/2j3WqoMnhtxbB4Ax8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full h-full relative group"
                                >
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.964048532276!2d101.579647!3d3.073667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4f1e3b4a3b4b%3A0x0!2zPHAgY2xhc3M9IlVJU2Nyb2xsIj7CtDwvcD4!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Pumpa Squash Academy Subang Branch Location"
                                    ></iframe>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                        <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100">
                                            <p className="text-green-600 dark:text-green-400 font-semibold flex items-center gap-2">
                                                <FaMapMarkerAlt />
                                                Click to open full map
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

           

            {/* Social Media Section */}
            <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Connect With Us
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                            Follow us on social media for updates, tips, and success stories
                        </p>
                        <div className="flex justify-center gap-6">
                            <a
                                href="https://www.instagram.com/pumpasquashacademy"
                                className="w-14 h-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-600 group"
                            >
                                <FaInstagram className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="https://www.facebook.com/pumpasquashacademy"
                                className="w-14 h-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-600 group"
                            >
                                <FaFacebook className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                            </a>
                            

                            <a
                                href="https://wa.me/601111989375"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-600 group"
                            >
                                <FaWhatsapp className="text-2xl text-green-600 group-hover:text-white transition-colors" />
                            </a>
                            <a
                                href="https://wa.me/601111989375"
                                className="w-14 h-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-600 group"
                            >
                                <FaTwitter className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

           

            {/* Back to Top Button */}
            <BackToTop threshold={300} position="bottom-8 right-8" />
        </div>
    );
};

export default Contact;