// import React from 'react';
// import {
//     FaInstagram,
//     FaFacebook,
//     FaWhatsapp,
//     FaEnvelope,
//     FaPhone,
//     FaMapMarkerAlt,
// } from 'react-icons/fa';

// const Footer = () => {
//     const quickLinks = [
//         { name: 'Home', href: '/' },
//         { name: 'About Us', href: '/about' },
//         { name: 'Programs', href: '/programs' },
//         { name: 'Contact', href: '/contact' },
//     ];

//     const legalLinks = [
//         { name: 'Privacy Policy', href: '/privacy' },
//         { name: 'Terms of Service', href: '/terms' },
//         { name: 'FAQ', href: '/faq' },
//         { name: 'Refund Policy', href: '/refund' },
//     ];

//     const socialLinks = [
//         { icon: FaInstagram, href: 'https://www.instagram.com/pumpasquashacademy', label: 'Instagram' },
//         { icon: FaFacebook, href: 'https://www.facebook.com/pumpasquashacademy', label: 'Facebook' },
//         { icon: FaWhatsapp, href: 'https://wa.me/601111989375', label: 'WhatsApp' },
//     ];

//     return (
//         <footer className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500 border-t border-gray-200/50 dark:border-gray-800/50">
//             {/* Premium Background with Glow Effects - Same as Heros */}
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 {/* ✨ Background Glow */}
//                 <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
//                 <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />

//                 {/* Subtle premium texture */}
//                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-wall.png')] opacity-[0.04]" />

//                 {/* Additional gradient layers */}
//                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-50/20 via-transparent to-emerald-50/20 dark:from-gray-900/30 dark:via-transparent dark:to-gray-800/30" />
//                 <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-200/20 dark:bg-green-500/10 rounded-full blur-3xl" />
//                 <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-emerald-200/10 dark:bg-emerald-500/5 rounded-full blur-3xl" />

//                 {/* Decorative Grid Pattern - Dark Mode Support */}
//                 <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
//             </div>

//             <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
//                 {/* Main Footer Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 pb-12 border-b border-gray-200/50 dark:border-gray-800/50">
//                     {/* Brand Column */}
//                     <div className="space-y-5">
//                         <div>
//                             <h2 className="text-xl font-bold text-gray-800 dark:text-white tracking-tight">
//                                 Pumba Squash
//                                 <span className="text-gray-500 dark:text-gray-400 font-normal"> Academy</span>
//                             </h2>
//                             <div className="w-10 h-px bg-emerald-500 dark:bg-emerald-400 mt-3"></div>
//                         </div>
//                         <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
//                             Professional squash training academy dedicated to developing athletes of all levels with world-class coaching and facilities.
//                         </p>
//                         <div className="flex gap-3 pt-2">
//                             {socialLinks.map((social, idx) => {
//                                 const Icon = social.icon;
//                                 return (
//                                     <a
//                                         key={idx}
//                                         href={social.href}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200/50 dark:border-gray-700/50"
//                                         aria-label={social.label}
//                                     >
//                                         <Icon className="w-4.5 h-4.5" />
//                                     </a>
//                                 );
//                             })}
//                         </div>
//                     </div>





                  
//                     {/* Quick Links + Contact */}
//                     <div className="flex flex-col sm:flex-row gap-10 lg:gap-16">
//                         {/* Quick Links */}
//                         <div className="space-y-5">
//                             <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
//                                 Quick Links
//                             </h3>

//                             <ul className="space-y-3">
//                                 {quickLinks.map((item) => (
//                                     <li key={item.name}>
//                                         <a
//                                             href={item.href}
//                                             className="text-sm text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
//                                         >
//                                             {item.name}
//                                         </a>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         {/* Contact */}
//                         <div className="space-y-5">
//                             <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
//                                 Contact
//                             </h3>

//                             <ul className="space-y-3 text-sm">
//                                 <li className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
//                                     <FaMapMarkerAlt className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
//                                     <span>123 Sports Complex, Kuala Lumpur, Malaysia</span>
//                                 </li>

