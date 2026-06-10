
// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//     FaStar,
//     FaQuoteLeft,
//     FaChevronLeft,
//     FaChevronRight,
//     FaUserCircle,
//     FaHeart,
//     FaTrophy
// } from 'react-icons/fa';

// const Testimonials = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [activeFilter, setActiveFilter] = useState('all');
//     const [expandedStates, setExpandedStates] = useState({});
//     const [showAllTestimonials, setShowAllTestimonials] = useState(false);

//     // State for animated counters
//     const [counters, setCounters] = useState({
//         families: 0,
//         rating: 0,
//         years: 0,
//         ages: 0
//     });
//     const [hasAnimated, setHasAnimated] = useState(false);
//     const statsRef = useRef(null);

//     const testimonials = [
//         {
//             id: 1,
//             name: "Hafizah Faisal",
//             role: "Parent of two daughters",
//             content: "All the coaches are highly experienced and excellent at nurturing young talent. Most importantly, they strongly believe that learning should be fun and pressure-free. This approach allows children to naturally fall in love with squash and gradually develop the motivation to improve. After the recent squash camp held at The Lake View Club, I could see a significant improvement in both of my daughters' squash skills.",
//             rating: 5,
//             category: "parent",
//             image: null,
//             achievement: "⭐ Improvement"
//         },
//         {
//             id: 2,
//             name: "Azzah Haniza",
//             role: "Adult Learner",
//             content: "Good squash training and coaching for young and adults. Can see the improvements for 4 months of training every week from zero knowledge of squash. During the training could also see some of the adults who joined the sessions really have improved themselves. So, clearly the sessions are good for both young and adults.",
//             rating: 5,
//             category: "adult",
//             image: null,
//             achievement: "💪 From Zero to Hero"
//         },
//         {
//             id: 3,
//             name: "Punitha Vengidasalam",
//             role: "Parent",
//             content: "My son has been training with Pumpa Squash Academy since he is 6 years old, he enjoys each sessions. This is the right place to get started and to be able to learn right methods and techniques. The coaches are very attentive and energetic, the kids just love them.",
//             rating: 5,
//             category: "parent",
//             image: null,
//             achievement: "👦 6+ Years of Journey"
//         },
//         {
//             id: 4,
//             name: "Pang Seetha",
//             role: "Parent of two",
//             content: "Both my kids started squash as a trial class & turned out to take up as an individual sports. Both likes the coaching style at Pumpa Academy. The encouragement & guidance from Coach Pushpa has took them next level. A recommended place to start or try squash for kids & adults.",
//             rating: 5,
//             category: "parent",
//             image: null,
//             achievement: "🎯 Trial to Champion"
//         },
//         {
//             id: 5,
//             name: "Jayalaxmi Arumugam",
//             role: "Parent",
//             content: "Pumpa Squash Academy is a well established training centre that offers a range of programs for children and adults. The coaches are very friendly, dedicated and professional who believes in bringing the best out of their students. Their programs are designed carefully to match individual skills and capacity. What I like about this academy is the creativity and flexibility they bring in to motivate and create a fun environment for the children. The coaches invest their time to teach, motivate and support their students at all times exceeding the parents' expectations. If you are looking for a way to introduce your child to squash, then Pumpa Squash Academy is a great place to start. Besides learning the sport, children can develop physical and mental agility, improving self-confidence and making new friends.",
//             rating: 5,
//             category: "parent",
//             image: null,
//             achievement: "🏆 Exceeding Expectations"
//         },
//         {
//             id: 6,
//             name: "Jayanthi Boobalan",
//             role: "Parent of two girls",
//             content: "My 2 girls have been training with Pumpa Squash since they were 6 years old. Pushppa is a very dedicated coach who guides and pushes them to deliver their best. They are now more confident players and enjoy the game very much. My kids have also been venturing into competitive squash and developing further in the sports, learning discipline and sportsmanship along the way. Thank You Pumpa Squash for the guidance!",
//             rating: 5,
//             category: "parent",
//             image: null,
//             achievement: "🎾 Competitive Journey"
//         },
//         {
//             id: 7,
//             name: "Vick VP",
//             role: "Parent",
//             content: "Had a great experience for Yarsh.V with the Squash School Holiday Camps at Pumpa Squash Academy. Junior players get to improve skills while enjoying themselves. Between the training, games, and match play, kids were having fun and engaged with the program. Definitely a good option and meaningful way for kids to spend the school holidays.",
//             rating: 5,
//             category: "parent",
//             image: null,
//             achievement: "🏕️ Holiday Camp Success"
//         }
//     ];

//     const categories = [
//         { id: 'all', label: 'All Reviews', icon: '⭐' },
//         { id: 'parent', label: 'Parents', icon: '👨‍👩‍👧' },
//         { id: 'adult', label: 'Adult Learners', icon: '🎓' }
//     ];

//     let filteredTestimonials = activeFilter === 'all'
//         ? testimonials
//         : testimonials.filter(t => t.category === activeFilter);

//     // Apply "View All" logic - show only first 2 if not showAllTestimonials
//     if (!showAllTestimonials && filteredTestimonials.length > 2) {
//         filteredTestimonials = filteredTestimonials.slice(0, 2);
//     }

//     const handlePrev = () => {
//         setCurrentIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
//     };

//     const handleNext = () => {
//         setCurrentIndex((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1));
//     };

//     const toggleReadMore = (id) => {
//         setExpandedStates(prev => ({
//             ...prev,
//             [id]: !prev[id]
//         }));
//     };

