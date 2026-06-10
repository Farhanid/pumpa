// import { motion } from 'framer-motion';


// const FAQ = () => {

//     const fadeInUp = {
//         initial: { opacity: 0, y: 60 },
//         whileInView: { opacity: 1, y: 0 },
//         viewport: { once: true, margin: "-100px" },
//         transition: { duration: 0.6 }
//     };


//   return (

//     <div>
//           {/* FAQ Section */}
//           <section className="py-16 bg-white dark:bg-gray-900">
//               <div className="container mx-auto px-4">
//                   <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
//                       <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
//                           Frequently Asked Questions
//                       </h2>
//                       <div className="space-y-6">
//                           <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
//                               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
//                                   How do I book a trial session?
//                               </h3>
//                               <p className="text-gray-600 dark:text-gray-400">
//                                   You can book a trial session by contacting us via WhatsApp or phone call. We'll help you schedule a time that works best for you.
//                               </p>
//                           </div>
//                           <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
//                               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
//                                   What age groups do you accept?
//                               </h3>
//                               <p className="text-gray-600 dark:text-gray-400">
//                                   We accept students of all ages - from children as young as 5 years old to adults. Our coaching programs are tailored for different age groups and skill levels.
//                               </p>
//                           </div>
//                           <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
//                               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
//                                   Do I need my own equipment?
//                               </h3>
//                               <p className="text-gray-600 dark:text-gray-400">
//                                   We provide basic equipment for beginners. However, we recommend getting your own racket and goggles as you progress. We can advise you on the best equipment for your needs.
//                               </p>
//                           </div>
//                       </div>
//                   </motion.div>
//               </div>
//           </section>




//     </div>
//   )
// }

// export default FAQ




















// import { motion, AnimatePresence } from 'framer-motion';
// import { useState } from 'react';
// import {
//     FaChevronDown,
//     FaQuestionCircle,
//     FaWhatsapp,
//     FaEnvelope,
//     FaPhone,
//     FaUserGraduate,
//     FaCalendarAlt,
//     FaClock,
//     FaDollarSign,
//     FaMedal,
//     FaMapMarkerAlt,
//     FaShieldAlt
// } from 'react-icons/fa';

// const FAQ = () => {
//     const [openIndex, setOpenIndex] = useState(null);

//     const fadeInUp = {
//         initial: { opacity: 0, y: 60 },
//         whileInView: { opacity: 1, y: 0 },
//         viewport: { once: true, margin: "-100px" },
//         transition: { duration: 0.6 }
//     };

//     const faqs = [
//         {
//             id: 1,
//             question: "How do I book a trial session?",
//             answer: "You can book a trial session by contacting us via WhatsApp, phone call, or through our online booking form. Simply reach out to our team, and we'll help you schedule a time that works best for you. Trial sessions are available Monday through Saturday.",
//             icon: FaCalendarAlt,
//             category: "Booking"
//         },
//         {
//             id: 2,
//             question: "What age groups do you accept?",
//             answer: "We accept students of all ages - from children as young as 5 years old to adults aged 60+. Our coaching programs are carefully tailored for different age groups and skill levels, ensuring everyone receives appropriate training and attention.",
//             icon: FaUserGraduate,
//             category: "General"
//         },
//         {
//             id: 3,
//             question: "Do I need my own equipment?",
//             answer: "We provide basic equipment for beginners including rackets and balls. However, we recommend getting your own racket and protective goggles as you progress in your training. Our coaches can advise you on the best equipment suited to your playing style and budget.",
//             icon: FaMedal,
//             category: "Equipment"
//         },
//         {
//             id: 4,
//             question: "What are your operating hours?",
//             answer: "Our academy operates Monday to Friday from 6:00 AM to 10:00 PM, Saturday from 8:00 AM to 8:00 PM, and Sunday from 9:00 AM to 6:00 PM. We offer flexible scheduling to accommodate different lifestyles and commitments.",
//             icon: FaClock,
//             category: "Schedule"
//         },
//         {
//             id: 5,
//             question: "What is your pricing structure?",
//             answer: "We offer various packages including pay-per-session, monthly memberships, and long-term training programs. Prices vary based on program type, duration, and skill level. Contact us for a personalized quote based on your specific requirements.",
//             icon: FaDollarSign,
//             category: "Pricing"
//         },
//         {
//             id: 6,
//             question: "Do you offer competitive training?",
//             answer: "Yes! We have dedicated programs for competitive players who wish to participate in tournaments. Our advanced coaching focuses on strategy, mental toughness, and tournament preparation. Many of our students have successfully competed at state and national levels.",
//             icon: FaMedal,
//             category: "Training"
//         },
//         {
//             id: 7,
//             question: "What safety measures do you have in place?",
//             answer: "We prioritize safety with proper court maintenance, first-aid facilities, trained staff, and strict adherence to safety protocols. All students are required to wear protective eyewear during sessions, and our facilities are regularly sanitized.",
//             icon: FaShieldAlt,
//             category: "Safety"
//         },
//         {
//             id: 8,
//             question: "Where are you located?",
//             answer: "We are located at 123 Sports Complex, Kuala Lumpur, Malaysia. Our facility features professional-grade squash courts, changing rooms, and a waiting area for parents. Free parking is available for all students.",
//             icon: FaMapMarkerAlt,
//             category: "Location"
//         }
//     ];

