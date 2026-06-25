// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaArrowRight, FaPlay, FaTrophy, FaShieldAlt, FaHeartbeat, FaStar, FaUsers, FaClock, FaCheckCircle, FaExpand, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import png2 from '../../assets/pic2.jpg';
// import png1 from '../../assets/pic1.jpg';
// import { useNavigate } from 'react-router-dom';

// const Heros = () => {
//     const navigate = useNavigate();
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [currentImage, setCurrentImage] = useState(0);

//     // Sample gallery images - you can add more images here
//     const galleryImages = [
//         png2, png1
//         // Add more images here as needed
//         // png3, png4, etc.
//     ];

//     const openModal = (e) => {
//         e.stopPropagation();
//         setIsModalOpen(true);
//         document.body.style.overflow = 'hidden';
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         document.body.style.overflow = 'unset';
//     };

//     const nextImage = (e) => {
//         e.stopPropagation();
//         setCurrentImage((prev) => (prev + 1) % galleryImages.length);
//     };

//     const prevImage = (e) => {
//         e.stopPropagation();
//         setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
//     };

//     // Handle keyboard events
//     React.useEffect(() => {
//         const handleKeyDown = (e) => {
//             if (isModalOpen) {
//                 if (e.key === 'Escape') closeModal();
//                 if (e.key === 'ArrowRight') {
//                     setCurrentImage((prev) => (prev + 1) % galleryImages.length);
//                 }
//                 if (e.key === 'ArrowLeft') {
//                     setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
//                 }
//             }
//         };
//         window.addEventListener('keydown', handleKeyDown);
//         return () => window.removeEventListener('keydown', handleKeyDown);
//     }, [isModalOpen]);

//     // Prevent body scroll when modal is open
//     React.useEffect(() => {
//         if (isModalOpen) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'unset';
//         }
//         return () => {
//             document.body.style.overflow = 'unset';
//         };
//     }, [isModalOpen]);

//     return (
//         <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
//             {/* Premium Background with Glow Effects - Updated */}
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

//             <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 py-12 lg:py-16">
//                 <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-start lg:items-center">
//                     {/* Left Column - Content */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
//                         className="space-y-6 sm:space-y-8 lg:space-y-10 pt-8 lg:pt-8"
//                     >
//                         {/* Status Badge - Dark Mode Support */}
//                         <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-green-200/50 dark:border-green-800/50 shadow-lg">
//                             <span className="relative flex h-2.5 w-2.5">
//                                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
//                                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
//                             </span>
//                             <span className="text-xs sm:text-sm font-semibold text-green-700 dark:text-green-400 tracking-wide">
//                                 #1 Squash Academy in the Region
//                             </span>
//                         </div>

//                         {/* Main Heading - Dark Mode Support */}
//                         <div className="space-y-3 sm:space-y-4">
//                             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
//                                 <span className="block text-gray-900 dark:text-white">Develop Skills.</span>
//                                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 dark:from-green-400 dark:via-emerald-400 dark:to-green-400">
//                                     Build Character.
//                                 </span>
//                                 <span className="block text-gray-900 dark:text-white">Achieve Greatness.</span>
//                             </h1>
//                         </div>

//                         {/* Description - Dark Mode Support */}
//                         <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
//                             At Pumpa Squash Academy, success is measured not only by trophies,
//                             but by confidence, resilience, discipline, and a lifelong love for
//                             sport. Through expert coaching and a supportive environment, we
//                             help every player unlock their full potential on and off the court.
//                         </p>

//                         {/* CTA Buttons - Dark Mode Support */}
//                         {/* <div className="flex flex-wrap items-center gap-4 sm:gap-5">
//                             <motion.button
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className="group relative inline-flex items-center gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-500 dark:to-emerald-400 text-white font-semibold text-base sm:text-lg shadow-xl shadow-green-500/25 dark:shadow-green-500/20 hover:shadow-green-500/40 dark:hover:shadow-green-500/30 transition-all duration-300 overflow-hidden"
//                             >
//                                 <span className="relative z-10">Start Your Journey</span>
//                                 <FaArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-200" />
//                                 <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-600 dark:from-green-600 dark:to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                             </motion.button>