//                                 <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
//                                     <FaPhone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
//                                     <a href="tel:+601111989375">
//                                         +60 11-1198 9375
//                                     </a>
//                                 </li>

//                                 <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
//                                     <FaEnvelope className="w-4 h-4 text-emerald-500 flex-shrink-0" />
//                                     <a href="mailto:info@pumpasquash.com">
//                                         info@pumpasquash.com
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>







//                     {/* Hours & CTA */}
//                     <div className="space-y-5">
//                         <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
//                             Training Hours
//                         </h3>
//                         <div className="space-y-2 text-sm">
//                             <div className="flex justify-between text-gray-600 dark:text-gray-300">
//                                 <span>Monday - Friday</span>
//                                 <span className="text-gray-800 dark:text-gray-200 font-medium">6:00 AM - 10:00 PM</span>
//                             </div>
//                             <div className="flex justify-between text-gray-600 dark:text-gray-300">
//                                 <span>Saturday</span>
//                                 <span className="text-gray-800 dark:text-gray-200 font-medium">8:00 AM - 8:00 PM</span>
//                             </div>
//                             <div className="flex justify-between text-gray-600 dark:text-gray-300">
//                                 <span>Sunday</span>
//                                 <span className="text-gray-800 dark:text-gray-200 font-medium">9:00 AM - 6:00 PM</span>
//                             </div>
//                         </div>
//                         <div className="pt-4">
//                             <a
//                                 href="/contact"
//                                 className="inline-flex w-full items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-500 dark:to-emerald-500 rounded-md hover:from-green-700 hover:to-emerald-700 dark:hover:from-green-600 dark:hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
//                             >
//                                 Book Trial Class
//                             </a>
//                         </div>
//                     </div>

//                     {/* Quick Links */}
                    
//                 </div>

//                 {/* Bottom Bar */}
//                 <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//                     <p className="text-xs text-gray-500 dark:text-gray-400">
//                         © {new Date().getFullYear()} Pumba Squash Academy. All rights reserved.
//                     </p>
//                     <div className="flex flex-wrap justify-center gap-6 text-xs">
//                         {legalLinks.map((link) => (
//                             <a
//                                 key={link.name}
//                                 href={link.href}
//                                 className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
//                             >
//                                 {link.name}
//                             </a>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom Accent Line - Same as Heros */}
//             <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400/50 dark:via-green-500/30 to-transparent" />
//         </footer>
//     );
// };

// export default Footer;













// import React from 'react';
// import {
//     FaInstagram,
//     FaFacebook,
//     FaWhatsapp,
//     FaEnvelope,
//     FaPhone,
//     FaMapMarkerAlt,
// } from 'react-icons/fa';

// const Footer = () => {
//     const quickLinks = [
//         { name: 'Home', href: '/' },
//         { name: 'About Us', href: '/about' },
//         { name: 'Programs', href: '/programs' },
//         { name: 'Contact', href: '/contact' },
//     ];

//     const legalLinks = [
//         { name: 'Privacy Policy', href: '/' },
//         { name: 'Terms of Service', href: '/' },
//         { name: 'FAQ', href: '/' },
//         { name: 'Refund Policy', href: '/' },
//     ];

//     const socialLinks = [
//         { icon: FaInstagram, href: 'https://www.instagram.com/pumpasquashacademy', label: 'Instagram' },
//         { icon: FaFacebook, href: 'https://www.facebook.com/pumpasquashacademy', label: 'Facebook' },
//         { icon: FaWhatsapp, href: 'https://wa.me/601111989375', label: 'WhatsApp' },
//     ];

//     return (
//         <footer className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500 border-t border-gray-200/50 dark:border-gray-800/50">
//             {/* Premium Background with Glow Effects - Same as Heros */}
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 {/* ✨ Background Glow */}
//                 <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
//                 <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />

//                 {/* Subtle premium texture */}
//                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-wall.png')] opacity-[0.04]" />