//     const categories = [...new Set(faqs.map(faq => faq.category))];
//     const [activeCategory, setActiveCategory] = useState("All");

//     const filteredFaqs = activeCategory === "All"
//         ? faqs
//         : faqs.filter(faq => faq.category === activeCategory);

//     const toggleFAQ = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
//             <div className="container mx-auto px-4 max-w-5xl">
//                 {/* Header Section */}
//                 <motion.div
//                     {...fadeInUp}
//                     className="text-center mb-16"
//                 >
//                     <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 shadow-md px-5 py-2 rounded-full mb-6">
//                         <FaQuestionCircle className="text-blue-600 dark:text-blue-400 text-sm" />
//                         <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm">FAQ</span>
//                     </div>

//                     <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//                         Frequently Asked
//                         <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Questions</span>
//                     </h1>

//                     <div className="flex items-center justify-center gap-3 mb-6">
//                         <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500"></div>
//                         <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
//                         <div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-500"></div>
//                     </div>

//                     <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//                         Find answers to common questions about our academy, programs, and facilities. Can't find what you're looking for? Contact us directly!
//                     </p>
//                 </motion.div>

//                 {/* Category Filters */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.2 }}
//                     className="flex flex-wrap justify-center gap-3 mb-12"
//                 >
//                     <button
//                         onClick={() => setActiveCategory("All")}
//                         className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === "All"
//                                 ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
//                                 : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
//                             }`}
//                     >
//                         All Questions
//                     </button>
//                     {categories.map((category) => (
//                         <button
//                             key={category}
//                             onClick={() => setActiveCategory(category)}
//                             className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category
//                                     ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
//                                     : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
//                                 }`}
//                         >
//                             {category}
//                         </button>
//                     ))}
//                 </motion.div>

//                 {/* FAQ Accordion */}
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.3 }}
//                     className="space-y-4"
//                 >
//                     {filteredFaqs.map((faq, index) => {
//                         const Icon = faq.icon;
//                         const isOpen = openIndex === index;

//                         return (
//                             <motion.div
//                                 key={faq.id}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: index * 0.05 }}
//                                 className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
//                             >
//                                 <button
//                                     onClick={() => toggleFAQ(index)}
//                                     className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-200"
//                                 >
//                                     <div className="flex items-center gap-4">
//                                         <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
//                                             <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
//                                         </div>
//                                         <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-left">
//                                             {faq.question}
//                                         </h3>
//                                     </div>
//                                     <motion.div
//                                         animate={{ rotate: isOpen ? 180 : 0 }}
//                                         transition={{ duration: 0.3 }}
//                                     >
//                                         <FaChevronDown className="w-5 h-5 text-gray-400" />
//                                     </motion.div>
//                                 </button>

//                                 <AnimatePresence>
//                                     {isOpen && (
//                                         <motion.div
//                                             initial={{ height: 0, opacity: 0 }}
//                                             animate={{ height: "auto", opacity: 1 }}
//                                             exit={{ height: 0, opacity: 0 }}
//                                             transition={{ duration: 0.3 }}
//                                             className="overflow-hidden"
//                                         >
//                                             <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700">
//                                                 <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-14">
//                                                     {faq.answer}
//                                                 </p>
//                                             </div>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </motion.div>
//                         );
//                     })}
//                 </motion.div>