//                             <motion.button
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-200 font-semibold text-base sm:text-lg hover:border-green-400 dark:hover:border-green-500 hover:text-green-700 dark:hover:text-green-400 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
//                             >
//                                 <FaPlay className="text-green-500 dark:text-green-400" />
//                                 Watch Our Story
//                             </motion.button>
//                         </div> */}

//                         <div className="flex flex-wrap items-center gap-4 sm:gap-5">
//                             <motion.button
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 onClick={() => navigate('/contact')}
//                                 className="group relative inline-flex items-center gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-500 dark:to-emerald-400 text-white font-semibold text-base sm:text-lg shadow-xl shadow-green-500/25 dark:shadow-green-500/20 hover:shadow-green-500/40 dark:hover:shadow-green-500/30 transition-all duration-300 overflow-hidden"
//                             >
//                                 <span className="relative z-10">Start Your Journey</span>
//                                 <FaArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-200" />
//                                 <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-600 dark:from-green-600 dark:to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                             </motion.button>

//                             <motion.button
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 onClick={() => navigate('/about')}
//                                 className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-200 font-semibold text-base sm:text-lg hover:border-green-400 dark:hover:border-green-500 hover:text-green-700 dark:hover:text-green-400 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
//                             >
//                                 <FaPlay className="text-green-500 dark:text-green-400" />
//                                 Watch Our Story
//                             </motion.button>
//                         </div>




//                         {/* Trust Indicators - Dark Mode Support */}
//                         <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
//                             <div className="flex items-center gap-3">
//                                 <div className="flex text-yellow-400 dark:text-yellow-500">
//                                     {[...Array(5)].map((_, i) => (
//                                         <FaStar key={i} className={i < 4 ? 'text-yellow-400 dark:text-yellow-500' : 'text-gray-300 dark:text-gray-600'} />
//                                     ))}
//                                 </div>
//                                 <div>
//                                     <div className="font-bold text-gray-900 dark:text-white">4.9/5</div>
//                                     <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Rating</div>
//                                 </div>
//                             </div>

//                             <div className="flex items-center gap-3">
//                                 <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
//                                     <FaTrophy className="text-base sm:text-xl" />
//                                 </div>
//                                 <div>
//                                     <div className="font-bold text-gray-900 dark:text-white">15+</div>
//                                     <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Tournament Wins</div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Feature Highlights - Dark Mode Support */}
//                         <div className="grid grid-cols-2 gap-3 sm:gap-4 pb-5 md:pb-0">
//                             {[
//                                 { icon: FaCheckCircle, label: 'Expert Coaches', color: 'text-green-600 dark:text-green-400' },
//                                 { icon: FaCheckCircle, label: 'Modern Facilities', color: 'text-green-600 dark:text-green-400' },
//                                 { icon: FaCheckCircle, label: 'Personalized Plans', color: 'text-green-600 dark:text-green-400' },
//                                 { icon: FaCheckCircle, label: 'Tournament Prep', color: 'text-green-600 dark:text-green-400' },
//                             ].map((item, idx) => (
//                                 <div key={idx} className="flex items-center gap-2 sm:gap-2.5">
//                                     <item.icon className={`${item.color} text-xs sm:text-sm`} />
//                                     <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </motion.div>

//                     {/* Right Column - Professional Image Section */}
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.95 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
//                         className="relative flex justify-center items-start -mt-8 sm:-mt-12 lg:-mt-18 xl:-mt-20"
//                     >
//                         {/* Enhanced Background Orbs - Dark Mode Support */}
//                         <div className="absolute w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] bg-gradient-to-br from-green-400/15 dark:from-green-400/10 to-emerald-300/10 dark:to-emerald-300/5 rounded-full blur-3xl -z-10 animate-pulse" />
//                         <div className="absolute w-[300px] sm:w-[350px] lg:w-[400px] h-[300px] sm:h-[350px] lg:h-[400px] bg-green-500/8 dark:bg-green-500/5 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />

//                         {/* Decorative Rings - Dark Mode Support */}
//                         <div className="absolute inset-0 flex items-center justify-center -z-10">
//                             <div className="w-[90%] h-[90%] border border-green-200/20 dark:border-green-500/10 rounded-full animate-spin-slow" />
//                             <div className="absolute w-[80%] h-[80%] border border-emerald-200/15 dark:border-emerald-500/10 rounded-full animate-spin-slow-reverse" />
//                         </div>

//                         {/* Main Image Container */}
//                         <div className="relative w-full max-w-2xl lg:max-w-3xl">
//                             <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-green-500/20 dark:shadow-green-500/10 ring-2 ring-white/30 dark:ring-gray-700/30 bg-white dark:bg-gray-800">
//                                 {/* Image with Professional Framing */}
//                                 <div className="relative aspect-[4/3] sm:aspect-[4/3.5] group/card">
//                                     <img
//                                         src={png2}
//                                         alt="Pumpa Squash Academy - Professional Training"
//                                         className="w-full h-full object-cover transform transition-transform duration-1000 hover:scale-110"
//                                     />

//                                     {/* Professional Gradient Overlay - Dark Mode Support */}
//                                     <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 dark:from-black/60 via-transparent to-transparent pointer-events-none" />
//                                     <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 dark:from-black/20 via-transparent to-transparent pointer-events-none" />

//                                     {/* Corner Accents - Dark Mode Support */}
//                                     <div className="absolute top-0 left-0 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 border-t-4 border-l-4 border-green-400/60 dark:border-green-500/40 rounded-tl-2xl pointer-events-none" />
//                                     <div className="absolute top-0 right-0 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 border-t-4 border-r-4 border-green-400/60 dark:border-green-500/40 rounded-tr-2xl pointer-events-none" />
//                                     <div className="absolute bottom-0 left-0 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 border-b-4 border-l-4 border-green-400/60 dark:border-green-500/40 rounded-bl-2xl pointer-events-none" />
//                                     <div className="absolute bottom-0 right-0 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 border-b-4 border-r-4 border-green-400/60 dark:border-green-500/40 rounded-br-2xl pointer-events-none" />

//                                     {/* Action Button Overlay - Bottom Right */}
//                                     <motion.button
//                                         whileHover={{ scale: 1.1 }}
//                                         whileTap={{ scale: 0.95 }}
//                                         onClick={openModal}
//                                         className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-full p-3 sm:p-4 shadow-2xl shadow-black/30 dark:shadow-black/50 hover:shadow-green-500/30 dark:hover:shadow-green-500/20 transition-all duration-300 group z-30 cursor-pointer"
//                                         type="button"
//                                     >
//                                         <FaExpand className="text-xl sm:text-2xl text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300" />
//                                     </motion.button>

//                                     {/* Clickable overlay for the entire image */}
//                                     <div
//                                         onClick={openModal}
//                                         className="absolute inset-0 cursor-pointer z-20"
//                                         role="button"
//                                         tabIndex={0}
//                                         aria-label="View full image"
//                                     />
//                                 </div>

//                                 {/* Professional Image Caption - Dark Mode Support */}
//                                 <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none">
//                                     <p className="text-white text-xs sm:text-sm font-medium tracking-wide">
//                                         Elite Training Facility • Professional Coaching
//                                     </p>
//                                 </div>
//                             </div>

