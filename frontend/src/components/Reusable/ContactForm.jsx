// // src/components/Common/ContactForm.jsx
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaArrowRight } from 'react-icons/fa';

// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         age: '',
//         message: ''
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

//     const handleInputChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     // Send WhatsApp message in background using CallMeBot
//     const sendWhatsAppInBackground = async (data) => {
//         try {
//             // Your WhatsApp number with country code (without +)
//             const phoneNumber = '919384420820'; // 91 is India country code

//             const message = `New Contact Form Submission from Pumpa Squash Academy:
        
// 📝 Name: ${data.name}
// 📧 Email: ${data.email}
// 📱 Phone: ${data.phone || 'Not provided'}
// 🎂 Age: ${data.age || 'Not provided'}
// 💬 Message: ${data.message}

// Sent via Website Contact Form`;

//             // Using CallMeBot API - works with personal WhatsApp
//             const url = `https://api.callmebot.com/whatsapp.php?phone=${phoneNumber}&text=${encodeURIComponent(message)}&apikey=YOUR_API_KEY`;

//             // Note: You need to get your API key from https://www.callmebot.com/
//             // After signing up, you'll get a unique API key for your WhatsApp

//             const response = await fetch(url);

//             if (response.ok) {
//                 console.log('WhatsApp notification sent successfully');
//             } else {
//                 console.log('WhatsApp notification failed, but form was saved');
//             }
//         } catch (error) {
//             // Silently fail - user shouldn't know
//             console.log('Background notification failed:', error);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         setIsSubmitting(true);
//         setSubmitStatus(null);

//         try {
//             // 1. Send to Formspree
//             const response = await fetch('https://formspree.io/f/xzdwzwkq', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     name: formData.name,
//                     email: formData.email,
//                     phone: formData.phone || 'Not provided',
//                     age: formData.age || 'Not provided',
//                     message: formData.message,
//                     _subject: 'New Contact Form Submission - Pumpa Squash Academy',
//                     _replyto: formData.email,
//                 }),
//             });

//             if (response.ok) {
//                 // 2. Send WhatsApp in background (user never knows)
//                 // Don't await - let it run in background
//                 sendWhatsAppInBackground(formData);

//                 // 3. Show success message to user
//                 setSubmitStatus('success');
//                 setFormData({ name: '', email: '', phone: '', age: '', message: '' });
//                 setTimeout(() => setSubmitStatus(null), 5000);
//             } else {
//                 setSubmitStatus('error');
//                 setTimeout(() => setSubmitStatus(null), 5000);
//             }
//         } catch (error) {
//             console.error('Submission error:', error);
//             setSubmitStatus('error');
//             setTimeout(() => setSubmitStatus(null), 5000);
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="max-w-4xl mx-auto"
//         >
//             {/* Section Header */}
//             <div className="text-center mb-12">
//                 <motion.div
//                     initial={{ scale: 0 }}
//                     whileInView={{ scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, type: "spring" }}
//                     className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6 mx-auto"
//                 >
//                     <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
//                     </svg>
//                 </motion.div>

//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//                     Send Us a Message
//                 </h2>

//                 <motion.div
//                     className="flex items-center justify-center gap-3 sm:gap-4 mb-4 mt-4 sm:mb-6"
//                     initial={{ opacity: 0, scaleX: 0 }}
//                     whileInView={{ opacity: 1, scaleX: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: 0.4 }}
//                 >
//                     <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-green-500" />
//                     <div className="flex gap-1">
//                         {[...Array(3)].map((_, i) => (
//                             <motion.div
//                                 key={i}
//                                 className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full"
//                                 initial={{ scale: 0 }}
//                                 whileInView={{ scale: 1 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: 0.5 + (i * 0.1) }}
//                             />
//                         ))}
//                     </div>
//                     <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-green-500" />
//                 </motion.div>

//                 <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//                     Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
//                 </p>
//             </div>

//             {/* Success Message */}
//             {submitStatus === 'success' && (
//                 <motion.div
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     className="mb-6 p-4 bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-l-4 border-green-500 rounded-lg text-green-700 dark:text-green-300 flex items-center gap-3"
//                 >
//                     <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                     </svg>
//                     <div>
//                         <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon!
//                     </div>
//                 </motion.div>
//             )}

//             {/* Error Message */}
//             {submitStatus === 'error' && (
//                 <motion.div
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-lg text-red-700 dark:text-red-300 flex items-center gap-3"
//                 >
//                     <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                     </svg>
//                     <div>
//                         <strong>Oops!</strong> Something went wrong. Please try again or contact us directly.
//                     </div>
//                 </motion.div>
//             )}

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                     <motion.div
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.1 }}
//                     >
//                         <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
//                             Your Name <span className="text-green-500">*</span>
//                         </label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleInputChange}
//                             required
//                             disabled={isSubmitting}
//                             className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md"
//                             placeholder="Enter your name"
//                         />
//                     </motion.div>

//                     <motion.div
//                         initial={{ opacity: 0, x: 20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.2 }}
//                     >
//                         <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
//                             Email Address <span className="text-green-500">*</span>
//                         </label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             required
//                             disabled={isSubmitting}
//                             className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md"
//                             placeholder="Enter your email"
//                         />
//                     </motion.div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                     <motion.div
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.3 }}
//                     >
//                         <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
//                             Phone Number <span className="text-gray-400 text-sm">(Optional)</span>
//                         </label>
//                         <input
//                             type="tel"
//                             name="phone"
//                             value={formData.phone}
//                             onChange={handleInputChange}
//                             disabled={isSubmitting}
//                             className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md"
//                             placeholder="Enter your phone number"
//                         />
//                     </motion.div>

