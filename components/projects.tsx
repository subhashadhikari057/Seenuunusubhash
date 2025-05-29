"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      id: 1,
      title: "MediScan",
      description:
        "MediScan is a full-stack AI-powered healthcare web app using React, Node.js, and MongoDB. It features LLM-based symptom checking via OpenRouter, doctor discovery, appointment booking, role-based dashboards, Google Sign-In, dark mode, and editable medical profiles.",
      image: "/images/medicare.png",
      gif: "/videos/MediScan.gif",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "LLM", "JWT Auth", "Google Sign-In"],
      github: "https://github.com/subhashadhikari057/MediScan",
      live: "https://medi-scan-i7ok.vercel.app/",
    },
    {
      id: 2,
      title: "Trekking Gear Rental",
      description:
        "Trail Gear: A full-stack trekking gear rental platform featuring user authentication, inventory management, booking system, and online payment integration.",
      image: "/images/project-1.png",
      gif: "/videos/trekking.gif",
      tags: ["React", "Node.js", "MongoDB", "TailwindCSS", "Express.js","JWT Auth"],
      github: "https://github.com/subhashadhikari057/Trekking-Gear-Rental",
      live: "https://trekking-gear-rental.vercel.app/",
    },
    {
      id: 3,
      title: "NepNews",
      description:
        "NepNews: A full-stack news platform with SEO optimization, real-time article updates, user authentication, admin dashboard for content management, and MongoDB integration.",
      image: "/images/project-2.png",
      gif: "/videos/NepNews.gif",
      tags: ["Next.js", "TailwindCSS", "HTML5/CSS3", "Spring Boot", "Spring Data JPA","JWT Auth", "MongoDB"],
      github: "https://github.com/subhashadhikari057/nepnews-frontend",
      live: "https://nepnews-frontend.vercel.app/",
    },
    {
      id: 4,
      title: "Quiz Application",
      description:
        "A Quiz App built with Java using Swing for the GUI and MySQL for the database. Users can register, log in, take quizzes, and see their scores. The app fetches questions from MySQL and stores user scores. It demonstrates JDBC integration and basic database operations - College Project.",
      image: "/images/project-3.png",
      tags: ["Java", "JSwing", "MySQL"],
      github: "https://github.com/subhashadhikari057/Quiz_Application",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  }

  return (
    <div className="min-h-screen py-20 pt-32 bg-gradient-to-b from-mario-dark to-mario-dark/90">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block relative">
            <span className="text-mario-red">My</span> Projects
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-mario-red"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </h2>
          <p className="text-xl text-mario-cream max-w-2xl mx-auto">
            Check out some of my recent work. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-mario-dark-lighter rounded-xl overflow-hidden shadow-xl border border-mario-dark-lighter hover:border-mario-red/30 transition-all duration-300"
            >
              <div className="relative aspect-video bg-black rounded-t-xl overflow-hidden">
                {project.gif ? (
                  <Image
                    src={project.gif}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) 
                 : (
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-mario-dark to-transparent opacity-70" />

                <div
                  className="absolute top-4 right-4"
                  style={{ animation: "spin 5s linear infinite" }}
                >
                  <Image src="/images/coin.png" alt="Coin" width={30} height={30} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-mario-yellow">{project.title}</h3>
                <p className="text-mario-cream mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-mario-blue/20 text-mario-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white hover:text-mario-red transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-white hover:text-mario-green transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/subhashadhikari057"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-mario-dark-lighter rounded-full hover:bg-mario-red/20 transition-colors border border-mario-red/30"
          >
            <Github size={20} />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