//                             {/* Floating Cards - Dark Mode Support */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20, x: 20 }}
//                                 animate={{ opacity: 1, y: 0, x: 0 }}
//                                 transition={{ delay: 0.3 }}
//                                 className="absolute -top-4 sm:-top-14 -right-4 sm:-right-8 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 shadow-2xl shadow-green-500/20 dark:shadow-green-500/10 border border-white/50 dark:border-gray-700/50 z-20 min-w-[130px] sm:min-w-[160px] pointer-events-none"
//                             >
//                                 <div className="flex items-center gap-3 sm:gap-4">
//                                     <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 dark:from-green-500 dark:to-emerald-400 flex items-center justify-center text-white shadow-lg shadow-green-500/30 dark:shadow-green-500/20">
//                                         <FaShieldAlt className="text-xl sm:text-2xl" />
//                                     </div>
//                                     <div>
//                                         <div className="text-[10px] sm:text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider">Trusted</div>
//                                         <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">5+ Years</div>
//                                         <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5">of Excellence</div>
//                                     </div>
//                                 </div>
//                             </motion.div>

//                             <motion.div
//                                 initial={{ opacity: 0, y: 20, x: -20 }}
//                                 animate={{ opacity: 1, y: 0, x: 0 }}
//                                 transition={{ delay: 0.4 }}
//                                 className="absolute -bottom-6 sm:-bottom-8 -left-4 sm:-left-8 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 shadow-2xl shadow-emerald-500/20 dark:shadow-emerald-500/10 border border-white/50 dark:border-gray-700/50 z-20 min-w-[130px] sm:min-w-[160px] pointer-events-none"
//                             >
//                                 <div className="flex items-center gap-3 sm:gap-4">
//                                     <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 dark:from-emerald-400 dark:to-green-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 dark:shadow-emerald-500/20">
//                                         <FaHeartbeat className="text-xl sm:text-2xl" />
//                                     </div>
//                                     <div>
//                                         <div className="text-[10px] sm:text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Holistic</div>
//                                         <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Mind + Body</div>
//                                         <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5">Complete Growth</div>
//                                     </div>
//                                 </div>
//                             </motion.div>

//                             {/* Achievement Card - Dark Mode Support */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.6 }}
//                                 className="absolute top-1/4 -left-6 sm:-left-10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-2xl shadow-green-500/15 dark:shadow-green-500/10 border border-white/50 dark:border-gray-700/50 z-20 hidden lg:block pointer-events-none"
//                             >
//                                 <div className="flex items-center gap-2 sm:gap-3">
//                                     <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 dark:from-yellow-500 dark:to-orange-500 flex items-center justify-center text-white shadow-lg shadow-yellow-500/30 dark:shadow-yellow-500/20">
//                                         <FaTrophy className="text-lg sm:text-xl" />
//                                     </div>
//                                     <div>
//                                         <div className="text-[10px] sm:text-xs font-semibold text-yellow-600 dark:text-yellow-400 uppercase tracking-wider">Awards</div>
//                                         <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">15+</div>
//                                         <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Championships</div>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </div>

//             {/* Bottom Accent Line - Dark Mode Support */}
//             <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400/50 dark:via-green-500/30 to-transparent" />

//             {/* Full Image Modal/Lightbox - Dark Mode Support */}
//             <AnimatePresence>
//                 {isModalOpen && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 dark:bg-black/98 backdrop-blur-xl"
//                         onClick={closeModal}
//                     >
//                         {/* Close Button */}
//                         <motion.button
//                             initial={{ scale: 0 }}
//                             animate={{ scale: 1 }}
//                             exit={{ scale: 0 }}
//                             onClick={closeModal}
//                             className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 transition-all duration-300"
//                             type="button"
//                         >
//                             <FaTimes className="text-xl sm:text-2xl" />
//                         </motion.button>

//                         {/* Image Counter */}
//                         <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 z-10 bg-black/50 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
//                             {currentImage + 1} / {galleryImages.length}
//                         </div>

//                         {/* Navigation Buttons */}
//                         {galleryImages.length > 1 && (
//                             <>
//                                 <motion.button
//                                     initial={{ x: -20, opacity: 0 }}
//                                     animate={{ x: 0, opacity: 1 }}
//                                     exit={{ x: -20, opacity: 0 }}
//                                     onClick={prevImage}
//                                     className="absolute left-3 sm:left-6 md:left-8 z-10 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 md:p-4 transition-all duration-300"
//                                     type="button"
//                                 >
//                                     <FaChevronLeft className="text-lg sm:text-xl md:text-2xl" />
//                                 </motion.button>

