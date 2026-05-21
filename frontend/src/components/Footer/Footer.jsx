// import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';


// const Footer = () => {
//   return (

//     <div>


//           <footer className="bg-gray-900 dark:bg-gray-950 border-t border-gray-800">
//               <div className="container mx-auto px-4 py-12">
//                   {/* Main Footer Content */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
//                       {/* Brand Column */}
//                       <div className="space-y-4">
//                           <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
//                               Pumba Squash Academy
//                           </h3>
//                           <p className="text-gray-400 text-sm leading-relaxed">
//                               Empowering athletes with world-class squash training, state-of-the-art facilities, and expert coaching.
//                           </p>
//                           <div className="flex space-x-4">
//                               <a
//                                   href="https://www.instagram.com/pumpasquashacademy"
//                                   className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-600 transition-all duration-300 group"
//                               >
//                                   <FaInstagram className="text-gray-400 group-hover:text-white transition-colors" />
//                               </a>
//                               <a
//                                   href="https://www.facebook.com/pumpasquashacademy"
//                                   className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-600 transition-all duration-300 group"
//                               >
//                                   <FaFacebook className="text-gray-400 group-hover:text-white transition-colors" />
//                               </a>
//                               <a
//                                   href="https://wa.me/601111989375"
//                                   className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-600 transition-all duration-300 group"
//                               >
//                                   <FaWhatsapp className="text-gray-400 group-hover:text-white transition-colors" />
//                               </a>
//                               <a
//                                   href="https://twitter.com/pumpasquash"
//                                   className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-600 transition-all duration-300 group"
//                               >
//                                   <FaTwitter className="text-gray-400 group-hover:text-white transition-colors" />
//                               </a>
//                           </div>
//                       </div>

//                       {/* Quick Links */}
//                       <div className="space-y-4">
//                           <h4 className="text-lg font-semibold text-white relative inline-block">
//                               Quick Links
//                               <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></span>
//                           </h4>
//                           <ul className="space-y-3">
//                               {['Home', 'About', 'Programs', 'Contact'].map((item) => (
//                                   <li key={item}>
//                                       <a
//                                           href={`/${item.toLowerCase()}`}
//                                           className="text-gray-400 hover:text-green-500 transition-colors duration-300 text-sm flex items-center gap-2 group"
//                                       >
//                                           <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
//                                           {item}
//                                       </a>
//                                   </li>
//                               ))}
//                           </ul>
//                       </div>

//                       {/* Contact Info */}
//                       <div className="space-y-4">
//                           <h4 className="text-lg font-semibold text-white relative inline-block">
//                               Contact Info
//                               <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></span>
//                           </h4>
//                           <ul className="space-y-3">
//                               <li className="flex items-start gap-3 text-gray-400 text-sm">
//                                   <FaMapMarkerAlt className="text-green-500 mt-0.5 flex-shrink-0" />
//                                   <span>123 Sports Complex, Kuala Lumpur, Malaysia</span>
//                               </li>
//                               <li className="flex items-center gap-3 text-gray-400 text-sm">
//                                   <FaPhone className="text-green-500 flex-shrink-0" />
//                                   <a href="tel:+601111989375" className="hover:text-green-500 transition-colors">
//                                       +60 11-1198 9375
//                                   </a>
//                               </li>
//                               <li className="flex items-center gap-3 text-gray-400 text-sm">
//                                   <FaEnvelope className="text-green-500 flex-shrink-0" />
//                                   <a href="mailto:info@pumpasquash.com" className="hover:text-green-500 transition-colors">
//                                       info@pumpasquash.com
//                                   </a>
//                               </li>
//                               <li className="flex items-center gap-3 text-gray-400 text-sm">
//                                   <FaClock className="text-green-500 flex-shrink-0" />
//                                   <span>Mon-Sat: 8AM - 10PM</span>
//                               </li>
//                           </ul>
//                       </div>

