"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Clock, Gift, Users, Heart, Award, Zap } from "lucide-react"

const WhyJoin = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const reasons = [
    {
      title: "48 hours of madness",
      description: "No sleep, all code. Push your limits and see what you can build under pressure.",
      icon: <Clock className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "₹1L+ prize pool",
      description: "Win swag, mentorships, startup intros, and recognition for your innovation.",
      icon: <Award className="w-8 h-8 text-teal-500" />,
    },
    {
      title: "Startup & mentor network",
      description: "Rub shoulders with India's best tech minds and industry leaders.",
      icon: <Users className="w-8 h-8 text-fuchsia-500" />,
    },
    {
      title: "Insane ideas",
      description: "Build anything—apps, games, tools, hacks. Your imagination is the only limit.",
      icon: <Zap className="w-8 h-8 text-teal-500" />,
    },
    {
      title: "Coder cred",
      description: "Be part of India's youth hack culture and build your reputation.",
      icon: <Heart className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Lifetime community access",
      description: "Join the Hacksyke Hub and stay connected with fellow hackers year-round.",
      icon: <Gift className="w-8 h-8 text-fuchsia-500" />,
    },
  ]

  return (
    <section id="why-join" className="py-20 relative bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 relative">
            Why Join Hacksyke?
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full"></div>
          </h2>
          <p className="text-lg text-center max-w-2xl text-gray-700 mt-6">
            There are countless reasons to be part of this revolution. Here are just a few.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:border-purple-500 transition-all group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform">{reason.icon}</div>
              <h3 className="text-xl font-bold font-mono mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <div className="bg-white p-6 rounded-lg border border-teal-500 shadow-sm max-w-xl text-center">
            <p className="text-xl font-mono font-bold text-teal-500 mb-2">
              "Build anything. Break stuff. Sleep later."
            </p>
            <p className="text-gray-600">
              That's the Hacksyke promise. Join us for an unforgettable weekend of creation, chaos, and community.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyJoin
