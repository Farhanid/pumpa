import { motion } from 'framer-motion';
import {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaTwitter
} from 'react-icons/fa';

const SocialMediaLinks = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6 }
    };
  return (
    <div>
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







    </div>
  )
}

export default SocialMediaLinks