//                       {/* Newsletter / Hours */}
//                       <div className="space-y-4">
//                           <h4 className="text-lg font-semibold text-white relative inline-block">
//                               Training Hours
//                               <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></span>
//                           </h4>
//                           <div className="space-y-2 text-sm text-gray-400">
//                               <div className="flex justify-between">
//                                   <span>Monday - Friday:</span>
//                                   <span className="text-white">6:00 AM - 10:00 PM</span>
//                               </div>
//                               <div className="flex justify-between">
//                                   <span>Saturday:</span>
//                                   <span className="text-white">8:00 AM - 8:00 PM</span>
//                               </div>
//                               <div className="flex justify-between">
//                                   <span>Sunday:</span>
//                                   <span className="text-white">9:00 AM - 6:00 PM</span>
//                               </div>
//                           </div>
//                           <div className="pt-4">
//                               <a
//                                   href="/contact"
//                                   className="inline-block px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:-translate-y-0.5"
//                               >
//                                   Book a Trial
//                               </a>
//                           </div>
//                       </div>
//                   </div>

//                   {/* Bottom Bar */}
//                   <div className="pt-8 mt-8 border-t border-gray-800">
//                       <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//                           <p className="text-gray-500 text-sm">
//                               © {new Date().getFullYear()} Pumba Squash Academy. All rights reserved.
//                           </p>
//                           <div className="flex gap-6 text-sm">
//                               <a href="/privacy" className="text-gray-500 hover:text-green-500 transition-colors">
//                                   Privacy Policy
//                               </a>
//                               <a href="/terms" className="text-gray-500 hover:text-green-500 transition-colors">
//                                   Terms of Service
//                               </a>
//                               <a href="/faq" className="text-gray-500 hover:text-green-500 transition-colors">
//                                   FAQ
//                               </a>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </footer>





//     </div>
//   )
// }

// export default Footer




















// import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaArrowUp, FaYoutube, FaLinkedin } from 'react-icons/fa';
// import { useState, useEffect } from 'react';

// const Footer = () => {
//     const [showScrollTop, setShowScrollTop] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setShowScrollTop(window.scrollY > 400);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     const quickLinks = [
//         { name: 'Home', href: '/' },
//         { name: 'About Us', href: '/about' },
//         { name: 'Programs', href: '/programs' },
//         { name: 'Coaching Staff', href: '/coaches' },
//         { name: 'Facilities', href: '/facilities' },
//         { name: 'Contact', href: '/contact' },
//     ];

//     const legalLinks = [
//         { name: 'Privacy Policy', href: '/privacy' },
//         { name: 'Terms of Service', href: '/terms' },
//         { name: 'FAQ', href: '/faq' },
//         { name: 'Refund Policy', href: '/refund' },
//     ];

//     const socialLinks = [
//         { icon: FaInstagram, href: 'https://www.instagram.com/pumpasquashacademy', label: 'Instagram', color: 'hover:bg-pink-600' },
//         { icon: FaFacebook, href: 'https://www.facebook.com/pumpasquashacademy', label: 'Facebook', color: 'hover:bg-blue-600' },
//         { icon: FaWhatsapp, href: 'https://wa.me/601111989375', label: 'WhatsApp', color: 'hover:bg-green-500' },
//         { icon: FaTwitter, href: 'https://twitter.com/pumpasquash', label: 'Twitter', color: 'hover:bg-sky-500' },
//         { icon: FaYoutube, href: 'https://youtube.com/@pumpasquash', label: 'YouTube', color: 'hover:bg-red-600' },
//         { icon: FaLinkedin, href: 'https://linkedin.com/company/pumpasquash', label: 'LinkedIn', color: 'hover:bg-blue-700' },
//     ];

//     return (
//         <footer className="relative bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
//             {/* Scroll to Top Button */}
//             {showScrollTop && (
//                 <button
//                     onClick={scrollToTop}
//                     className="fixed bottom-8 right-8 z-50 p-3.5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1 text-white group"
//                     aria-label="Scroll to top"
//                 >
//                     <FaArrowUp className="w-4 h-4 group-hover:animate-bounce" />
//                 </button>
//             )}

