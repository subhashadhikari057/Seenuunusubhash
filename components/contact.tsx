"use client"

import type React from "react"
import emailjs from 'emailjs-com'

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
  
    try {
      await emailjs.send(
        'service_k428d14',  // Your actual service ID
        'template_deekjrr',  // <-- Replace with your Template ID
        {
          from_name: formState.name,
          reply_to: formState.email,
          message: formState.message,
        },
        'oyFxAwxgy1spodCPl'  // <-- Replace with your Public Key
      )
  
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })
  
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error('Failed to send message:', error)
      setIsSubmitting(false)
    }
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <div className="min-h-screen py-20 pt-32 bg-gradient-to-b from-mario-dark/90 to-mario-dark">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block relative">
            <span className="text-mario-red">Contact</span> Me
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-mario-red"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </h2>
          <p className="text-xl text-mario-cream max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="bg-mario-red/20 p-3 rounded-full">
                <Mail className="h-6 w-6 text-mario-red" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-mario-yellow mb-1">Email</h3>
                <p className="text-mario-cream">subhashadhikari057@gmail.com</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="bg-mario-blue/20 p-3 rounded-full">
                <Phone className="h-6 w-6 text-mario-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-mario-yellow mb-1">Phone</h3>
                <p className="text-mario-cream">+977-9827828632</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="bg-mario-green/20 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-mario-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-mario-yellow mb-1">Location</h3>
                <p className="text-mario-cream">Naxal, Kathmandu</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8">
              <h3 className="text-xl font-bold text-mario-yellow mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/subhash057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-mario-dark-lighter p-3 rounded-full hover:bg-mario-red/20 transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/subhash-adhikari-045018305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-mario-dark-lighter p-3 rounded-full hover:bg-mario-blue/20 transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://x.com/seenu_subhash?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-mario-dark-lighter p-3 rounded-full hover:bg-mario-green/20 transition-colors"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="h-6 w-6" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="bg-mario-dark-lighter p-8 rounded-xl shadow-xl border border-mario-dark-lighter"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mario-green/20 mb-4">
                    <Send className="h-8 w-8 text-mario-green" />
                  </div>
                  <h3 className="text-xl font-bold text-mario-yellow mb-2">Message Sent!</h3>
                  <p className="text-mario-cream">Thanks for reaching out! I'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-mario-cream mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-mario-dark border border-mario-dark-lighter focus:border-mario-red focus:outline-none focus:ring-1 focus:ring-mario-red text-white"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-mario-cream mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-mario-dark border border-mario-dark-lighter focus:border-mario-red focus:outline-none focus:ring-1 focus:ring-mario-red text-white"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-mario-cream mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-mario-dark border border-mario-dark-lighter focus:border-mario-red focus:outline-none focus:ring-1 focus:ring-mario-red text-white resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-bold text-white ${
                      isSubmitting ? "bg-mario-red/50" : "bg-mario-red hover:bg-mario-red/90"
                    } transition-colors flex items-center justify-center`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