//     const handleFilterChange = (categoryId) => {
//         setActiveFilter(categoryId);
//         setCurrentIndex(0);
//         setExpandedStates({});
//         setShowAllTestimonials(false);
//     };

//     // Counter animation function
//     const animateNumber = (start, end, duration, callback) => {
//         const startTime = performance.now();
//         const updateCounter = (currentTime) => {
//             const elapsed = currentTime - startTime;
//             const progress = Math.min(elapsed / duration, 1);
//             const easeOutQuart = 1 - Math.pow(1 - progress, 4);
//             const currentValue = Math.floor(start + (end - start) * easeOutQuart);
//             callback(currentValue);

//             if (progress < 1) {
//                 requestAnimationFrame(updateCounter);
//             }
//         };
//         requestAnimationFrame(updateCounter);
//     };

//     // Intersection Observer for stats animation
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting && !hasAnimated) {
//                         setHasAnimated(true);

//                         // Animate each counter with different delays
//                         setTimeout(() => {
//                             animateNumber(0, 7, 2000, (value) => {
//                                 setCounters(prev => ({ ...prev, families: value }));
//                             });
//                         }, 0);

//                         setTimeout(() => {
//                             animateNumber(0, 100, 2000, (value) => {
//                                 setCounters(prev => ({ ...prev, rating: value }));
//                             });
//                         }, 200);

//                         setTimeout(() => {
//                             animateNumber(0, 6, 2000, (value) => {
//                                 setCounters(prev => ({ ...prev, years: value }));
//                             });
//                         }, 400);

//                         setTimeout(() => {
//                             // For "All Ages" text - we'll just show the word, no counter needed
//                             setCounters(prev => ({ ...prev, ages: 1 }));
//                         }, 600);
//                     }
//                 });
//             },
//             { threshold: 0.3 }
//         );

//         if (statsRef.current) {
//             observer.observe(statsRef.current);
//         }

//         return () => {
//             if (statsRef.current) {
//                 observer.unobserve(statsRef.current);
//             }
//         };
//     }, [hasAnimated]);

//     return (
//         <section className="py-20 bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
//             <div className="container mx-auto px-4">
//                 {/* Section Header */}
//                 <div className="text-center mb-16">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="relative"
//                     >
//                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-green-500/5 rounded-full blur-2xl"></div>

//                         <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 shadow-lg px-5 py-2 rounded-full mb-6 relative z-10">
//                             <FaHeart className="text-green-600 dark:text-green-400 text-sm" />
//                             <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm"> What They Say</span>
//                         </div>

//                         <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
//                             <span className="block text-3xl md:text-4xl font-light text-green-600 dark:text-green-400 mb-2">
//                                 Trusted by Many
//                             </span>
//                             <span className="bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 dark:from-white dark:via-green-400 dark:to-white bg-clip-text text-transparent">
//                                 Student & Parent Stories
//                             </span>
//                         </h2>

//                         <div className="flex items-center justify-center gap-3 mb-6">
//                             <div className="w-12 h-px bg-gradient-to-r from-transparent to-green-500"></div>
//                             <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
//                             <div className="w-12 h-px bg-gradient-to-l from-transparent to-green-500"></div>
//                         </div>

//                         <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-serif text-lg italic font-light tracking-wide">
//                             “ Real stories from our squash family ”
//                         </p>
//                     </motion.div>
//                 </div>

//                 {/* Category Filters */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.4 }}
//                     className="flex justify-center gap-4 mb-12 flex-wrap"
//                 >
//                     {categories.map((category) => (
//                         <button
//                             key={category.id}
//                             onClick={() => handleFilterChange(category.id)}
//                             className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${activeFilter === category.id
//                                 ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
//                                 : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700'
//                                 }`}
//                         >
//                             <span>{category.icon}</span>
//                             {category.label}
//                         </button>
//                     ))}
//                 </motion.div>

//                 {/* Testimonials Grid View (Desktop - 2 Cards in a row with Read More) */}
//                 <div className="hidden lg:grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
//                     {filteredTestimonials.map((testimonial, index) => {
//                         const isExpanded = expandedStates[testimonial.id] || false;
//                         const shouldTruncate = testimonial.content.length > 150;
//                         const displayContent = isExpanded ? testimonial.content : testimonial.content.slice(0, 150) + (shouldTruncate ? '...' : '');

//                         return (
//                             <motion.div
//                                 key={testimonial.id}
//                                 initial={{ opacity: 0, y: 30 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: index * 0.1 }}
//                                 className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
//                             >
//                                 <FaQuoteLeft className="text-4xl text-green-500/30 mb-4" />

//                                 <div className="flex gap-1 mb-4">
//                                     {[...Array(testimonial.rating)].map((_, i) => (
//                                         <FaStar key={i} className="text-yellow-400" />
//                                     ))}
//                                 </div>

//                                 <div className="flex-grow">
//                                     <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed mb-3 font-sans italic">
//                                         “{displayContent}”
//                                     </p>
//                                     {shouldTruncate && (
//                                         <button
//                                             onClick={() => toggleReadMore(testimonial.id)}
//                                             className="text-green-600 dark:text-green-400 text-sm font-semibold hover:text-green-700 dark:hover:text-green-300 transition-colors mb-4 inline-flex items-center gap-1"
//                                         >
//                                             {isExpanded ? 'Read less' : 'Read more'}
//                                             <svg className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                                             </svg>
//                                         </button>
//                                     )}
//                                 </div>

//                                 <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
//                                     <div className="flex items-center gap-3 flex-1 min-w-0">
//                                         <FaUserCircle className="text-4xl text-green-600 dark:text-green-400 flex-shrink-0" />
//                                         <div className="flex-1">
//                                             <h4 className="font-serif font-bold text-gray-900 dark:text-white tracking-tight break-words">
//                                                 {testimonial.name}
//                                             </h4>
//                                             <p className="text-sm text-gray-500 dark:text-gray-400 font-light tracking-wide break-words">
//                                                 {testimonial.role}
//                                             </p>
//                                         </div>
//                                     </div>

//                                     {testimonial.achievement && (
//                                         <span className="text-xs font-medium uppercase tracking-wider bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full flex-shrink-0 ml-2">
//                                             {testimonial.achievement}
//                                         </span>
//                                     )}
//                                 </div>
//                             </motion.div>
//                         );
//                     })}
//                 </div>

//                 {/* View All / Show Less Button */}
//                 {(activeFilter === 'all' && testimonials.length > 2) && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ once: true }}
//                         className="text-center mt-10"
//                     >
//                         <button
//                             onClick={() => setShowAllTestimonials(!showAllTestimonials)}
//                             className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border-2 border-green-600 text-green-600 dark:text-green-400 font-semibold rounded-full hover:bg-green-50 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
//                         >
//                             {showAllTestimonials ? (
//                                 <>
//                                     Show Less Reviews
//                                     <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                                     </svg>
//                                 </>
//                             ) : (
//                                 <>
//                                     View All Reviews ({testimonials.length})
//                                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                                     </svg>
//                                 </>
//                             )}
//                         </button>
//                     </motion.div>
//                 )}

//                 {/* Carousel View (Mobile/Tablet) */}
//                 {!showAllTestimonials && (
//                     <div className="lg:hidden max-w-2xl mx-auto">
//                         <div className="relative">
//                             <AnimatePresence mode="wait">
//                                 <motion.div
//                                     key={currentIndex}
//                                     initial={{ opacity: 0, x: 100 }}
//                                     animate={{ opacity: 1, x: 0 }}
//                                     exit={{ opacity: 0, x: -100 }}
//                                     transition={{ duration: 0.3 }}
//                                     className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
//                                 >
//                                     <FaQuoteLeft className="text-4xl text-green-500/30 mb-4" />

//                                     <div className="flex gap-1 mb-4">
//                                         {[...Array(filteredTestimonials[currentIndex].rating)].map((_, i) => (
//                                             <FaStar key={i} className="text-yellow-400" />
//                                         ))}
//                                     </div>

//                                     <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 line-clamp-6">
//                                         "{filteredTestimonials[currentIndex].content}"
//                                     </p>

//                                     <div className="flex items-center justify-between">
//                                         <div className="flex items-center gap-3">
//                                             <FaUserCircle className="text-4xl text-green-600 dark:text-green-400" />
//                                             <div>
//                                                 <h4 className="font-serif font-bold text-gray-900 dark:text-white">
//                                                     {filteredTestimonials[currentIndex].name}
//                                                 </h4>
//                                                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                                                     {filteredTestimonials[currentIndex].role}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                         {filteredTestimonials[currentIndex].achievement && (
//                                             <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
//                                                 {filteredTestimonials[currentIndex].achievement}
//                                             </span>
//                                         )}
//                                     </div>
//                                 </motion.div>
//                             </AnimatePresence>

//                             {filteredTestimonials.length > 1 && (
//                                 <>
//                                     <button
//                                         onClick={handlePrev}
//                                         className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
//                                     >
//                                         <FaChevronLeft className="text-green-600 dark:text-green-400" />
//                                     </button>
//                                     <button
//                                         onClick={handleNext}
//                                         className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
//                                     >
//                                         <FaChevronRight className="text-green-600 dark:text-green-400" />
//                                     </button>
//                                 </>
//                             )}
//                         </div>

//                         <div className="flex justify-center gap-2 mt-6">
//                             {filteredTestimonials.map((_, index) => (
//                                 <button
//                                     key={index}
//                                     onClick={() => setCurrentIndex(index)}
//                                     className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index
//                                         ? 'w-8 bg-green-600 dark:bg-green-400'
//                                         : 'bg-gray-300 dark:bg-gray-600'
//                                         }`}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 )}

//                 {/* Stats Section with Animated Counters */}
                


//                 <motion.div
//                     ref={statsRef}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.6 }}
//                     className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
//                 >
//                     <motion.div
//                         className="text-center cursor-pointer"
//                         whileHover={{ scale: 1.05, y: -5 }}
//                         whileTap={{ scale: 0.95 }}
//                         transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                     >
//                         <motion.div
//                             className="text-3xl font-bold text-green-600 dark:text-green-400"
//                             whileHover={{ scale: 1.1 }}
//                             transition={{ type: "spring", stiffness: 400 }}
//                         >
//                             {counters.families}+
//                         </motion.div>
//                         <div className="text-sm text-gray-600 dark:text-gray-400">Happy Families</div>
//                     </motion.div>

//                     <motion.div
//                         className="text-center cursor-pointer"
//                         whileHover={{ scale: 1.05, y: -5 }}
//                         whileTap={{ scale: 0.95 }}
//                         transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                     >
//                         <motion.div
//                             className="text-3xl font-bold text-green-600 dark:text-green-400"
//                             whileHover={{ scale: 1.1 }}
//                             transition={{ type: "spring", stiffness: 400 }}
//                         >
//                             {counters.rating}%
//                         </motion.div>
//                         <div className="text-sm text-gray-600 dark:text-gray-400">5-Star Reviews</div>
//                     </motion.div>

//                     <motion.div
//                         className="text-center cursor-pointer"
//                         whileHover={{ scale: 1.05, y: -5 }}
//                         whileTap={{ scale: 0.95 }}
//                         transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                     >
//                         <motion.div
//                             className="text-3xl font-bold text-green-600 dark:text-green-400"
//                             whileHover={{ scale: 1.1 }}
//                             transition={{ type: "spring", stiffness: 400 }}
//                         >
//                             {counters.years}+
//                         </motion.div>
//                         <div className="text-sm text-gray-600 dark:text-gray-400">Years of Trust</div>
//                     </motion.div>

//                     <motion.div
//                         className="text-center cursor-pointer"
//                         whileHover={{ scale: 1.05, y: -5 }}
//                         whileTap={{ scale: 0.95 }}
//                         transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                     >
//                         <motion.div
//                             className="text-3xl font-bold text-green-600 dark:text-green-400"
//                             whileHover={{ scale: 1.1 }}
//                             transition={{ type: "spring", stiffness: 400 }}
//                         >
//                             {counters.ages === 1 ? 'All' : ''} Ages
//                         </motion.div>
//                         <div className="text-sm text-gray-600 dark:text-gray-400">Kids to Adults</div>
//                     </motion.div>
//                 </motion.div>





    
                




//                 {/* Call to Action */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.7 }}
//                     className="text-center mt-12"
//                 >
//                     <a
//                         href="/contact"
//                         className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//                     >
//                         Join Our Squash Family
//                         <FaTrophy />
//                     </a>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default Testimonials;

















// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//     FaStar,
//     FaQuoteLeft,
//     FaChevronLeft,
//     FaChevronRight,
//     FaUserCircle,
//     FaHeart,
//     FaTrophy
// } from 'react-icons/fa';
// import TestimonialCard from '../../components/Reusable/TestimonialCard';

// const Testimonials = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [activeFilter, setActiveFilter] = useState('all');
//     const [expandedStates, setExpandedStates] = useState({});
//     const [showAllTestimonials, setShowAllTestimonials] = useState(false);

//     // State for animated counters
//     const [counters, setCounters] = useState({
//         families: 0,
//         rating: 0,
//         years: 0,
//         ages: 0
//     });
//     const [hasAnimated, setHasAnimated] = useState(false);
//     const statsRef = useRef(null);

//     const testimonials = [
//         {
//             id: 1,
//             name: "Hafizah Faisal",
//             role: "Parent of two daughters",
//             content: "All the coaches are highly experienced and excellent at nurturing young talent. Most importantly, they strongly believe that learning should be fun and pressure-free. This approach allows children to naturally fall in love with squash and gradually develop the motivation to improve. After the recent squash camp held at The Lake View Club, I could see a significant improvement in both of my daughters' squash skills.",
//             rating: 5,
//             category: "parent",
//             image: null,
//             achievement: "⭐ Improvement"
//         },
//         {
//             id: 2,
//             name: "Azzah Haniza",
//             role: "Adult Learner",
//             content: "Good squash training and coaching for young and adults. Can see the improvements for 4 months of training every week from zero knowledge of squash. During the training could also see some of the adults who joined the sessions really have improved themselves. So, clearly the sessions are good for both young and adults.",
//             rating: 5,
//             category: "adult",
//             image: null,
//             achievement: "💪 From Zero to Hero"
//         },
//         {
//             id: 3,
//             name: "Punitha Vengidasalam",
//             role: "Parent",
//             content: "My son has been training with Pumpa Squash Academy since he is 6 years old, he enjoys each sessions. This is the right place to get started and to be able to learn right methods and techniques. The coaches are very attentive and energetic, the kids just love them.",
//             rating: 5,
//             category: "parent",
//             image: null,
//             achievement: "👦 6+ Years of Journey"
//         },
//         {
//             id: 4,
//             name: "Pang Seetha",
//             role: "Parent of two",
//             content: "Both my kids started squash as a trial class & turned out to take up as an individual sports. Both likes the coaching style at Pumpa Academy. The encouragement & guidance from Coach Pushpa has took them next level. A recommended place to start or try squash for kids & adults.",
//             rating: 5,
//             category: "parent",
//             image: null,
//             achievement: "🎯 Trial to Champion"
//         },
//         {
//             id: 5,
//             name: "Jayalaxmi Arumugam",
//             role: "Parent",
//             content: "Pumpa Squash Academy is a well established training centre that offers a range of programs for children and adults. The coaches are very friendly, dedicated and professional who believes in bringing the best out of their students. Their programs are designed carefully to match individual skills and capacity. What I like about this academy is the creativity and flexibility they bring in to motivate and create a fun environment for the children. The coaches invest their time to teach, motivate and support their students at all times exceeding the parents' expectations. If you are looking for a way to introduce your child to squash, then Pumpa Squash Academy is a great place to start. Besides learning the sport, children can develop physical and mental agility, improving self-confidence and making new friends.",
//             rating: 5,
//             category: "parent",
//             image: null,
//             achievement: "🏆 Exceeding Expectations"
//         },
//         {
//             id: 6,
//             name: "Jayanthi Boobalan",
//             role: "Parent of two girls",
//             content: "My 2 girls have been training with Pumpa Squash since they were 6 years old. Pushppa is a very dedicated coach who guides and pushes them to deliver their best. They are now more confident players and enjoy the game very much. My kids have also been venturing into competitive squash and developing further in the sports, learning discipline and sportsmanship along the way. Thank You Pumpa Squash for the guidance!",
//             rating: 5,
//             category: "parent",
//             image: null,
//             achievement: "🎾 Competitive Journey"
//         },
//         {
//             id: 7,
//             name: "Vick VP",
//             role: "Parent",
//             content: "Had a great experience for Yarsh.V with the Squash School Holiday Camps at Pumpa Squash Academy. Junior players get to improve skills while enjoying themselves. Between the training, games, and match play, kids were having fun and engaged with the program. Definitely a good option and meaningful way for kids to spend the school holidays.",
//             rating: 5,
//             category: "parent",
//             image: null,
//             achievement: "🏕️ Holiday Camp Success"
//         }
//     ];

//     const categories = [
//         { id: 'all', label: 'All Reviews', icon: '⭐' },
//         { id: 'parent', label: 'Parents', icon: '👨‍👩‍👧' },
//         { id: 'adult', label: 'Adult Learners', icon: '🎓' }
//     ];

//     let filteredTestimonials = activeFilter === 'all'
//         ? testimonials
//         : testimonials.filter(t => t.category === activeFilter);

//     // Apply "View All" logic - show only first 2 if not showAllTestimonials
//     if (!showAllTestimonials && filteredTestimonials.length > 2) {
//         filteredTestimonials = filteredTestimonials.slice(0, 2);
//     }

//     const handlePrev = () => {
//         setCurrentIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
//     };

//     const handleNext = () => {
//         setCurrentIndex((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1));
//     };

//     const toggleReadMore = (id, newState) => {
//         setExpandedStates(prev => ({
//             ...prev,
//             [id]: newState
//         }));
//     };

//     const handleFilterChange = (categoryId) => {
//         setActiveFilter(categoryId);
//         setCurrentIndex(0);
//         setExpandedStates({});
//         setShowAllTestimonials(false);
//     };

//     // Counter animation function
//     const animateNumber = (start, end, duration, callback) => {
//         const startTime = performance.now();
//         const updateCounter = (currentTime) => {
//             const elapsed = currentTime - startTime;
//             const progress = Math.min(elapsed / duration, 1);
//             const easeOutQuart = 1 - Math.pow(1 - progress, 4);
//             const currentValue = Math.floor(start + (end - start) * easeOutQuart);
//             callback(currentValue);

//             if (progress < 1) {
//                 requestAnimationFrame(updateCounter);
//             }
//         };
//         requestAnimationFrame(updateCounter);
//     };

//     // Intersection Observer for stats animation
//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting && !hasAnimated) {
//                         setHasAnimated(true);

//                         setTimeout(() => {
//                             animateNumber(0, 7, 2000, (value) => {
//                                 setCounters(prev => ({ ...prev, families: value }));
//                             });
//                         }, 0);

//                         setTimeout(() => {
//                             animateNumber(0, 100, 2000, (value) => {
//                                 setCounters(prev => ({ ...prev, rating: value }));
//                             });
//                         }, 200);

//                         setTimeout(() => {
//                             animateNumber(0, 6, 2000, (value) => {
//                                 setCounters(prev => ({ ...prev, years: value }));
//                             });
//                         }, 400);

//                         setTimeout(() => {
//                             setCounters(prev => ({ ...prev, ages: 1 }));
//                         }, 600);
//                     }
//                 });
//             },
//             { threshold: 0.3 }
//         );

//         if (statsRef.current) {
//             observer.observe(statsRef.current);
//         }

//         return () => {
//             if (statsRef.current) {
//                 observer.unobserve(statsRef.current);
//             }
//         };
//     }, [hasAnimated]);

//     return (
//         <section className="py-20 bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
//             <div className="container mx-auto px-4">
//                 {/* Section Header */}
//                 <div className="text-center mb-16">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="relative"
//                     >
//                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-green-500/5 rounded-full blur-2xl"></div>

//                         <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 shadow-lg px-5 py-2 rounded-full mb-6 relative z-10">
//                             <FaHeart className="text-green-600 dark:text-green-400 text-sm" />
//                             <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm"> What They Say</span>
//                         </div>

//                         <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
//                             <span className="block text-3xl md:text-4xl font-light text-green-600 dark:text-green-400 mb-2">
//                                 Trusted by Many
//                             </span>
//                             <span className="bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 dark:from-white dark:via-green-400 dark:to-white bg-clip-text text-transparent">
//                                 Student & Parent Stories
//                             </span>
//                         </h2>

//                         <div className="flex items-center justify-center gap-3 mb-6">
//                             <div className="w-12 h-px bg-gradient-to-r from-transparent to-green-500"></div>
//                             <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
//                             <div className="w-12 h-px bg-gradient-to-l from-transparent to-green-500"></div>
//                         </div>

//                         <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-serif text-lg italic font-light tracking-wide">
//                             “ Real stories from our squash family ”
//                         </p>
//                     </motion.div>
//                 </div>

//                 {/* Category Filters */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.4 }}
//                     className="flex justify-center gap-4 mb-12 flex-wrap"
//                 >
//                     {categories.map((category) => (
//                         <button
//                             key={category.id}
//                             onClick={() => handleFilterChange(category.id)}
//                             className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${activeFilter === category.id
//                                 ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
//                                 : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700'
//                                 }`}
//                         >
//                             <span>{category.icon}</span>
//                             {category.label}
//                         </button>
//                     ))}
//                 </motion.div>

//                 {/* Testimonials Grid View (Desktop - 2 Cards in a row) */}
//                 <div className="hidden lg:grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
//                     {filteredTestimonials.map((testimonial, index) => (
//                         <TestimonialCard
//                             key={testimonial.id}
//                             testimonial={testimonial}
//                             index={index}
//                             isExpanded={expandedStates[testimonial.id] || false}
//                             onToggleReadMore={toggleReadMore}
//                         />
//                     ))}
//                 </div>

//                 {/* View All / Show Less Button */}
//                 {(activeFilter === 'all' && testimonials.length > 2) && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ once: true }}
//                         className="text-center mt-10"
//                     >
//                         <button
//                             onClick={() => setShowAllTestimonials(!showAllTestimonials)}
//                             className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border-2 border-green-600 text-green-600 dark:text-green-400 font-semibold rounded-full hover:bg-green-50 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
//                         >
//                             {showAllTestimonials ? (
//                                 <>
//                                     Show Less Reviews
//                                     <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                                     </svg>
//                                 </>
//                             ) : (
//                                 <>
//                                     View All Reviews ({testimonials.length})
//                                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                                     </svg>
//                                 </>
//                             )}
//                         </button>
//                     </motion.div>
//                 )}

//                 {/* Carousel View (Mobile/Tablet) */}
//                 {!showAllTestimonials && (
//                     <div className="lg:hidden max-w-2xl mx-auto">
//                         <div className="relative">
//                             <AnimatePresence mode="wait">
//                                 <motion.div
//                                     key={currentIndex}
//                                     initial={{ opacity: 0, x: 100 }}
//                                     animate={{ opacity: 1, x: 0 }}
//                                     exit={{ opacity: 0, x: -100 }}
//                                     transition={{ duration: 0.3 }}
//                                     className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
//                                 >
//                                     <FaQuoteLeft className="text-4xl text-green-500/30 mb-4" />

//                                     <div className="flex gap-1 mb-4">
//                                         {[...Array(filteredTestimonials[currentIndex].rating)].map((_, i) => (
//                                             <FaStar key={i} className="text-yellow-400" />
//                                         ))}
//                                     </div>

//                                     <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 line-clamp-6">
//                                         "{filteredTestimonials[currentIndex].content}"
//                                     </p>

//                                     <div className="flex items-center justify-between">
//                                         <div className="flex items-center gap-3">
//                                             <FaUserCircle className="text-4xl text-green-600 dark:text-green-400" />
//                                             <div>
//                                                 <h4 className="font-serif font-bold text-gray-900 dark:text-white">
//                                                     {filteredTestimonials[currentIndex].name}
//                                                 </h4>
//                                                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                                                     {filteredTestimonials[currentIndex].role}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                         {filteredTestimonials[currentIndex].achievement && (
//                                             <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
//                                                 {filteredTestimonials[currentIndex].achievement}
//                                             </span>
//                                         )}
//                                     </div>
//                                 </motion.div>
//                             </AnimatePresence>

//                             {filteredTestimonials.length > 1 && (
//                                 <>
//                                     <button
//                                         onClick={handlePrev}
//                                         className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
//                                     >
//                                         <FaChevronLeft className="text-green-600 dark:text-green-400" />
//                                     </button>
//                                     <button
//                                         onClick={handleNext}
//                                         className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
//                                     >
//                                         <FaChevronRight className="text-green-600 dark:text-green-400" />
//                                     </button>
//                                 </>
//                             )}
//                         </div>

//                         <div className="flex justify-center gap-2 mt-6">
//                             {filteredTestimonials.map((_, index) => (
//                                 <button
//                                     key={index}
//                                     onClick={() => setCurrentIndex(index)}
//                                     className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index
//                                         ? 'w-8 bg-green-600 dark:bg-green-400'
//                                         : 'bg-gray-300 dark:bg-gray-600'
//                                         }`}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 )}

               





//                 {/* Stats Section with Professional Animation */}
//                 <motion.div
//                     ref={statsRef}
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true, margin: "-100px" }}
//                     className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800"
//                 >
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">

//                         {/* Stat 1 - Happy Families */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: 0.1 }}
//                             className="relative group"
//                         >
//                             <div className="text-center">
//                                 <div className="relative inline-block">
//                                     <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tabular-nums">
//                                         {counters.families}
//                                         <span className="text-green-600 dark:text-green-400">+</span>
//                                     </span>
//                                     {/* Decorative dot */}
//                                     <div className="absolute -top-2 -right-3 w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                                 </div>
//                                 <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium tracking-wide">
//                                     Happy Families
//                                 </p>
//                                 {/* Underline effect on hover */}
//                                 <div className="w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mt-3 group-hover:w-12 transition-all duration-300 rounded-full"></div>
//                             </div>
//                         </motion.div>

//                         {/* Stat 2 - 5-Star Reviews */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: 0.2 }}
//                             className="relative group"
//                         >
//                             <div className="text-center">
//                                 <div className="relative inline-block">
//                                     <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tabular-nums">
//                                         {counters.rating}
//                                         <span className="text-green-600 dark:text-green-400">%</span>
//                                     </span>
//                                     <div className="absolute -top-2 -right-3 w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                                 </div>
//                                 <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium tracking-wide">
//                                     5-Star Reviews
//                                 </p>
//                                 <div className="flex justify-center gap-0.5 mt-2">
//                                     {[...Array(5)].map((_, i) => (
//                                         <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
//                                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                                         </svg>
//                                     ))}
//                                 </div>
//                             </div>
//                         </motion.div>

