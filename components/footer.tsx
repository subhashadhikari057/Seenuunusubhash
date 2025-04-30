"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Twitter, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-mario-dark border-t border-mario-dark-lighter">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="#hero" className="text-2xl font-bold text-mario-red flex items-center mb-4">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
              >
                <span className="text-mario-red">Subhash</span>
                <span className="text-white"> Adhikari</span>
              </motion.div>
            </Link>
            <p className="text-mario-cream mb-4 max-w-md">
              Building creative and interactive web experiences with a passion for clean code and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mario-cream hover:text-mario-red transition-colors"
                whileHover={{ y: -3 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mario-cream hover:text-mario-blue transition-colors"
                whileHover={{ y: -3 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mario-cream hover:text-mario-green transition-colors"
                whileHover={{ y: -3 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-mario-yellow mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="text-mario-cream hover:text-mario-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-mario-cream hover:text-mario-red transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#education" className="text-mario-cream hover:text-mario-red transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-mario-cream hover:text-mario-red transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-mario-cream hover:text-mario-red transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-lg font-bold text-mario-yellow mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-mario-cream">subhashadhikari057@gmail.com</li>
              <li className="text-mario-cream">+977-9827828632</li>
              <li className="text-mario-cream">Naxal, Kathmandu</li>
            </ul>
          </div> */}
        </div>

        <div className="border-t border-mario-dark-lighter mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-mario-cream text-sm">&copy; {new Date().getFullYear()} Subhash Dev. All rights reserved.</p>

          <div className="flex items-center mt-4 md:mt-0">
            <p className="text-mario-cream text-sm flex items-center">
              Made with <Heart className="h-4 w-4 text-mario-red mx-1" /> and React.js
            </p>
          </div>
        </div>

        {/* Mario elements */}
        <div className="relative h-16 mt-8">
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <Image src="/images/pipe.png" alt="Pipe" width={40} height={40} />
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