//                     <motion.div
//                         initial={{ opacity: 0, x: 20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: 0.35 }}
//                     >
//                         <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
//                             Age <span className="text-gray-400 text-sm">(Optional)</span>
//                         </label>
//                         <input
//                             type="number"
//                             name="age"
//                             value={formData.age}
//                             onChange={handleInputChange}
//                             disabled={isSubmitting}
//                             min="1"
//                             max="100"
//                             className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md"
//                             placeholder="Enter your age"
//                         />
//                     </motion.div>
//                 </div>

//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.4 }}
//                 >
//                     <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
//                         Your Message <span className="text-green-500">*</span>
//                     </label>
//                     <textarea
//                         name="message"
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         required
//                         rows="5"
//                         disabled={isSubmitting}
//                         className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md"
//                         placeholder="Tell us how we can help you..."
//                     ></textarea>
//                 </motion.div>

//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.5 }}
//                     className="flex justify-center"
//                 >
//                     <button
//                         type="submit"
//                         disabled={isSubmitting}
//                         className="group relative px-8 py-4 bg-linear-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 overflow-hidden"
//                     >
//                         <span className="absolute inset-0 bg-linear-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>

//                         {isSubmitting ? (
//                             <>
//                                 <svg className="animate-spin h-5 w-5 text-white relative z-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                                 </svg>
//                                 <span className="relative z-10">Sending...</span>
//                             </>
//                         ) : (
//                             <>
//                                 <span className="relative z-10">Send Message</span>
//                                 <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
//                             </>
//                         )}
//                     </button>
//                 </motion.div>
//             </form>

//             {/* Contact Info Note */}
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.6 }}
//                 className="mt-8 text-center"
//             >
//                 <p className="text-sm text-gray-500 dark:text-gray-400">
//                     📞 Or call us directly at <a href="tel:01111989375" className="text-green-600 dark:text-green-400 hover:underline">011-1198 9375</a>
//                 </p>
//             </motion.div>
//         </motion.div>
//     );
// };

// export default ContactForm;




// src/components/Common/ContactForm.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Send WhatsApp message in background using WhatsApp API
    const sendWhatsAppInBackground = async (data) => {
        try {
            // Your WhatsApp number with country code
            // const phoneNumber = '601111989375'; // Malaysia country code
            const phoneNumber = '9384420820'; 

            // Format the message
            const message = `New Contact Form Submission from Pumpa Squash Academy:
            
📝 Name: ${data.name}
📧 Email: ${data.email}
📱 Phone: ${data.phone || 'Not provided'}
🎂 Age: ${data.age || 'Not provided'}
💬 Message: ${data.message}

Sent via Website Contact Form`;

            // WhatsApp API URL - opens WhatsApp with pre-filled message
            const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

            // Open WhatsApp in a new tab/window (silent, user won't notice if we use a hidden iframe or fetch)
            // Using fetch to silently send the request
            await fetch(url, {
                method: 'GET',
                mode: 'no-cors' // This prevents CORS errors
            });

            console.log('WhatsApp notification sent successfully');
        } catch (error) {
            // Silently fail - user shouldn't know
            console.log('Background WhatsApp notification failed:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // 1. Send to Formspree
            const response = await fetch('https://formspree.io/f/xzdwzwkq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone || 'Not provided',
                    age: formData.age || 'Not provided',
                    message: formData.message,
                    _subject: 'New Contact Form Submission - Pumpa Squash Academy',
                    _replyto: formData.email,
                }),
            });

            if (response.ok) {
                // 2. Send WhatsApp in background - don't await, let it run silently
                // Use a hidden iframe or fetch to open WhatsApp without user noticing
                sendWhatsAppInBackground(formData);

                // 3. Show success message to user
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', age: '', message: '' });
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                setSubmitStatus('error');
                setTimeout(() => setSubmitStatus(null), 5000);
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
        >
            {/* Section Header */}
            <div className="text-center mb-12">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6 mx-auto"
                >
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Send Us a Message
                </h2>

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

                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6 p-4 bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-l-4 border-green-500 rounded-lg text-green-700 dark:text-green-300 flex items-center gap-3"
                >
                    <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        <strong>Thank you!</strong> Your message has been sent successfully. We'll get back to you soon!
                    </div>
                </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-lg text-red-700 dark:text-red-300 flex items-center gap-3"
                >
                    <svg className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        <strong>Oops!</strong> Something went wrong. Please try again or contact us directly.
                    </div>
                </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                            Your Name <span className="text-green-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md"
                            placeholder="Enter your name"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                            Email Address <span className="text-green-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md"
                            placeholder="Enter your email"
                        />
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                            Phone Number <span className="text-gray-400 text-sm">(Optional)</span>
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md"
                            placeholder="Enter your phone number"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.35 }}
                    >
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                            Age <span className="text-gray-400 text-sm">(Optional)</span>
                        </label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                            min="1"
                            max="100"
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md"
                            placeholder="Enter your age"
                        />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                        Your Message <span className="text-green-500">*</span>
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="5"
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md"
                        placeholder="Tell us how we can help you..."
                    ></textarea>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center"
                >
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative px-8 py-4 bg-linear-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-linear-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>

                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white relative z-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span className="relative z-10">Sending...</span>
                            </>
                        ) : (
                            <>
                                <span className="relative z-10">Send Message</span>
                                <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </motion.div>
            </form>

            {/* Contact Info Note */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-8 text-center"
            >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    📞 Or call us directly at <a href="tel:01111989375" className="text-green-600 dark:text-green-400 hover:underline">011-1198 9375</a>
                </p>
            </motion.div>
        </motion.div>
    );
};

export default ContactForm;