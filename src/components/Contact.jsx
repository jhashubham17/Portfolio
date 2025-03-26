import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (/[0-9!@#$%^&*(),.?":{}|<>]/g.test(formData.name)) {
      newErrors.name = "Name should not contain numbers or special characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    } else if (
      formData.email.includes("test") ||
      formData.email.includes("example") ||
      formData.email.includes("dummy")
    ) {
      newErrors.email = "Please use a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    } else if (formData.message.split(" ").length > 200) {
      newErrors.message = "Message is too long (max 200 words)";
    }

    // Spam prevention
    const spamKeywords = [
      "viagra",
      "casino",
      "lottery",
      "click here",
      "free offer",
    ];
    if (
      spamKeywords.some((keyword) =>
        formData.message.toLowerCase().includes(keyword)
      )
    ) {
      newErrors.message = "Message contains inappropriate content";
    }

    return newErrors;
  };

  const isValidSubmission = (data) => {
    // Additional domain and submission checks
    const bannedDomains = ["spam.com", "garbage.com"];
    const emailDomain = data.email.split("@")[1];

    return !bannedDomains.includes(emailDomain);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      // Additional check before sending email
      if (!isValidSubmission(formData)) {
        setErrors({ general: "Unable to send message. Please try again." });
        return;
      }

      emailjs
        .send(
          "service_ojadbmn",
          "template_rtbr6d9",
          formData,
          "D4splXBOZTxWrljfZ"
        )
        .then(
          (response) => {
            console.log("Email sent successfully!", response);
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
            setTimeout(() => setSubmitted(false), 5000);
          },
          (error) => {
            console.error("Failed to send email:", error);
            setErrors({
              general: "Failed to send message. Please try again later.",
            });
          }
        );
    } else {
      setErrors(validationErrors);
    }
  };

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 relative inline-block"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get in Touch
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400/50 rounded-full animate-pulse"></span>
        </motion.h2>

        {/* General Error Message */}
        {errors.general && (
          <motion.div
            className="bg-red-500/90 backdrop-blur-sm text-white px-6 py-4 rounded-lg mb-8 text-center max-w-2xl mx-auto shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {errors.general}
          </motion.div>
        )}

        {/* Success Message */}
        {submitted && (
          <motion.div
            className="bg-green-500/90 backdrop-blur-sm text-white px-6 py-4 rounded-lg mb-8 text-center max-w-2xl mx-auto shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            Thank you! Your message has been sent successfully.
          </motion.div>
        )}

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-2xl"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="mb-6" variants={inputVariants}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-4 bg-gray-800/50 border ${
                errors.name ? "border-red-500" : "border-gray-700"
              } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300`}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-2">{errors.name}</p>
            )}
          </motion.div>

          <motion.div className="mb-6" variants={inputVariants}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-4 bg-gray-800/50 border ${
                errors.email ? "border-red-500" : "border-gray-700"
              } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300`}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-2">{errors.email}</p>
            )}
          </motion.div>

          <motion.div className="mb-6" variants={inputVariants}>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={`w-full p-4 bg-gray-800/50 border ${
                errors.message ? "border-red-500" : "border-gray-700"
              } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300`}
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mt-2">{errors.message}</p>
            )}
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.1) 1px,
            transparent 1px
          );
          background-size: 30px 30px;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Contact;