//                                 <motion.button
//                                     initial={{ x: 20, opacity: 0 }}
//                                     animate={{ x: 0, opacity: 1 }}
//                                     exit={{ x: 20, opacity: 0 }}
//                                     onClick={nextImage}
//                                     className="absolute right-3 sm:right-6 md:right-8 z-10 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 md:p-4 transition-all duration-300"
//                                     type="button"
//                                 >
//                                     <FaChevronRight className="text-lg sm:text-xl md:text-2xl" />
//                                 </motion.button>
//                             </>
//                         )}

//                         {/* Main Image */}
//                         <motion.div
//                             initial={{ scale: 0.8, opacity: 0 }}
//                             animate={{ scale: 1, opacity: 1 }}
//                             exit={{ scale: 0.8, opacity: 0 }}
//                             transition={{ type: 'spring', damping: 25, stiffness: 300 }}
//                             className="relative max-w-[95vw] sm:max-w-[90vw] max-h-[80vh] sm:max-h-[85vh]"
//                             onClick={(e) => e.stopPropagation()}
//                         >
//                             <img
//                                 src={galleryImages[currentImage]}
//                                 alt={`Academy Gallery ${currentImage + 1}`}
//                                 className="max-w-full max-h-[80vh] sm:max-h-[85vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl"
//                             />

//                             {/* Image Info Overlay */}
//                             <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-xl sm:rounded-b-2xl pointer-events-none">
//                                 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-2 sm:gap-0">
//                                     <div>
//                                         <p className="text-base sm:text-lg font-semibold">Pumpa Squash Academy</p>
//                                         <p className="text-xs sm:text-sm text-white/70">Elite Training Facility • Professional Coaching</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </section>
//     );
// };

// export default Heros;














import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaPlay, FaTrophy, FaShieldAlt, FaHeartbeat, FaStar, FaUsers, FaClock, FaCheckCircle, FaExpand, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import png2 from '../../assets/pic2.jpg';
import png1 from '../../assets/pic1.jpg';
import { useNavigate } from 'react-router-dom';

