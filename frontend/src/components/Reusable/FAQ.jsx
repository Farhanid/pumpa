import { motion } from 'framer-motion';


const FAQ = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6 }
    };


  return (

    <div>
          {/* FAQ Section */}
          <section className="py-16 bg-white dark:bg-gray-900">
              <div className="container mx-auto px-4">
                  <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
                          Frequently Asked Questions
                      </h2>
                      <div className="space-y-6">
                          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                  How do I book a trial session?
                              </h3>
                              <p className="text-gray-600 dark:text-gray-400">
                                  You can book a trial session by contacting us via WhatsApp or phone call. We'll help you schedule a time that works best for you.
                              </p>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                  What age groups do you accept?
                              </h3>
                              <p className="text-gray-600 dark:text-gray-400">
                                  We accept students of all ages - from children as young as 5 years old to adults. Our coaching programs are tailored for different age groups and skill levels.
                              </p>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                  Do I need my own equipment?
                              </h3>
                              <p className="text-gray-600 dark:text-gray-400">
                                  We provide basic equipment for beginners. However, we recommend getting your own racket and goggles as you progress. We can advise you on the best equipment for your needs.
                              </p>
                          </div>
                      </div>
                  </motion.div>
              </div>
          </section>




    </div>
  )
}

export default FAQ