//                 {/* Additional gradient layers */}
//                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-50/20 via-transparent to-emerald-50/20 dark:from-gray-900/30 dark:via-transparent dark:to-gray-800/30" />
//                 <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-200/20 dark:bg-green-500/10 rounded-full blur-3xl" />
//                 <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-emerald-200/10 dark:bg-emerald-500/5 rounded-full blur-3xl" />

//                 {/* Decorative Grid Pattern - Dark Mode Support */}
//                 <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
//             </div>

//             <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
//                 {/* Main Footer Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 pb-12 border-b border-gray-200/50 dark:border-gray-800/50">
//                     {/* Brand Column */}
//                     <div className="space-y-5">
//                         <div>
//                             {/* Brand with Navbar Style */}
//                             <div className="leading-tight">
//                                 {/* MAIN BRAND */}
//                                 <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold uppercase tracking-wider">
//                                     <span className="text-black dark:text-white">PUMPA</span>
//                                     <span className="text-green-500"> SQUASH</span>
//                                 </div>

//                                 {/* SUB BRAND */}
//                                 <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-black dark:text-white uppercase tracking-wide">
//                                     ACADEMY
//                                 </div>
//                             </div>
//                             <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 dark:from-emerald-400 dark:to-green-400 mt-3 rounded-full"></div>
//                         </div>
//                         <p className="text-sm text-gray-600 dark:text-gray-300 leading-[1.8] font-light tracking-wide max-w-sm">
//                             Professional squash training academy dedicated to developing athletes of all levels with world-class coaching and facilities.
//                         </p>
//                         <div className="flex gap-3 pt-2">
//                             {socialLinks.map((social, idx) => {
//                                 const Icon = social.icon;
//                                 return (
//                                     <a
//                                         key={idx}
//                                         href={social.href}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-500 hover:text-white dark:hover:from-emerald-500 dark:hover:to-green-500 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
//                                         aria-label={social.label}
//                                     >
//                                         <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
//                                     </a>
//                                 );
//                             })}
//                         </div>
//                     </div>

//                     {/* Quick Links + Contact */}
//                     <div className="flex flex-col sm:flex-row gap-10 lg:gap-16">
//                         {/* Quick Links */}
//                         <div className="space-y-5">
//                             <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-[0.1em]">
//                                 Quick Links
//                             </h3>

//                             <ul className="space-y-3">
//                                 {quickLinks.map((item) => (
//                                     <li key={item.name}>
//                                         <a
//                                             href={item.href}
//                                             className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 tracking-wide hover:translate-x-1 inline-block"
//                                         >
//                                             {item.name}
//                                         </a>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         {/* Contact */}
//                         <div className="space-y-5">
//                             <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-[0.1em]">
//                                 Contact
//                             </h3>

//                             <ul className="space-y-3.5 text-sm">
//                                 <li className="flex items-start gap-3.5 text-gray-600 dark:text-gray-300 group">
//                                     <FaMapMarkerAlt className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
//                                     <span className="font-medium tracking-wide leading-relaxed">123 Sports Complex, Kuala Lumpur, Malaysia</span>
//                                 </li>

//                                 <li className="flex items-center gap-3.5 text-gray-600 dark:text-gray-300 group">
//                                     <FaPhone className="w-4 h-4 text-emerald-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
//                                     <a href="tel:+601111989375" className="font-medium tracking-wide hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
//                                         +60 11-1198 9375
//                                     </a>
//                                 </li>

//                                 <li className="flex items-center gap-3.5 text-gray-600 dark:text-gray-300 group">
//                                     <FaEnvelope className="w-4 h-4 text-emerald-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
//                                     <a href="mailto:info@pumpasquash.com" className="font-medium tracking-wide hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
//                                         info@pumpasquash.com
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>