const Heros = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    // Sample gallery images - you can add more images here
    const galleryImages = [
        png2, png1
        // Add more images here as needed
        // png3, png4, etc.
    ];

    const openModal = (e) => {
        e.stopPropagation();
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    // Handle keyboard events
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (isModalOpen) {
                if (e.key === 'Escape') closeModal();
                if (e.key === 'ArrowRight') {
                    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
                }
                if (e.key === 'ArrowLeft') {
                    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isModalOpen]);

    // Prevent body scroll when modal is open
    React.useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
            {/* Premium Background with Glow Effects - Updated */}
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

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 py-12 lg:py-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-start lg:items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                        className="space-y-6 sm:space-y-8 lg:space-y-10 pt-8 lg:pt-8"
                    >
                        {/* Status Badge - Dark Mode Support */}
                        <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-green-200/50 dark:border-green-800/50 shadow-lg">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                            </span>
                            <span className="text-xs sm:text-sm font-semibold text-green-700 dark:text-green-400 tracking-[0.1em] uppercase">
                                #1 Squash Academy in the Region
                            </span>
                        </div>

                        {/* Main Heading - Dark Mode Support */}
                        <div className="space-y-3 sm:space-y-4">
                            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
                                <span className="block text-gray-900 dark:text-white font-display">Develop Skills.</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 dark:from-green-400 dark:via-emerald-400 dark:to-green-400 font-display">
                                    Build Character.
                                </span>
                                <span className="block text-gray-900 dark:text-white font-display">Achieve Greatness.</span>
                            </h1>
                        </div>

                        {/* Description - Dark Mode Support */}
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-[1.8] max-w-lg font-light tracking-wide">
                            At Pumpa Squash Academy, success is measured not only by trophies,
                            but by confidence, resilience, discipline, and a lifelong love for
                            sport. Through expert coaching and a supportive environment, we
                            help every player unlock their full potential on and off the court.
                        </p>

                        {/* CTA Buttons - Dark Mode Support */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/contact')}
                                className="group relative inline-flex items-center gap-3 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 dark:from-green-500 dark:to-emerald-400 text-white font-semibold text-base sm:text-lg shadow-xl shadow-green-500/25 dark:shadow-green-500/20 hover:shadow-green-500/40 dark:hover:shadow-green-500/30 transition-all duration-300 overflow-hidden tracking-wide"
                            >
                                <span className="relative z-10">Start Your Journey</span>
                                <FaArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-200" />
                                <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-600 dark:from-green-600 dark:to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/about')}
                                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-200 font-semibold text-base sm:text-lg hover:border-green-400 dark:hover:border-green-500 hover:text-green-700 dark:hover:text-green-400 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 tracking-wide"
                            >
                                <FaPlay className="text-green-500 dark:text-green-400" />
                                Watch Our Story
                            </motion.button>
                        </div>

                        {/* Trust Indicators - Dark Mode Support */}
                        <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                            <div className="flex items-center gap-3">
                                <div className="flex text-yellow-400 dark:text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={i < 4 ? 'text-yellow-400 dark:text-yellow-500' : 'text-gray-300 dark:text-gray-600'} />
                                    ))}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 dark:text-white text-sm tracking-tight">4.9/5</div>
                                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-light tracking-wide">Rating</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                    <FaTrophy className="text-base sm:text-xl" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 dark:text-white text-sm tracking-tight">15+</div>
                                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-light tracking-wide">Tournament Wins</div>
                                </div>
                            </div>
                        </div>

                        {/* Feature Highlights - Dark Mode Support */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 pb-5 md:pb-0">
                            {[
                                { icon: FaCheckCircle, label: 'Expert Coaches', color: 'text-green-600 dark:text-green-400' },
                                { icon: FaCheckCircle, label: 'Modern Facilities', color: 'text-green-600 dark:text-green-400' },
                                { icon: FaCheckCircle, label: 'Personalized Plans', color: 'text-green-600 dark:text-green-400' },
                                { icon: FaCheckCircle, label: 'Tournament Prep', color: 'text-green-600 dark:text-green-400' },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 sm:gap-2.5">
                                    <item.icon className={`${item.color} text-xs sm:text-sm`} />
                                    <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wide">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Professional Image Section */}
                  





                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                        className="relative flex justify-center items-start -mt-8 sm:-mt-12 lg:-mt-18 xl:-mt-20"
                    >
                        {/* Enhanced Background Orbs - Dark Mode Support */}
                        <div className="absolute w-[400px] sm:w-[500px] lg:w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] bg-gradient-to-br from-green-400/15 dark:from-green-400/10 to-emerald-300/10 dark:to-emerald-300/5 rounded-full blur-3xl -z-10 animate-pulse" />
                        <div className="absolute w-[300px] sm:w-[350px] lg:w-[400px] h-[300px] sm:h-[350px] lg:h-[400px] bg-green-500/8 dark:bg-green-500/5 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />

                        {/* Decorative Rings - Dark Mode Support */}
                        <div className="absolute inset-0 flex items-center justify-center -z-10">
                            <div className="w-[90%] h-[90%] border border-green-200/20 dark:border-green-500/10 rounded-full animate-spin-slow" />
                            <div className="absolute w-[80%] h-[80%] border border-emerald-200/15 dark:border-emerald-500/10 rounded-full animate-spin-slow-reverse" />
                        </div>

                        {/* Main Image Container */}
                        <div className="relative w-full max-w-2xl lg:max-w-3xl">
                            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-green-500/20 dark:shadow-green-500/10 ring-2 ring-white/30 dark:ring-gray-700/30 bg-white dark:bg-gray-800">
                                {/* Image with Professional Framing */}
                                <div className="relative aspect-[4/3] sm:aspect-[4/3.5] group/card">
                                    <img
                                        src={png2}
                                        alt="Pumpa Squash Academy - Professional Training"
                                        className="w-full h-full object-cover transform transition-transform duration-1000 hover:scale-110"
                                    />

                                    {/* Professional Gradient Overlay - Dark Mode Support */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 dark:from-black/60 via-transparent to-transparent pointer-events-none" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 dark:from-black/20 via-transparent to-transparent pointer-events-none" />

                                    {/* Corner Accents - Dark Mode Support */}
                                    <div className="absolute top-0 left-0 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 border-t-4 border-l-4 border-green-400/60 dark:border-green-500/40 rounded-tl-2xl pointer-events-none" />
                                    <div className="absolute top-0 right-0 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 border-t-4 border-r-4 border-green-400/60 dark:border-green-500/40 rounded-tr-2xl pointer-events-none" />
                                    <div className="absolute bottom-0 left-0 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 border-b-4 border-l-4 border-green-400/60 dark:border-green-500/40 rounded-bl-2xl pointer-events-none" />
                                    <div className="absolute bottom-0 right-0 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 border-b-4 border-r-4 border-green-400/60 dark:border-green-500/40 rounded-br-2xl pointer-events-none" />

                                    {/* Action Button Overlay - Bottom Right */}
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={openModal}
                                        className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-full p-3 sm:p-4 shadow-2xl shadow-black/30 dark:shadow-black/50 hover:shadow-green-500/30 dark:hover:shadow-green-500/20 transition-all duration-300 group z-30 cursor-pointer"
                                        type="button"
                                    >
                                        <FaExpand className="text-xl sm:text-2xl text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300" />
                                    </motion.button>

                                    {/* Clickable overlay for the entire image */}
                                    <div
                                        onClick={openModal}
                                        className="absolute inset-0 cursor-pointer z-20"
                                        role="button"
                                        tabIndex={0}
                                        aria-label="View full image"
                                    />
                                </div>

                                {/* Professional Image Caption - Dark Mode Support */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none">
                                    <p className="text-white text-xs sm:text-sm font-medium tracking-[0.15em] uppercase">
                                        Elite Training Facility • Professional Coaching
                                    </p>
                                </div>
                            </div>

                            {/* Floating Cards - Responsive Sizing */}
                            {/* Trusted Card - Top Right */}
                            <motion.div
                                initial={{ opacity: 0, y: 20, x: 20 }}
                                animate={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="absolute -top-2 sm:-top-4 md:-top-8 lg:-top-14 -right-2 sm:-right-4 md:-right-6 lg:-right-8 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-5 lg:px-6 py-3 sm:py-4 md:py-4 lg:py-5 shadow-2xl shadow-green-500/20 dark:shadow-green-500/10 border border-white/50 dark:border-gray-700/50 z-20 min-w-[100px] sm:min-w-[130px] md:min-w-[150px] lg:min-w-[160px] pointer-events-none"
                            >
                                <div className="flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-4">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 dark:from-green-500 dark:to-emerald-400 flex items-center justify-center text-white shadow-lg shadow-green-500/30 dark:shadow-green-500/20">
                                        <FaShieldAlt className="text-base sm:text-xl md:text-2xl lg:text-2xl" />
                                    </div>
                                    <div>
                                        <div className="text-[8px] sm:text-[10px] md:text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-[0.1em] sm:tracking-[0.15em]">Trusted</div>
                                        <div className="text-base sm:text-xl md:text-2xl lg:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">5+ Years</div>
                                        <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 dark:text-gray-400 mt-0.5 font-light tracking-wide">of Excellence</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Holistic Card - Bottom Left */}
                            <motion.div
                                initial={{ opacity: 0, y: 20, x: -20 }}
                                animate={{ opacity: 1, y: 0, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 lg:-bottom-8 -left-2 sm:-left-4 md:-left-6 lg:-left-8 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-5 lg:px-6 py-3 sm:py-4 md:py-4 lg:py-5 shadow-2xl shadow-emerald-500/20 dark:shadow-emerald-500/10 border border-white/50 dark:border-gray-700/50 z-20 min-w-[100px] sm:min-w-[130px] md:min-w-[150px] lg:min-w-[160px] pointer-events-none"
                            >
                                <div className="flex items-center gap-2 sm:gap-3 md:gap-3 lg:gap-4">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-emerald-400 to-green-500 dark:from-emerald-400 dark:to-green-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 dark:shadow-emerald-500/20">
                                        <FaHeartbeat className="text-base sm:text-xl md:text-2xl lg:text-2xl" />
                                    </div>
                                    <div>
                                        <div className="text-[8px] sm:text-[10px] md:text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.1em] sm:tracking-[0.15em]">Holistic</div>
                                        <div className="text-base sm:text-xl md:text-2xl lg:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Mind + Body</div>
                                        <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 dark:text-gray-400 mt-0.5 font-light tracking-wide">Complete Growth</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Achievement Card - Left Middle (Hidden on mobile) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="absolute top-1/4 -left-6 sm:-left-10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-2xl shadow-green-500/15 dark:shadow-green-500/10 border border-white/50 dark:border-gray-700/50 z-20 hidden lg:block pointer-events-none"
                            >
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 dark:from-yellow-500 dark:to-orange-500 flex items-center justify-center text-white shadow-lg shadow-yellow-500/30 dark:shadow-yellow-500/20">
                                        <FaTrophy className="text-lg sm:text-xl" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] sm:text-xs font-semibold text-yellow-600 dark:text-yellow-400 uppercase tracking-[0.15em]">Awards</div>
                                        <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white tracking-tight">15+</div>
                                        <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-light tracking-wide">Championships</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>







                </div>
            </div>

            {/* Bottom Accent Line - Dark Mode Support */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400/50 dark:via-green-500/30 to-transparent" />

            {/* Full Image Modal/Lightbox - Dark Mode Support */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 dark:bg-black/98 backdrop-blur-xl"
                        onClick={closeModal}
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            onClick={closeModal}
                            className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 transition-all duration-300"
                            type="button"
                        >
                            <FaTimes className="text-xl sm:text-2xl" />
                        </motion.button>

                        {/* Image Counter */}
                        <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 z-10 bg-black/50 backdrop-blur-sm text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-light tracking-wide">
                            {currentImage + 1} / {galleryImages.length}
                        </div>

                        {/* Navigation Buttons */}
                        {galleryImages.length > 1 && (
                            <>
                                <motion.button
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -20, opacity: 0 }}
                                    onClick={prevImage}
                                    className="absolute left-3 sm:left-6 md:left-8 z-10 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 md:p-4 transition-all duration-300"
                                    type="button"
                                >
                                    <FaChevronLeft className="text-lg sm:text-xl md:text-2xl" />
                                </motion.button>

                                <motion.button
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 20, opacity: 0 }}
                                    onClick={nextImage}
                                    className="absolute right-3 sm:right-6 md:right-8 z-10 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 md:p-4 transition-all duration-300"
                                    type="button"
                                >
                                    <FaChevronRight className="text-lg sm:text-xl md:text-2xl" />
                                </motion.button>
                            </>
                        )}

                        {/* Main Image */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="relative max-w-[95vw] sm:max-w-[90vw] max-h-[80vh] sm:max-h-[85vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={galleryImages[currentImage]}
                                alt={`Academy Gallery ${currentImage + 1}`}
                                className="max-w-full max-h-[80vh] sm:max-h-[85vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl"
                            />

                            {/* Image Info Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-xl sm:rounded-b-2xl pointer-events-none">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-2 sm:gap-0">
                                    <div>
                                        <p className="text-base sm:text-lg font-semibold tracking-wide">Pumpa Squash Academy</p>
                                        <p className="text-xs sm:text-sm text-white/70 font-light tracking-wide">Elite Training Facility • Professional Coaching</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Heros;












