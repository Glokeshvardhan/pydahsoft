import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        // Reset submission status after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <section className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen pt-16 pb-20 px-4 sm:px-6 lg:px-8">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-40 h-40 bg-green-100 rounded-full filter blur-3xl opacity-30"
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 20, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/3 w-60 h-60 bg-green-100 rounded-full filter blur-3xl opacity-30"
                    animate={{
                        y: [0, 20, 0],
                        x: [0, -20, 0]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3
                    }}
                />
            </div>

            {/* Header Section */}
            <motion.div
                className="text-center mb-12 md:mb-16 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Connect</span>
                </motion.h2>
                <motion.p
                    className="text-base sm:text-lg text-gray-600 px-2 sm:px-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    We'd love to hear from you! Whether you have a question about our services,
                    want to discuss a project, or just want to say hello, our team is ready to help.
                </motion.p>
            </motion.div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 order-2 lg:order-1"
                >
                    <motion.h3
                        className="text-xl sm:text-2xl font-bold text-gray-800 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Send Us a Message
                    </motion.h3>

                    {isSubmitted && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg"
                        >
                            Thank you for your message! We'll get back to you soon.
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <motion.div
                            className="flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                />
                                <motion.div
                                    className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                                    initial={{ width: 0 }}
                                    whileFocus={{ width: '100%' }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                />
                                <motion.div
                                    className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                                    initial={{ width: 0 }}
                                    whileFocus={{ width: '100%' }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1">Your Message</label>
                            <div className="relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="How can we help you?"
                                    rows="4"
                                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                />
                                <motion.div
                                    className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                                    initial={{ width: 0 }}
                                    whileFocus={{ width: '100%' }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </motion.div>

                        <motion.button
                            type="submit"
                            className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10">Send Message</span>
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ opacity: 0 }}
                            />
                        </motion.button>
                    </form>
                </motion.div>

                {/* Contact Information & Map */}
                <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                    >
                        <motion.div
                            className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex items-center mb-3 sm:mb-4">
                                <div className="p-2 sm:p-3 bg-blue-100 rounded-full mr-3 sm:mr-4">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 text-lg sm:text-xl" />
                                </div>
                                <h4 className="text-base sm:text-lg font-semibold text-gray-800">Our Location</h4>
                            </div>
                            <p className="text-sm sm:text-base text-gray-600">
                                Kakinada - Yanam Road, Patavala, Tallarevu (M),
                                Kakinada District, Andhra Pradesh, India
                                Pincode 533461
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            <div className="flex items-center mb-3 sm:mb-4">
                                <div className="p-2 sm:p-3 bg-green-100 rounded-full mr-3 sm:mr-4">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-green-600 text-lg sm:text-xl" />
                                </div>
                                <h4 className="text-base sm:text-lg font-semibold text-gray-800">Email Us</h4>
                            </div>
                            <p className="text-sm sm:text-base text-gray-600">team@pydahsoft.in</p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                        >
                            <div className="flex items-center mb-3 sm:mb-4">
                                <div className="p-2 sm:p-3 bg-purple-100 rounded-full mr-3 sm:mr-4">
                                    <FontAwesomeIcon icon={faPhone} className="text-purple-600 text-lg sm:text-xl" />
                                </div>
                                <h4 className="text-base sm:text-lg font-semibold text-gray-800">Call Us</h4>
                            </div>
                            <p className="text-sm sm:text-base text-gray-600">+91 99513 54444</p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                        >
                            <div className="flex items-center mb-3 sm:mb-4">
                                <div className="p-2 sm:p-3 bg-yellow-100 rounded-full mr-3 sm:mr-4">
                                    <FontAwesomeIcon icon={faClock} className="text-yellow-600 text-lg sm:text-xl" />
                                </div>
                                <h4 className="text-base sm:text-lg font-semibold text-gray-800">Working Hours</h4>
                            </div>
                            <p className="text-sm sm:text-base text-gray-600">Mon-sat: 9AM - 6PM</p>
                        </motion.div>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white p-3 sm:p-4 rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                    >
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Find Us on Map</h4>
                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1909.3741949231212!2d82.22429230724381!3d16.838833798360813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3820a3286aea3b%3A0x430e293212485462!2sPydah%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1747236217094!5m2!1sen!2sin"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                className="rounded-lg"
                            />
                        </div>
                    </motion.div>

                    {/* Social Media */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-center"
                    >
                        <h4 className="text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Connect With Us</h4>
                        <div className="flex justify-center space-x-4 sm:space-x-6">
                            {[
                                { icon: faLinkedinIn, color: "bg-blue-600", url: "https://www.linkedin.com/company/pydahsoft" },
                                { icon: faFacebookF, color: "bg-blue-700", url: "https://facebook.com/pydahsoft" },
                                { icon: faInstagram, color: "bg-pink-600", url: "https://instagram.com/pydahsoft" },
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${social.color} text-white p-2 sm:p-3 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300`}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FontAwesomeIcon icon={social.icon} className="text-sm sm:text-lg" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;