//                     {/* Hours & CTA */}
//                     <div className="space-y-5">
//                         <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-[0.1em]">
//                             Training Hours
//                         </h3>
//                         <div className="space-y-2.5 text-sm bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-200/30 dark:border-gray-700/30">
//                             <div className="flex justify-between items-center">
//                                 <span className="text-gray-600 dark:text-gray-300 font-medium tracking-wide">Monday - Friday</span>
//                                 <span className="text-gray-800 dark:text-gray-200 font-semibold tracking-wide">6:00 AM - 10:00 PM</span>
//                             </div>
//                             <div className="flex justify-between items-center">
//                                 <span className="text-gray-600 dark:text-gray-300 font-medium tracking-wide">Saturday</span>
//                                 <span className="text-gray-800 dark:text-gray-200 font-semibold tracking-wide">8:00 AM - 8:00 PM</span>
//                             </div>
//                             <div className="flex justify-between items-center">
//                                 <span className="text-gray-600 dark:text-gray-300 font-medium tracking-wide">Sunday</span>
//                                 <span className="text-gray-800 dark:text-gray-200 font-semibold tracking-wide">9:00 AM - 6:00 PM</span>
//                             </div>
//                         </div>
//                         <div className="pt-2">
//                             <a
//                                 href="/contact"
//                                 className="inline-flex w-full items-center justify-center px-4 py-3 text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-500 dark:to-emerald-500 rounded-lg hover:from-green-700 hover:to-emerald-700 dark:hover:from-green-600 dark:hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
//                             >
//                                 Book Trial Class
//                                 <span className="ml-2">→</span>
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Bar */}
//                 <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//                     <p className="text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider">
//                         © {new Date().getFullYear()} <span className="font-bold text-gray-600 dark:text-gray-300">Pumba Squash Academy</span>. All rights reserved.
//                     </p>
//                     <div className="flex flex-wrap justify-center gap-6 text-xs">
//                         {legalLinks.map((link) => (
//                             <a
//                                 key={link.name}
//                                 href={link.href}
//                                 className="font-medium text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 tracking-wider hover:tracking-widest"
//                             >
//                                 {link.name}
//                             </a>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom Accent Line - Same as Heros */}
//             <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400/50 dark:via-green-500/30 to-transparent" />
//         </footer>
//     );
// };

// export default Footer;



















// import React from 'react';
// import {
//     FaInstagram,
//     FaFacebook,
//     FaWhatsapp,
//     FaEnvelope,
//     FaPhone,
//     FaMapMarkerAlt,
// } from 'react-icons/fa';

// const Footer = () => {
//     const quickLinks = [
//         { name: 'Home', href: '/' },
//         { name: 'About Us', href: '/about' },
//         { name: 'Programs', href: '/programs' },
//         { name: 'Contact', href: '/contact' },
//     ];

//     const legalLinks = [
//         { name: 'Privacy Policy', href: '/' },
//         { name: 'Terms of Service', href: '/' },
//         { name: 'FAQ', href: '/' },
//         { name: 'Refund Policy', href: '/' },
//     ];

//     const socialLinks = [
//         { icon: FaInstagram, href: 'https://www.instagram.com/pumpasquashacademy', label: 'Instagram' },
//         { icon: FaFacebook, href: 'https://www.facebook.com/pumpasquashacademy', label: 'Facebook' },
//         { icon: FaWhatsapp, href: 'https://wa.me/601111989375', label: 'WhatsApp' },
//     ];

//     return (
//         <footer className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500 border-t border-gray-200/50 dark:border-gray-800/50">
//             {/* Premium Background with Glow Effects - Same as Heros */}
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 {/* ✨ Background Glow */}
//                 <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
//                 <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />

//                 {/* Subtle premium texture */}
//                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-wall.png')] opacity-[0.04]" />

//                 {/* Additional gradient layers */}
//                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-50/20 via-transparent to-emerald-50/20 dark:from-gray-900/30 dark:via-transparent dark:to-gray-800/30" />
//                 <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-200/20 dark:bg-green-500/10 rounded-full blur-3xl" />
//                 <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-emerald-200/10 dark:bg-emerald-500/5 rounded-full blur-3xl" />

