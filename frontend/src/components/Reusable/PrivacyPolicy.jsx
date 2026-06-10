import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaUserSecret, FaCookie, FaEnvelope, FaDatabase, FaGlobe, FaFileContract } from 'react-icons/fa';

const PrivacyPolicy = () => {
    const lastUpdated = "January 15, 2025";

    const sections = [
        {
            id: "information",
            icon: FaDatabase,
            title: "Information We Collect",
            content: (
                <div className="space-y-3">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        At Pumba Squash Academy, we collect information to provide better services to all our users. We collect:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                        <li><span className="font-semibold">Personal Information:</span> Name, email address, phone number, date of birth, and emergency contact details</li>
                        <li><span className="font-semibold">Training Information:</span> Skill level, training history, progress records, and medical conditions relevant to training</li>
                        <li><span className="font-semibold">Payment Information:</span> Billing details, transaction history, and payment method information</li>
                        <li><span className="font-semibold">Technical Data:</span> IP address, browser type, device information, and website usage analytics</li>
                        <li><span className="font-semibold">Communication Data:</span> Email correspondence, phone call records, and messages sent through our platforms</li>
                    </ul>
                </div>
            )
        },
        {
            id: "usage",
            icon: FaUserSecret,
            title: "How We Use Your Information",
            content: (
                <div className="space-y-3">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        We use the information we collect for the following purposes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                        <li>To register you for classes, programs, and events at Pumba Squash Academy</li>
                        <li>To track your progress and personalize training programs based on your skill level</li>
                        <li>To communicate important updates about schedules, cancellations, and academy news</li>
                        <li>To process payments and manage your account subscriptions</li>
                        <li>To ensure safety during training sessions by being aware of medical conditions</li>
                        <li>To improve our services, facilities, and overall customer experience</li>
                        <li>To comply with legal obligations and safety regulations</li>
                    </ul>
                </div>
            )
        },
        {
            id: "legal",
            icon: FaFileContract,
            title: "Legal Basis for Processing",
            content: (
                <div className="space-y-3">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        We process your personal information under the following legal bases:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                        <li><span className="font-semibold">Contractual Necessity:</span> To fulfill our agreement when you register for our training programs</li>
                        <li><span className="font-semibold">Legitimate Interests:</span> To improve our services and ensure the safety of all participants</li>
                        <li><span className="font-semibold">Legal Compliance:</span> To meet our obligations under Malaysian laws and regulations</li>
                        <li><span className="font-semibold">Consent:</span> For marketing communications where you've given explicit permission</li>
                    </ul>
                </div>
            )
        },
        {
            id: "sharing",
            icon: FaGlobe,
            title: "Information Sharing & Disclosure",
            content: (
                <div className="space-y-3">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        We do not sell your personal information. We may share your information in these limited circumstances:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                        <li><span className="font-semibold">Service Providers:</span> Payment processors, email service providers, and IT support services</li>
                        <li><span className="font-semibold">Emergency Services:</span> When necessary to protect health and safety during incidents</li>
                        <li><span className="font-semibold">Legal Requirements:</span> When required by law, court order, or government regulations</li>
                        <li><span className="font-semibold">Academy Affiliates:</span> With other Pumpa Squash Academy locations for coordinated training</li>
                        <li><span className="font-semibold">With Your Consent:</span> Any other situation where you have explicitly agreed</li>
                    </ul>
                </div>
            )
        },
        {
            id: "security",
            icon: FaLock,
            title: "Data Security",
            content: (
                <div className="space-y-3">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        We implement robust security measures to protect your information:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                        <li>SSL encryption for all data transmitted through our website</li>
                        <li>Secure servers protected by firewalls and access controls</li>
                        <li>Regular security audits and vulnerability assessments</li>
                        <li>Limited staff access to personal information on a need-to-know basis</li>
                        <li>Secure payment processing through PCI-compliant providers</li>
                        <li>Data backup and disaster recovery procedures</li>
                    </ul>
                    <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                        <p className="text-sm text-amber-800 dark:text-amber-300">
                            <strong>⚠️ Important Note:</strong> While we take every precaution, no method of transmission over the internet is 100% secure. We encourage you to protect your account credentials and notify us immediately of any suspected breach.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: "cookies",
            icon: FaCookie,
            title: "Cookies & Tracking Technologies",
            content: (
                <div className="space-y-3">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        We use cookies and similar technologies to enhance your experience:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                        <li><span className="font-semibold">Essential Cookies:</span> Required for basic website functionality and secure login</li>
                        <li><span className="font-semibold">Analytics Cookies:</span> Help us understand how visitors interact with our website</li>
                        <li><span className="font-semibold">Preference Cookies:</span> Remember your language and display preferences</li>
                        <li><span className="font-semibold">Marketing Cookies:</span> Used to deliver relevant advertisements (only with consent)</li>
                    </ul>
                    <p className="text-gray-600 dark:text-gray-400 mt-3">
                        You can control cookie preferences through your browser settings. However, disabling certain cookies may affect website functionality.
                    </p>
                </div>
            )
        },
        {
            id: "rights",
            icon: FaShieldAlt,
            title: "Your Privacy Rights",
            content: (
                <div className="space-y-3">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Under applicable privacy laws, you have the following rights:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                        <li><span className="font-semibold">Access:</span> Request a copy of your personal information we hold</li>
                        <li><span className="font-semibold">Correction:</span> Request corrections to inaccurate or incomplete information</li>
                        <li><span className="font-semibold">Deletion:</span> Request deletion of your information (subject to legal obligations)</li>
                        <li><span className="font-semibold">Restriction:</span> Request limitation of how we process your information</li>
                        <li><span className="font-semibold">Portability:</span> Request transfer of your data to another service provider</li>
                        <li><span className="font-semibold">Objection:</span> Object to certain types of processing, including marketing</li>
                        <li><span className="font-semibold">Withdraw Consent:</span> Withdraw previously given consent at any time</li>
                    </ul>
                    <p className="text-gray-600 dark:text-gray-400 mt-3">
                        To exercise any of these rights, please contact our Data Protection Officer using the information below.
                    </p>
                </div>
            )
        },
        {
            id: "retention",
            icon: FaDatabase,
            title: "Data Retention",
            content: (
                <div className="space-y-3">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        We retain your personal information for as long as necessary to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                        <li>Provide our training services and maintain your active account</li>
                        <li>Comply with legal obligations (tax, accounting, and safety regulations)</li>
                        <li>Resolve disputes and enforce our agreements</li>
                        <li>Maintain training and medical records for insurance purposes</li>
                    </ul>
                    <p className="text-gray-600 dark:text-gray-400 mt-3">
                        Inactive accounts are typically deleted after 24 months of inactivity, unless legal requirements specify otherwise.
                    </p>
                </div>
            )
        },
        {
            id: "children",
            icon: FaUserSecret,
            title: "Children's Privacy",
            content: (
                <div className="space-y-3">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        We take children's privacy seriously:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                        <li>We collect information about children only with parental or guardian consent</li>
                        <li>Parents/guardians have full access to their child's training records</li>
                        <li>We do not market directly to children or collect unnecessary information</li>
                        <li>Photography and video consent is always obtained from parents/guardians</li>
                        <li>Parents may request deletion of their child's information at any time</li>
                    </ul>
                    <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <p className="text-sm text-blue-800 dark:text-blue-300">
                            <strong>👨‍👩‍👧 Parental Notice:</strong> If you believe your child has provided us with information without your consent, please contact us immediately.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: "international",
            icon: FaGlobe,
            title: "International Data Transfers",
            content: (
                <div className="space-y-3">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Pumba Squash Academy operates primarily in Malaysia. However:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                        <li>We may use service providers located in other countries</li>
                        <li>Your information may be transferred to countries with different privacy laws</li>
                        <li>We ensure appropriate safeguards are in place for all international transfers</li>
                        <li>By using our services, you consent to such transfers when necessary</li>
                    </ul>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-16">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-900 shadow-md px-5 py-2 rounded-full mb-6">
                        <FaShieldAlt className="text-green-600 dark:text-green-400 text-sm" />
                        <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm">Privacy & Security</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Privacy Policy
                    </h1>

                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent to-green-500"></div>
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <div className="w-12 h-px bg-gradient-to-l from-transparent to-green-500"></div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
                    </p>

                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
                        Last Updated: {lastUpdated}
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="space-y-6">
                    {sections.map((section, index) => {
                        const Icon = section.icon;
                        return (
                            <motion.div
                                key={section.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800/50 px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                                            <Icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                                        </div>
                                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {section.title}
                                        </h2>
                                    </div>
                                </div>
                                <div className="px-6 py-6">
                                    {section.content}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Contact Information */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border border-green-200 dark:border-gray-700"
                >
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                            <FaEnvelope className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Contact Us About Privacy
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact our Data Protection Officer:
                            </p>
                            <div className="space-y-2 text-sm">
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Email:</span>{' '}
                                    <a href="mailto:privacy@pumpasquash.com" className="text-green-600 dark:text-green-400 hover:underline">
                                        privacy@pumpasquash.com
                                    </a>
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Phone:</span>{' '}
                                    <a href="tel:+601111989375" className="text-green-600 dark:text-green-400 hover:underline">
                                        +60 11-1198 9375
                                    </a>
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Address:</span> 123 Sports Complex, Kuala Lumpur, Malaysia
                                </p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    <span className="font-semibold">Response Time:</span> We typically respond within 5-7 business days
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Policy Updates Notice */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="mt-8 text-center"
                >
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                        This Privacy Policy may be updated periodically. We will notify you of any material changes via email or through our website.
                    </p>
                </motion.div>               


            </div>
        </div>
    );
};

export default PrivacyPolicy;