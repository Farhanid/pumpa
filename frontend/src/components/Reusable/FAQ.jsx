
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
//             icon: FaCalendarAlt
//         },
//         {
//             id: 2,
//             question: "What age groups do you accept?",
//             answer: "We accept students of all ages - from children as young as 5 years old to adults aged 60+. Our coaching programs are carefully tailored for different age groups and skill levels, ensuring everyone receives appropriate training and attention.",
//             icon: FaUserGraduate
//         },
//         {
//             id: 3,
//             question: "Do I need my own equipment?",
//             answer: "We provide basic equipment for beginners including rackets and balls. However, we recommend getting your own racket and protective goggles as you progress in your training. Our coaches can advise you on the best equipment suited to your playing style and budget.",
//             icon: FaMedal
//         },
//         {
//             id: 4,
//             question: "What are your operating hours?",
//             answer: "Our academy operates Monday to Friday from 6:00 AM to 10:00 PM, Saturday from 8:00 AM to 8:00 PM, and Sunday from 9:00 AM to 6:00 PM. We offer flexible scheduling to accommodate different lifestyles and commitments.",
//             icon: FaClock
//         },
//         {
//             id: 5,
//             question: "What is your pricing structure?",
//             answer: "We offer various packages including pay-per-session, monthly memberships, and long-term training programs. Prices vary based on program type, duration, and skill level. Contact us for a personalized quote based on your specific requirements.",
//             icon: FaDollarSign
//         },
//         {
//             id: 6,
//             question: "Where are you located?",
//             answer: "We are located at 123 Sports Complex, Kuala Lumpur, Malaysia. Our facility features professional-grade squash courts, changing rooms, and a waiting area for parents. Free parking is available for all students.",
//             icon: FaMapMarkerAlt
//         }
//     ];

//     const toggleFAQ = (index) => {
//         setOpenIndex(openIndex === index ? null : index);
//     };

//     return (
//         <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 overflow-hidden">
//             <div className="container mx-auto px-4 max-w-4xl">
//                 {/* Header Section */}
//                 <motion.div
//                     {...fadeInUp}
//                     className="text-center mb-16"
//                 >
//                     <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 shadow-md px-5 py-2 rounded-full mb-6">
//                         <FaQuestionCircle className="text-green-600 dark:text-green-400 text-sm" />
//                         <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm">FAQ</span>
//                     </div>

//                     <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//                         Frequently Asked
//                         <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Questions</span>
//                     </h1>

//                     <div className="flex items-center justify-center gap-3 mb-6">
//                         <div className="w-12 h-px bg-gradient-to-r from-transparent to-green-500"></div>
//                         <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
//                         <div className="w-12 h-px bg-gradient-to-l from-transparent to-green-500"></div>
//                     </div>

//                     <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//                         Find answers to common questions about our academy, programs, and facilities. Can't find what you're looking for? Contact us directly!
//                     </p>
//                 </motion.div>

//                 {/* FAQ Accordion */}
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.2 }}
//                     className="space-y-4"
//                 >
//                     {faqs.map((faq, index) => {
//                         const Icon = faq.icon;
//                         const isOpen = openIndex === index;

//                         return (
//                             <motion.div
//                                 key={faq.id}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: index * 0.1 }}
//                                 className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
//                             >
//                                 <button
//                                     onClick={() => toggleFAQ(index)}
//                                     className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50/20 dark:hover:bg-gray-750 transition-colors duration-200"
//                                 >
//                                     <div className="flex items-center gap-4">
//                                         <div className="p-2 bg-green-50 dark:bg-green-900/30 rounded-xl">
//                                             <Icon className="w-5 h-5 text-green-600 dark:text-green-400" />
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

//                 {/* Bottom gradient line */}
//                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400/50 dark:via-green-500/30 to-transparent" />
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
        <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header Section */}
                <motion.div
                    {...fadeInUp}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 shadow-md px-5 py-2 rounded-full mb-6">
                        <FaQuestionCircle className="text-green-600 dark:text-green-400 text-sm" />
                        <span className="text-gray-700 dark:text-gray-300 font-semibold text-xs sm:text-sm tracking-[0.15em] uppercase">FAQ</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-[1.1] tracking-tight">
                        Frequently Asked
                        <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-display"> Questions</span>
                    </h1>

                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-green-500"></div>
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-green-500"></div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-[1.8] font-light tracking-wide">
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
                                    className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between hover:bg-gray-50/20 dark:hover:bg-gray-750 transition-colors duration-200"
                                >
                                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                                        <div className="p-2 sm:p-2.5 bg-green-50 dark:bg-green-900/30 rounded-xl flex-shrink-0">
                                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" />
                                        </div>
                                        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white text-left tracking-wide">
                                            {faq.question}
                                        </h3>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0 ml-2"
                                    >
                                        <FaChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
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
                                            <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-gray-100 dark:border-gray-700">
                                                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-[1.8] font-light tracking-wide pl-12 sm:pl-14">
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

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400/50 dark:via-green-500/30 to-transparent" />
            </div>
        </div>
    );
};

export default FAQ;