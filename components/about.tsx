"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Code, Cpu, Zap, Users } from "lucide-react"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 relative bg-gradient-to-br from-purple-200 via-blue-200 to-teal-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 relative">
            What is Hacksyke?
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full"></div>
          </h2>
          <p className="text-lg md:text-xl text-center max-w-3xl text-gray-700 mt-6">
            Welcome to <span className="text-purple-600 font-semibold">Hacksyke 2.0</span>—the evolution of CodeQuestt.
            Bigger, bolder, and chaotic in the best way. This isn't just a hackathon. It's{" "}
            <span className="text-teal-500 font-semibold">India's first full-blown hackathon franchise</span>, starting
            with an insane 48-hour hybrid showdown in the heart of India's tech capital.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 bg-white/20 backdrop-blur-lg rounded-lg border border-white/20 shadow-2xl transition-all hover:border-purple-500 hover:shadow-xl"
          >
            <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold font-mono mb-2">For Everyone</h3>
            <p className="text-gray-600">
              Whether you're a coder, designer, product nerd, or someone who just likes to break stuff and build it back
              better—this is for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 bg-white/20 backdrop-blur-lg rounded-lg border border-white/20 shadow-2xl transition-all hover:border-fuchsia-500 hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-full bg-fuchsia-200 flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6 text-fuchsia-500" />
            </div>
            <h3 className="text-xl font-bold font-mono mb-2">Accessible</h3>
            <p className="text-gray-600">
              ₹900 offline / Free online with perks including food, swag, Wi-Fi, chaos, and community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 bg-white/20 backdrop-blur-2xl rounded-lg border border-white/20 shadow-2xl transition-all hover:border-teal-500 hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-full bg-teal-200 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-teal-500" />
            </div>
            <h3 className="text-xl font-bold font-mono mb-2">Chaotic Energy</h3>
            <p className="text-gray-600">
              Build anything. Break stuff. Sleep later. Hacksyke is all about the vibe: chaotic, creative, and
              community-driven.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 bg-white/20 backdrop-blur-lg rounded-lg border border-white/20 shadow-2xl transition-all hover:border-purple-500 hover:shadow-md"
          >
            <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold font-mono mb-2">Cultural Shift</h3>
            <p className="text-gray-600">
              Our goal is to change India's youth culture, one hackathon at a time, creating a community of builders and
              innovators.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