//                 {/* Still Have Questions Section */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.5 }}
//                     className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center"
//                 >
//                     <h3 className="text-2xl font-bold text-white mb-3">
//                         Still Have Questions?
//                     </h3>
//                     <p className="text-blue-100 mb-6 max-w-md mx-auto">
//                         Can't find the answer you're looking for? Please contact our friendly team.
//                     </p>
//                     <div className="flex flex-wrap justify-center gap-4">
//                         <a
//                             href="https://wa.me/601111989375"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
//                         >
//                             <FaWhatsapp className="w-4 h-4" />
//                             WhatsApp Us
//                         </a>
//                         <a
//                             href="mailto:info@pumpasquash.com"
//                             className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-400 transition-all duration-300 hover:-translate-y-0.5"
//                         >
//                             <FaEnvelope className="w-4 h-4" />
//                             Email Us
//                         </a>
//                         <a
//                             href="tel:+601111989375"
//                             className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-xl font-semibold hover:bg-purple-400 transition-all duration-300 hover:-translate-y-0.5"
//                         >
//                             <FaPhone className="w-4 h-4" />
//                             Call Us
//                         </a>
//                     </div>
//                 </motion.div>

//                 {/* Quick Stats */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.6 }}
//                     className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
//                 >
//                     <div className="text-center">
//                         <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
//                         <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Support Response</div>
//                     </div>
//                     <div className="text-center">
//                         <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">500+</div>
//                         <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Happy Students</div>
//                     </div>
//                     <div className="text-center">
//                         <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</div>
//                         <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Years Experience</div>
//                     </div>
//                     <div className="text-center">
//                         <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">100%</div>
//                         <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Satisfaction Rate</div>
//                     </div>
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default FAQ;




import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
    FaChevronDown,
    FaQuestionCircle,
    FaWhatsapp,
    FaEnvelope,
    FaPhone,
    FaUserGraduate,
    FaCalendarAlt,
    FaClock,
    FaDollarSign,
    FaMedal,
    FaMapMarkerAlt,
    FaShieldAlt
} from 'react-icons/fa';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6 }
    };

    const faqs = [
        {
            id: 1,
            question: "How do I book a trial session?",
            answer: "You can book a trial session by contacting us via WhatsApp, phone call, or through our online booking form. Simply reach out to our team, and we'll help you schedule a time that works best for you. Trial sessions are available Monday through Saturday.",
            icon: FaCalendarAlt
        },
        {
            id: 2,
            question: "What age groups do you accept?",
            answer: "We accept students of all ages - from children as young as 5 years old to adults aged 60+. Our coaching programs are carefully tailored for different age groups and skill levels, ensuring everyone receives appropriate training and attention.",
            icon: FaUserGraduate
        },
        {
            id: 3,
            question: "Do I need my own equipment?",
            answer: "We provide basic equipment for beginners including rackets and balls. However, we recommend getting your own racket and protective goggles as you progress in your training. Our coaches can advise you on the best equipment suited to your playing style and budget.",
            icon: FaMedal
        },
        {
            id: 4,
            question: "What are your operating hours?",
            answer: "Our academy operates Monday to Friday from 6:00 AM to 10:00 PM, Saturday from 8:00 AM to 8:00 PM, and Sunday from 9:00 AM to 6:00 PM. We offer flexible scheduling to accommodate different lifestyles and commitments.",
            icon: FaClock
        },
        {
            id: 5,
            question: "What is your pricing structure?",
            answer: "We offer various packages including pay-per-session, monthly memberships, and long-term training programs. Prices vary based on program type, duration, and skill level. Contact us for a personalized quote based on your specific requirements.",
            icon: FaDollarSign
        },
        {
            id: 6,
            question: "Where are you located?",
            answer: "We are located at 123 Sports Complex, Kuala Lumpur, Malaysia. Our facility features professional-grade squash courts, changing rooms, and a waiting area for parents. Free parking is available for all students.",
            icon: FaMapMarkerAlt
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header Section */}
                <motion.div
                    {...fadeInUp}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 shadow-md px-5 py-2 rounded-full mb-6">
                        <FaQuestionCircle className="text-green-600 dark:text-green-400 text-sm" />
                        <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm">FAQ</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Frequently Asked
                        <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Questions</span>
                    </h1>

                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-green-500"></div>
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-green-500"></div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Find answers to common questions about our academy, programs, and facilities. Can't find what you're looking for? Contact us directly!
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                >
                    {faqs.map((faq, index) => {
                        const Icon = faq.icon;
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={faq.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50/20 dark:hover:bg-gray-750 transition-colors duration-200"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded-xl">
                                            <Icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-left">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <FaChevronDown className="w-5 h-5 text-gray-400" />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700">
                                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-14">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </motion.div>

              
               
            </div>
        </div>
    );
};

export default FAQ;