//                 {/* Decorative Grid Pattern - Dark Mode Support */}
//                 <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
//             </div>

//             <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
//                 {/* Main Footer Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 pb-12 border-b border-gray-200/50 dark:border-gray-800/50">
//                     {/* Brand Column */}
//                     <div className="space-y-5">
//                         <div>
//                             {/* Brand with Navbar Style */}
//                             <div className="leading-tight">
//                                 {/* MAIN BRAND */}
//                                 <div className="text-lg sm:text-lg md:text-xl lg:text-2xl font-extrabold uppercase tracking-wider">
//                                     <span className="text-black dark:text-white">PUMPA</span>
//                                     <span className="text-green-500"> SQUASH</span>
//                                 </div>

//                                 {/* SUB BRAND */}
//                                 <div className="text-lg sm:text-sm md:text-base lg:text-lg font-bold text-black dark:text-white uppercase tracking-wide">
//                                     ACADEMY
//                                 </div>
//                             </div>
//                             <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 dark:from-emerald-400 dark:to-green-400 mt-3 rounded-full"></div>
//                         </div>
//                         <p className="text-sm text-gray-600 dark:text-gray-300 leading-[1.8] font-light tracking-wide max-w-sm">
//                             Professional squash training academy dedicated to developing athletes of all levels with world-class coaching and facilities.
//                         </p>
//                         <div className="flex gap-3 pt-2">
//                             {socialLinks.map((social, idx) => {
//                                 const Icon = social.icon;
//                                 return (
//                                     <a
//                                         key={idx}
//                                         href={social.href}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-500 hover:text-white dark:hover:from-emerald-500 dark:hover:to-green-500 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
//                                         aria-label={social.label}
//                                     >
//                                         <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
//                                     </a>
//                                 );
//                             })}
//                         </div>
//                     </div>

//                     {/* Quick Links + Contact */}
//                     <div className="flex flex-col sm:flex-row gap-10 lg:gap-16">
//                         {/* Quick Links */}
//                         <div className="space-y-5">
//                             <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 uppercase tracking-[0.1em]">
//                                 Quick Links
//                             </h3>

//                             <ul className="space-y-3">
//                                 {quickLinks.map((item) => (
//                                     <li key={item.name}>
//                                         <a
//                                             href={item.href}
//                                             className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 tracking-wide hover:translate-x-1 inline-block"
//                                         >
//                                             {item.name}
//                                         </a>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         {/* Contact */}
//                         <div className="space-y-5">
//                             <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 uppercase tracking-[0.1em]">
//                                 Contact
//                             </h3>

//                             <ul className="space-y-3.5 text-sm">
//                                 <li className="flex items-start gap-3.5 text-gray-600 dark:text-gray-300 group">
//                                     <FaMapMarkerAlt className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
//                                     <span className="font-medium tracking-wide leading-relaxed">123 Sports Complex, Kuala Lumpur, Malaysia</span>
//                                 </li>

//                                 <li className="flex items-center gap-3.5 text-gray-600 dark:text-gray-300 group">
//                                     <FaPhone className="w-4 h-4 text-emerald-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
//                                     <a href="tel:+601111989375" className="font-medium tracking-wide hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
//                                         +60 11-1198 9375
//                                     </a>
//                                 </li>

//                                 <li className="flex items-center gap-3.5 text-gray-600 dark:text-gray-300 group">
//                                     <FaEnvelope className="w-4 h-4 text-emerald-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
//                                     <a href="mailto:info@pumpasquash.com" className="font-medium tracking-wide hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
//                                         info@pumpasquash.com
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>