//             <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
//                 {/* Main Footer Content */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">

//                     {/* Brand Column */}
//                     <div className="space-y-6">
//                         <div>
//                             <h3 className="text-2xl lg:text-3xl font-serif font-bold tracking-tight">
//                                 <span className="bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-500 bg-clip-text text-transparent">
//                                     Pumba Squash
//                                 </span>
//                                 <br />
//                                 <span className="text-gray-700 dark:text-gray-300 text-xl lg:text-2xl font-light tracking-wide">
//                                     Academy
//                                 </span>
//                             </h3>
//                             <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 mt-4 rounded-full"></div>
//                         </div>
//                         <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light">
//                             Empowering athletes with world-class squash training, state-of-the-art facilities, and expert coaching.
//                             Where champions are forged and potential is realized.
//                         </p>

//                         {/* Social Links */}
//                         <div className="flex flex-wrap gap-2 pt-2">
//                             {socialLinks.map((social, idx) => {
//                                 const Icon = social.icon;
//                                 return (
//                                     <a
//                                         key={idx}
//                                         href={social.href}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className={`w-9 h-9 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 group border border-gray-200 dark:border-gray-700 hover:border-transparent`}
//                                         aria-label={social.label}
//                                     >
//                                         <Icon className="text-gray-500 dark:text-gray-400 group-hover:text-white transition-colors text-sm" />
//                                     </a>
//                                 );
//                             })}
//                         </div>
//                     </div>

//                     {/* Quick Links */}
//                     <div className="space-y-6">
//                         <div>
//                             <h4 className="text-base font-semibold tracking-wide text-gray-800 dark:text-gray-200 relative inline-block">
//                                 Quick Links
//                                 <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></span>
//                             </h4>
//                         </div>
//                         <ul className="space-y-3">
//                             {quickLinks.map((item) => (
//                                 <li key={item.name}>
//                                     <a
//                                         href={item.href}
//                                         className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 text-sm font-light flex items-center gap-2 group"
//                                     >
//                                         <span className="w-1 h-1 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-1.5"></span>
//                                         {item.name}
//                                     </a>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Contact Info */}
//                     <div className="space-y-6">
//                         <div>
//                             <h4 className="text-base font-semibold tracking-wide text-gray-800 dark:text-gray-200 relative inline-block">
//                                 Contact Info
//                                 <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></span>
//                             </h4>
//                         </div>
//                         <ul className="space-y-4">
//                             <li className="flex items-start gap-3 text-gray-500 dark:text-gray-400 text-sm font-light">
//                                 <FaMapMarkerAlt className="text-emerald-500 mt-0.5 flex-shrink-0 text-sm" />
//                                 <span className="leading-relaxed">123 Sports Complex,<br />Kuala Lumpur, Malaysia</span>
//                             </li>
//                             <li className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm font-light">
//                                 <FaPhone className="text-emerald-500 flex-shrink-0 text-sm" />
//                                 <a href="tel:+601111989375" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
//                                     +60 11-1198 9375
//                                 </a>
//                             </li>
//                             <li className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm font-light">
//                                 <FaEnvelope className="text-emerald-500 flex-shrink-0 text-sm" />
//                                 <a href="mailto:info@pumpasquash.com" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
//                                     info@pumpasquash.com
//                                 </a>
//                             </li>
//                             <li className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm font-light">
//                                 <FaClock className="text-emerald-500 flex-shrink-0 text-sm" />
//                                 <span>Mon-Sat: 8AM - 10PM</span>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Training Hours & CTA */}
//                     <div className="space-y-6">
//                         <div>
//                             <h4 className="text-base font-semibold tracking-wide text-gray-800 dark:text-gray-200 relative inline-block">
//                                 Training Hours
//                                 <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></span>
//                             </h4>
//                         </div>
//                         <div className="space-y-2.5 text-sm font-light">
//                             <div className="flex justify-between items-center py-1.5 border-b border-gray-100 dark:border-gray-800">
//                                 <span className="text-gray-500 dark:text-gray-500">Monday - Friday</span>
//                                 <span className="text-gray-700 dark:text-gray-300 font-medium">6:00 AM - 10:00 PM</span>
//                             </div>
//                             <div className="flex justify-between items-center py-1.5 border-b border-gray-100 dark:border-gray-800">
//                                 <span className="text-gray-500 dark:text-gray-500">Saturday</span>
//                                 <span className="text-gray-700 dark:text-gray-300 font-medium">8:00 AM - 8:00 PM</span>
//                             </div>
//                             <div className="flex justify-between items-center py-1.5">
//                                 <span className="text-gray-500 dark:text-gray-500">Sunday</span>
//                                 <span className="text-gray-700 dark:text-gray-300 font-medium">9:00 AM - 6:00 PM</span>
//                             </div>
//                         </div>