//                         {/* Stat 3 - Years of Trust */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: 0.3 }}
//                             className="relative group"
//                         >
//                             <div className="text-center">
//                                 <div className="relative inline-block">
//                                     <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tabular-nums">
//                                         {counters.years}
//                                         <span className="text-green-600 dark:text-green-400">+</span>
//                                     </span>
//                                     <div className="absolute -top-2 -right-3 w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                                 </div>
//                                 <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium tracking-wide">
//                                     Years of Excellence
//                                 </p>
//                                 {/* Simple progress bar indicator */}
//                                 <div className="w-full max-w-[60px] h-1 bg-gray-100 dark:bg-gray-800 rounded-full mx-auto mt-3 overflow-hidden">
//                                     <motion.div
//                                         className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
//                                         initial={{ width: 0 }}
//                                         whileInView={{ width: "100%" }}
//                                         viewport={{ once: true }}
//                                         transition={{ duration: 1, delay: 0.8 }}
//                                     />
//                                 </div>
//                             </div>
//                         </motion.div>

//                         {/* Stat 4 - Age Range */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: 0.4 }}
//                             className="relative group"
//                         >
//                             <div className="text-center">
//                                 <div className="relative inline-block">
//                                     <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
//                                         {counters.ages === 1 ? 'All' : ''}
//                                         <span className="text-green-600 dark:text-green-400 text-2xl ml-1">Ages</span>
//                                     </span>
//                                     <div className="absolute -top-2 -right-2 w-1.5 h-1.5 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                                 </div>
//                                 <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium tracking-wide">
//                                     Kids to Adults
//                                 </p>
//                                 {/* Age range indicator */}
//                                 <div className="flex items-center justify-center gap-1 mt-3 text-xs">
//                                     <span className="text-gray-400">6+</span>
//                                     <div className="w-8 h-px bg-gray-300 dark:bg-gray-700"></div>
//                                     <span className="text-gray-400">60+</span>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </motion.div>

               