//                     {/* Hours & CTA */}
//                     <div className="space-y-5">
//                         <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 uppercase tracking-[0.1em]">
//                             Training Hours
//                         </h3>
//                         <div className="space-y-2.5 text-sm bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-200/30 dark:border-gray-700/30">
//                             <div className="flex justify-between items-center">
//                                 <span className="text-gray-600 dark:text-gray-300 font-medium tracking-wide">Monday - Friday</span>
//                                 <span className="text-gray-800 dark:text-gray-200 font-semibold tracking-wide">6:00 AM - 10:00 PM</span>
//                             </div>
//                             <div className="flex justify-between items-center">
//                                 <span className="text-gray-600 dark:text-gray-300 font-medium tracking-wide">Saturday</span>
//                                 <span className="text-gray-800 dark:text-gray-200 font-semibold tracking-wide">8:00 AM - 8:00 PM</span>
//                             </div>
//                             <div className="flex justify-between items-center">
//                                 <span className="text-gray-600 dark:text-gray-300 font-medium tracking-wide">Sunday</span>
//                                 <span className="text-gray-800 dark:text-gray-200 font-semibold tracking-wide">9:00 AM - 6:00 PM</span>
//                             </div>
//                         </div>
//                         <div className="pt-2">
//                             <a
//                                 href="/contact"
//                                 className="inline-flex w-full items-center justify-center px-4 py-3 text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-500 dark:to-emerald-500 rounded-lg hover:from-green-700 hover:to-emerald-700 dark:hover:from-green-600 dark:hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
//                             >
//                                 Book Trial Class
//                                 <span className="ml-2">→</span>
//                             </a>
//                         </div>
//                     </div>
//                 </div>

                

//                 <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
//                     <p className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider text-center sm:text-left">
//                         © {new Date().getFullYear()} <span className="font-bold text-gray-600 dark:text-gray-300">Pumba Squash Academy</span>. All rights reserved.
//                     </p>
//                     <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-[10px] sm:text-xs">
//                         {legalLinks.map((link) => (
//                             <a
//                                 key={link.name}
//                                 href={link.href}
//                                 className="font-medium text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 tracking-wider hover:tracking-widest whitespace-nowrap"
//                             >
//                                 {link.name}
//                             </a>
//                         ))}
//                     </div>
//                 </div>




//             </div>

//             {/* Bottom Accent Line - Same as Heros */}
//             <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400/50 dark:via-green-500/30 to-transparent" />
//         </footer>
//     );
// };

// export default Footer;






