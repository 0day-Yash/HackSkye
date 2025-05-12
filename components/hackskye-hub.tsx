"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { MessageSquare, Calendar, Users, Briefcase, Trophy, ShoppingBag } from "lucide-react"

const HacksykeHub = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-purple-600" />,
      title: "Mini-hacks",
      description: "Monthly 4-hour creative chaos sessions to keep your skills sharp",
    },
    {
      icon: <Users className="w-6 h-6 text-fuchsia-500" />,
      title: "Mentor AMAs",
      description: "Talks with startup founders, developers, and tech rebels",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-teal-500" />,
      title: "Project Channels",
      description: "Collaborate, get feedback, and ship your projects with community support",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-purple-600" />,
      title: "Job Board",
      description: "Gig and internship opportunities from our startup partners",
    },
    {
      icon: <Trophy className="w-6 h-6 text-fuchsia-500" />,
      title: "Hack Leaderboards",
      description: "Compete for most savage bugs, funniest commits, and more",
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-teal-500" />,
      title: "Swag Drops",
      description: "Win shirts, stickers, mugs, and meme-gear through regular contests",
    },
  ]

  return (
    <section id="hackskye-hub" className="py-20 relative bg-gradient-to-br from-purple-200 via-blue-200 to-teal-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 relative">
            Hacksyke Hub
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full"></div>
          </h2>
          <p className="text-lg text-center max-w-2xl text-gray-700 mt-6">
            Launching August 2026 - Your new online home post-hackathon.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <motion.div
            className="md:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/20 backdrop-blur-lg p-6 rounded-lg border shadow-lg h-full hover:shadow-2xl hover:border-fuchsia-400">
              <h3 className="text-2xl font-bold font-mono mb-4">What is the Hub?</h3>
              <p className="text-gray-600 mb-4">
                Hacksyke Hub is more than just a Discord server. It's a year-round community for coders, designers, and
                builders to stay connected, learn, and grow together.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <span className="w-8 h-8 mr-2 flex items-center justify-center bg-gray-50 rounded-full">
                    <Users className="w-4 h-4 text-fuchsia-500" />
                  </span>
                  <div>
                    <p className="font-medium">Who can join?</p>
                    <p className="text-sm text-gray-600">All participants + open invites</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="w-8 h-8 mr-2 flex items-center justify-center bg-gray-50 rounded-full">
                    <Calendar className="w-4 h-4 text-purple-600" />
                  </span>
                  <div>
                    <p className="font-medium">Launch Date</p>
                    <p className="text-sm text-gray-600">August 2026</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="w-8 h-8 mr-2 flex items-center justify-center bg-gray-50 rounded-full">
                    <Trophy className="w-4 h-4 text-teal-500" />
                  </span>
                  <div>
                    <p className="font-medium">Goal</p>
                    <p className="text-sm text-gray-600">1,000 members by July 2027</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-fuchsia-50 rounded-lg border border-fuchsia-200">
                <p className="text-center font-mono font-medium">
                  <span className="text-fuchsia-500">Press 1</span> if you're hacking.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            className="md:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-lg shadow-lg p-5 rounded-lg border hover:shadow-2xl hover:border-teal-500 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-3">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold font-mono mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-white/20 backdrop-blur-lg rounded-lg border border-gray-200 shadow-lg hover:border-purple-500 text-center">
              <p className="font-medium text-purple-600 mb-1">Cost to Join</p>
              <p className="text-xl font-bold font-mono">FREE</p>
              <p className="text-sm text-gray-600 mt-2">
                The Hacksyke Hub is a community initiative to foster connections and creativity beyond the hackathon
                event itself.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HacksykeHub