//                 {/* Call to Action */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.7 }}
//                     className="text-center mt-12"
//                 >
//                     <a
//                         href="/contact"
//                         className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//                     >
//                         Join Our Squash Family
//                         <FaTrophy />
//                     </a>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default Testimonials;












import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaStar,
    FaQuoteLeft,
    FaChevronLeft,
    FaChevronRight,
    FaUserCircle,
    FaHeart,
    FaTrophy
} from 'react-icons/fa';
import TestimonialCard from '../../components/Reusable/TestimonialCard';
import Stats from '../../components/Reusable/Stats';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeFilter, setActiveFilter] = useState('all');
    const [expandedStates, setExpandedStates] = useState({});
    const [showAllTestimonials, setShowAllTestimonials] = useState(false);

    const testimonials = [
        {
            id: 1,
            name: "Hafizah Faisal",
            role: "Parent of two daughters",
            content: "All the coaches are highly experienced and excellent at nurturing young talent. Most importantly, they strongly believe that learning should be fun and pressure-free. This approach allows children to naturally fall in love with squash and gradually develop the motivation to improve. After the recent squash camp held at The Lake View Club, I could see a significant improvement in both of my daughters' squash skills.",
            rating: 5,
            category: "parent",
            image: null,
            achievement: "⭐ Improvement"
        },
        {
            id: 2,
            name: "Azzah Haniza",
            role: "Adult Learner",
            content: "Good squash training and coaching for young and adults. Can see the improvements for 4 months of training every week from zero knowledge of squash. During the training could also see some of the adults who joined the sessions really have improved themselves. So, clearly the sessions are good for both young and adults.",
            rating: 5,
            category: "adult",
            image: null,
            achievement: "💪 From Zero to Hero"
        },
        {
            id: 3,
            name: "Punitha Vengidasalam",
            role: "Parent",
            content: "My son has been training with Pumpa Squash Academy since he is 6 years old, he enjoys each sessions. This is the right place to get started and to be able to learn right methods and techniques. The coaches are very attentive and energetic, the kids just love them.",
            rating: 5,
            category: "parent",
            image: null,
            achievement: "👦 6+ Years of Journey"
        },
        {
            id: 4,
            name: "Pang Seetha",
            role: "Parent of two",
            content: "Both my kids started squash as a trial class & turned out to take up as an individual sports. Both likes the coaching style at Pumpa Academy. The encouragement & guidance from Coach Pushpa has took them next level. A recommended place to start or try squash for kids & adults.",
            rating: 5,
            category: "parent",
            image: null,
            achievement: "🎯 Trial to Champion"
        },
        {
            id: 5,
            name: "Jayalaxmi Arumugam",
            role: "Parent",
            content: "Pumpa Squash Academy is a well established training centre that offers a range of programs for children and adults. The coaches are very friendly, dedicated and professional who believes in bringing the best out of their students. Their programs are designed carefully to match individual skills and capacity. What I like about this academy is the creativity and flexibility they bring in to motivate and create a fun environment for the children. The coaches invest their time to teach, motivate and support their students at all times exceeding the parents' expectations. If you are looking for a way to introduce your child to squash, then Pumpa Squash Academy is a great place to start. Besides learning the sport, children can develop physical and mental agility, improving self-confidence and making new friends.",
            rating: 5,
            category: "parent",
            image: null,
            achievement: "🏆 Exceeding Expectations"
        },
        {
            id: 6,
            name: "Jayanthi Boobalan",
            role: "Parent of two girls",
            content: "My 2 girls have been training with Pumpa Squash since they were 6 years old. Pushppa is a very dedicated coach who guides and pushes them to deliver their best. They are now more confident players and enjoy the game very much. My kids have also been venturing into competitive squash and developing further in the sports, learning discipline and sportsmanship along the way. Thank You Pumpa Squash for the guidance!",
            rating: 5,
            category: "parent",
            image: null,
            achievement: "🎾 Competitive Journey"
        },
        {
            id: 7,
            name: "Vick VP",
            role: "Parent",
            content: "Had a great experience for Yarsh.V with the Squash School Holiday Camps at Pumpa Squash Academy. Junior players get to improve skills while enjoying themselves. Between the training, games, and match play, kids were having fun and engaged with the program. Definitely a good option and meaningful way for kids to spend the school holidays.",
            rating: 5,
            category: "parent",
            image: null,
            achievement: "🏕️ Holiday Camp Success"
        }
    ];

    const categories = [
        { id: 'all', label: 'All Reviews', icon: '⭐' },
        { id: 'parent', label: 'Parents', icon: '👨‍👩‍👧' },
        { id: 'adult', label: 'Adult Learners', icon: '🎓' }
    ];

    let filteredTestimonials = activeFilter === 'all'
        ? testimonials
        : testimonials.filter(t => t.category === activeFilter);

    if (!showAllTestimonials && filteredTestimonials.length > 2) {
        filteredTestimonials = filteredTestimonials.slice(0, 2);
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1));
    };

    const toggleReadMore = (id, newState) => {
        setExpandedStates(prev => ({
            ...prev,
            [id]: newState
        }));
    };

    const handleFilterChange = (categoryId) => {
        setActiveFilter(categoryId);
        setCurrentIndex(0);
        setExpandedStates({});
        setShowAllTestimonials(false);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-green-500/5 rounded-full blur-2xl"></div>

                        <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 shadow-lg px-5 py-2 rounded-full mb-6 relative z-10">
                            <FaHeart className="text-green-600 dark:text-green-400 text-sm" />
                            <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm"> What They Say</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            <span className="block text-3xl md:text-4xl font-light text-green-600 dark:text-green-400 mb-2">
                                Trusted by Many
                            </span>
                            <span className="bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 dark:from-white dark:via-green-400 dark:to-white bg-clip-text text-transparent">
                                Student & Parent Stories
                            </span>
                        </h2>

                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-12 h-px bg-gradient-to-r from-transparent to-green-500"></div>
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <div className="w-12 h-px bg-gradient-to-l from-transparent to-green-500"></div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-serif text-lg italic font-light tracking-wide">
                            “ Real stories from our squash family ”
                        </p>
                    </motion.div>
                </div>

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center gap-4 mb-12 flex-wrap"
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => handleFilterChange(category.id)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${activeFilter === category.id
                                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700'
                                }`}
                        >
                            <span>{category.icon}</span>
                            {category.label}
                        </button>
                    ))}
                </motion.div>

                {/* Testimonials Grid View (Desktop - 2 Cards in a row) */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {filteredTestimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                            isExpanded={expandedStates[testimonial.id] || false}
                            onToggleReadMore={toggleReadMore}
                        />
                    ))}
                </div>

                {/* View All / Show Less Button */}
                {(activeFilter === 'all' && testimonials.length > 2) && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-10"
                    >
                        <button
                            onClick={() => setShowAllTestimonials(!showAllTestimonials)}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border-2 border-green-600 text-green-600 dark:text-green-400 font-semibold rounded-full hover:bg-green-50 dark:hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg"
                        >
                            {showAllTestimonials ? (
                                <>
                                    Show Less Reviews
                                    <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </>
                            ) : (
                                <>
                                    View All Reviews ({testimonials.length})
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </>
                            )}
                        </button>
                    </motion.div>
                )}

                {/* Carousel View (Mobile/Tablet) */}
                {!showAllTestimonials && (
                    <div className="lg:hidden max-w-2xl mx-auto">
                        <div className="relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
                                >
                                    <FaQuoteLeft className="text-4xl text-green-500/30 mb-4" />

                                    <div className="flex gap-1 mb-4">
                                        {[...Array(filteredTestimonials[currentIndex].rating)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-400" />
                                        ))}
                                    </div>

                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 line-clamp-6">
                                        "{filteredTestimonials[currentIndex].content}"
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <FaUserCircle className="text-4xl text-green-600 dark:text-green-400" />
                                            <div>
                                                <h4 className="font-serif font-bold text-gray-900 dark:text-white">
                                                    {filteredTestimonials[currentIndex].name}
                                                </h4>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    {filteredTestimonials[currentIndex].role}
                                                </p>
                                            </div>
                                        </div>
                                        {filteredTestimonials[currentIndex].achievement && (
                                            <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
                                                {filteredTestimonials[currentIndex].achievement}
                                            </span>
                                        )}
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {filteredTestimonials.length > 1 && (
                                <>
                                    <button
                                        onClick={handlePrev}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <FaChevronLeft className="text-green-600 dark:text-green-400" />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        <FaChevronRight className="text-green-600 dark:text-green-400" />
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="flex justify-center gap-2 mt-6">
                            {filteredTestimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index
                                        ? 'w-8 bg-green-600 dark:bg-green-400'
                                        : 'bg-gray-300 dark:bg-gray-600'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Stats Component */}
                <Stats />

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="text-center mt-12"
                >
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        Join Our Squash Family
                        <FaTrophy />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;