import React from 'react';
import {
    FaInstagram,
    FaFacebook,
    FaWhatsapp,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Programs', href: '/programs' },
        { name: 'Contact', href: '/contact' },
    ];

    const legalLinks = [
        { name: 'Privacy Policy'},
        { name: 'Terms of Service' },
        { name: 'FAQ' },
        { name: 'Refund Policy' },
    ];

    const socialLinks = [
        { icon: FaInstagram, href: 'https://www.instagram.com/pumpasquashacademy', label: 'Instagram' },
        { icon: FaFacebook, href: 'https://www.facebook.com/pumpasquashacademy', label: 'Facebook' },
        { icon: FaWhatsapp, href: 'https://wa.me/601111989375', label: 'WhatsApp' },
    ];

    return (
        <footer className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500 border-t border-gray-200/50 dark:border-gray-800/50">
            {/* Premium Background with Glow Effects - Same as Heros */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* ✨ Background Glow */}
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />

                {/* Subtle premium texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-wall.png')] opacity-[0.04]" />

                {/* Additional gradient layers */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-green-50/20 via-transparent to-emerald-50/20 dark:from-gray-900/30 dark:via-transparent dark:to-gray-800/30" />
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-200/20 dark:bg-green-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-emerald-200/10 dark:bg-emerald-500/5 rounded-full blur-3xl" />

                {/* Decorative Grid Pattern - Dark Mode Support */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
                {/* Main Footer Grid - Fixed Spacing */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-12 lg:gap-14 xl:gap-16 pb-12 border-b border-gray-200/50 dark:border-gray-800/50">
                    {/* Brand Column */}
                    <div className="space-y-5">
                        <div>
                            {/* Brand with Navbar Style */}
                            <div className="leading-tight">
                                {/* MAIN BRAND */}
                                <div className="text-lg sm:text-lg md:text-xl lg:text-2xl font-extrabold uppercase tracking-wider">
                                    <span className="text-black dark:text-white">PUMPA</span>
                                    <span className="text-green-500"> SQUASH</span>
                                </div>

                                {/* SUB BRAND */}
                                <div className="text-lg sm:text-sm md:text-base lg:text-lg font-bold text-black dark:text-white uppercase tracking-wide">
                                    ACADEMY
                                </div>
                            </div>
                            <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 dark:from-emerald-400 dark:to-green-400 mt-3 rounded-full"></div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-[1.8] font-light tracking-wide max-w-sm">
                            Professional squash training academy dedicated to developing athletes of all levels with world-class coaching and facilities.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {socialLinks.map((social, idx) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-500 hover:text-white dark:hover:from-emerald-500 dark:hover:to-green-500 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links + Contact - Fixed Spacing */}
                    <div className="flex flex-col sm:flex-row gap-8 md:gap-12 lg:gap-16">
                        {/* Quick Links */}
                        <div className="space-y-5 flex-1">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 uppercase tracking-[0.1em]">
                                Quick Links
                            </h3>

                            <ul className="space-y-3">
                                {quickLinks.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 tracking-wide hover:translate-x-1 inline-block"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="space-y-5 flex-1">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 uppercase tracking-[0.1em]">
                                Contact
                            </h3>

                            <ul className="space-y-3.5 text-sm">
                                <li className="flex items-start gap-3.5 text-gray-600 dark:text-gray-300 group">
                                    <FaMapMarkerAlt className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                    <span className="font-medium tracking-wide leading-relaxed">123 Sports Complex, Kuala Lumpur, Malaysia</span>
                                </li>

                                <li className="flex items-center gap-3.5 text-gray-600 dark:text-gray-300 group">
                                    <FaPhone className="w-4 h-4 text-emerald-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                    <a href="tel:+601111989375" className="font-medium tracking-wide hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
                                        +60 11-1198 9375
                                    </a>
                                </li>

                                <li className="flex items-center gap-3.5 text-gray-600 dark:text-gray-300 group">
                                    <FaEnvelope className="w-4 h-4 text-emerald-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                    <a href="mailto:info@pumpasquash.com" className="font-medium tracking-wide hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200">
                                        info@pumpasquash.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Hours & CTA */}
                    <div className="space-y-5">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 uppercase tracking-[0.1em]">
                            Training Hours
                        </h3>
                        <div className="space-y-2.5 text-sm bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-200/30 dark:border-gray-700/30">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 dark:text-gray-300 font-medium tracking-wide">Monday - Friday</span>
                                <span className="text-gray-800 dark:text-gray-200 font-semibold tracking-wide">6:00 AM - 10:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 dark:text-gray-300 font-medium tracking-wide">Saturday</span>
                                <span className="text-gray-800 dark:text-gray-200 font-semibold tracking-wide">8:00 AM - 8:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 dark:text-gray-300 font-medium tracking-wide">Sunday</span>
                                <span className="text-gray-800 dark:text-gray-200 font-semibold tracking-wide">9:00 AM - 6:00 PM</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <a
                                href="/contact"
                                className="inline-flex w-full items-center justify-center px-4 py-3 text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-500 dark:to-emerald-500 rounded-lg hover:from-green-700 hover:to-emerald-700 dark:hover:from-green-600 dark:hover:to-emerald-600 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Book Trial Class
                                <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
                    <p className="text-xs font-light md:font-medium text-gray-500 dark:text-gray-400 tracking-wider text-center sm:text-left">
                        © {new Date().getFullYear()} <span className="font-bold text-gray-600 dark:text-gray-300">Pumba Squash Academy</span>. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-[10px] sm:text-xs">
                        {legalLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xs font-light md:font-medium text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 tracking-wider hover:tracking-widest whitespace-nowrap"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Accent Line - Same as Heros */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400/50 dark:via-green-500/30 to-transparent" />
        </footer>
    );
};

export default Footer;