//                         {/* CTA Button */}
//                         <div className="pt-4">
//                             <a
//                                 href="/contact"
//                                 className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-sm font-medium tracking-wide text-white bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5"
//                             >
//                                 <span className="relative z-10 flex items-center gap-2">
//                                     Book a Trial Class
//                                     <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                                     </svg>
//                                 </span>
//                                 <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Divider */}
//                 <div className="relative my-8">
//                     <div className="absolute inset-0 flex items-center">
//                         <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
//                     </div>
//                     <div className="relative flex justify-center">
//                         <div className="px-4 bg-white dark:bg-gray-900">
//                             <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Bar */}
//                 <div className="pt-6">
//                     <div className="flex flex-col md:flex-row justify-between items-center gap-5">
//                         <p className="text-gray-400 dark:text-gray-600 text-xs font-light tracking-wide">
//                             © {new Date().getFullYear()} Pumba Squash Academy. All rights reserved.
//                             <span className="hidden sm:inline mx-2">•</span>
//                             <br className="sm:hidden" />
//                             <span className="text-gray-400 dark:text-gray-600">Crafted with passion for the sport</span>
//                         </p>

//                         {/* Legal Links */}
//                         <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-light">
//                             {legalLinks.map((link) => (
//                                 <a
//                                     key={link.name}
//                                     href={link.href}
//                                     className="text-gray-400 dark:text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
//                                 >
//                                     {link.name}
//                                 </a>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Decorative gradient lines */}
//             <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent w-full"></div>
//             <div className="h-0.5 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent w-full"></div>
//         </footer>
//     );
// };

// export default Footer;




















import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaArrowUp, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Programs', href: '/programs' },
        { name: 'Coaching Staff', href: '/coaches' },
        { name: 'Facilities', href: '/facilities' },
        { name: 'Contact', href: '/contact' },
    ];

    const legalLinks = [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Refund Policy', href: '/refund' },
    ];

    const socialLinks = [
        { icon: FaInstagram, href: 'https://www.instagram.com/pumpasquashacademy', label: 'Instagram', color: 'hover:bg-pink-600' },
        { icon: FaFacebook, href: 'https://www.facebook.com/pumpasquashacademy', label: 'Facebook', color: 'hover:bg-blue-600' },
        { icon: FaWhatsapp, href: 'https://wa.me/601111989375', label: 'WhatsApp', color: 'hover:bg-green-500' },
        { icon: FaTwitter, href: 'https://twitter.com/pumpasquash', label: 'Twitter', color: 'hover:bg-sky-500' },
        { icon: FaYoutube, href: 'https://youtube.com/@pumpasquash', label: 'YouTube', color: 'hover:bg-red-600' },
        { icon: FaLinkedin, href: 'https://linkedin.com/company/pumpasquash', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    ];

    return (
        <footer className="relative bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-3.5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full shadow-lg hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1 text-white group"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp className="w-4 h-4 group-hover:animate-bounce" />
                </button>
            )}

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-serif font-bold tracking-tight">
                                <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
                                    Pumba Squash
                                </span>
                                <br />
                                <span className="text-gray-800 dark:text-gray-100 text-xl lg:text-2xl font-light tracking-wide">
                                    Academy
                                </span>
                            </h3>
                            <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 mt-4 rounded-full"></div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-normal">
                            Empowering athletes with world-class squash training, state-of-the-art facilities, and expert coaching.
                            Where champions are forged and potential is realized.
                        </p>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {socialLinks.map((social, idx) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-9 h-9 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 group border border-gray-200 dark:border-gray-700 hover:border-transparent`}
                                        aria-label={social.label}
                                    >
                                        <Icon className="text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors text-sm" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-base font-semibold tracking-wide text-gray-900 dark:text-white relative inline-block">
                                Quick Links
                                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></span>
                            </h4>
                        </div>
                        <ul className="space-y-3">
                            {quickLinks.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 text-sm font-normal flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-1.5"></span>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-base font-semibold tracking-wide text-gray-900 dark:text-white relative inline-block">
                                Contact Info
                                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></span>
                            </h4>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm font-normal">
                                <FaMapMarkerAlt className="text-emerald-500 mt-0.5 flex-shrink-0 text-sm" />
                                <span className="leading-relaxed">123 Sports Complex,<br />Kuala Lumpur, Malaysia</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm font-normal">
                                <FaPhone className="text-emerald-500 flex-shrink-0 text-sm" />
                                <a href="tel:+601111989375" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                                    +60 11-1198 9375
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm font-normal">
                                <FaEnvelope className="text-emerald-500 flex-shrink-0 text-sm" />
                                <a href="mailto:info@pumpasquash.com" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                                    info@pumpasquash.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm font-normal">
                                <FaClock className="text-emerald-500 flex-shrink-0 text-sm" />
                                <span>Mon-Sat: 8AM - 10PM</span>
                            </li>
                        </ul>
                    </div>

                    {/* Training Hours & CTA */}
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-base font-semibold tracking-wide text-gray-900 dark:text-white relative inline-block">
                                Training Hours
                                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></span>
                            </h4>
                        </div>
                        <div className="space-y-2.5 text-sm font-normal">
                            <div className="flex justify-between items-center py-1.5 border-b border-gray-100 dark:border-gray-800">
                                <span className="text-gray-600 dark:text-gray-400">Monday - Friday</span>
                                <span className="text-gray-800 dark:text-gray-200 font-medium">6:00 AM - 10:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center py-1.5 border-b border-gray-100 dark:border-gray-800">
                                <span className="text-gray-600 dark:text-gray-400">Saturday</span>
                                <span className="text-gray-800 dark:text-gray-200 font-medium">8:00 AM - 8:00 PM</span>
                            </div>
                            <div className="flex justify-between items-center py-1.5">
                                <span className="text-gray-600 dark:text-gray-400">Sunday</span>
                                <span className="text-gray-800 dark:text-gray-200 font-medium">9:00 AM - 6:00 PM</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <a
                                href="/contact"
                                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Book a Trial Class
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-100 dark:border-gray-800"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="px-4 bg-white dark:bg-gray-900">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                        <p className="text-gray-500 dark:text-gray-500 text-xs font-normal tracking-wide">
                            © {new Date().getFullYear()} Pumba Squash Academy. All rights reserved.
                            <span className="hidden sm:inline mx-2">•</span>
                            <br className="sm:hidden" />
                            <span className="text-gray-500 dark:text-gray-500">Crafted with passion for the sport</span>
                        </p>

                        {/* Legal Links */}
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-normal">
                            {legalLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-500 dark:text-gray-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative gradient lines */}
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent w-full"></div>
            <div className="h-0.5 bg-gradient-to-r from-transparent via-emerald-500/15 to-transparent w-full"></div>
        </footer>
    );
};

export default Footer;