"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import {
  Calendar,
  Clock,
  Rocket,
  Coffee,
  Lightbulb,
  Award,
  Users,
  Code,
  Cpu,
  Presentation,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scheduleData = {
    1: [
      {
        time: "5:00 PM",
        title: "Offline Check-in Begins",
        description: "Swag distribution, selfies, initial chaos ensues",
        icon: <Clock className="text-purple-600" />,
      },
      {
        time: "6:00 PM",
        title: "Kickoff Ceremony",
        description: "Welcome, sponsor shoutouts, theme reveal, intro to the platform",
        icon: <Rocket className="text-fuchsia-500" />,
      },
      {
        time: "7:00 PM",
        title: "Hacking Begins",
        description: "Let the coding begin!",
        icon: <Lightbulb className="text-teal-500" />,
      },
      {
        time: "9:00 PM",
        title: "Team Formation Activity",
        description: "For solo hackers looking to join forces",
        icon: <Users className="text-purple-600" />,
      },
    ],
    2: [
      {
        time: "All Day",
        title: "Hacking Continues",
        description: "Code. Debug. Code again.",
        icon: <Code className="text-purple-600" />,
      },
      {
        time: "10:00 AM",
        title: "Workshop: Prompt Engineering",
        description: "Learn how to supercharge your AI tools",
        icon: <Cpu className="text-fuchsia-500" />,
      },
      {
        time: "2:00 PM",
        title: "Workshop: Building a Pitch Deck",
        description: "How to present your hack effectively",
        icon: <Presentation className="text-teal-500" />,
      },
      {
        time: "12:00 AM",
        title: "Midnight Challenge",
        description: '"Hack in the Dark" - a special mini-challenge with prizes',
        icon: <Coffee className="text-fuchsia-500" />,
      },
    ],
    3: [
      {
        time: "12:00 PM",
        title: "Pre-submission Check-in",
        description: "Get help with final debugging and deployment",
        icon: <HelpCircle className="text-fuchsia-500" />,
      },
      {
        time: "3:00 PM",
        title: "Final Submissions Due",
        description: "All projects must be submitted to DevPost",
        icon: <Clock className="text-purple-600" />,
      },
      {
        time: "4:00 PM",
        title: "Demo Time",
        description: "5-minute pitch per team, streamed on YouTube",
        icon: <Presentation className="text-teal-500" />,
      },
      {
        time: "6:00 PM",
        title: "Winners Announced",
        description: "Top 5 teams win prizes, mentorship, and eternal glory",
        icon: <Award className="text-purple-600" />,
      },
    ],
  }

  return (
    <section id="schedule" className="py-20 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 relative">
            Event Schedule
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full"></div>
          </h2>
          <p className="text-lg text-center max-w-2xl text-gray-700 mt-6">
            48 hours of coding, learning, and building. Here's what you can expect during Hacksyke 2.0.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button
            onClick={() => setActiveDay(1)}
            variant={activeDay === 1 ? "default" : "outline"}
            className={`px-6 py-3 rounded-md font-mono font-medium transition-all ${
              activeDay === 1
                ? "bg-purple-600 text-white shadow-md"
                : "bg-white border border-gray-200 hover:border-purple-600"
            }`}
          >
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Day 1: Friday
            </span>
          </Button>
          <Button
            onClick={() => setActiveDay(2)}
            variant={activeDay === 2 ? "default" : "outline"}
            className={`px-6 py-3 rounded-md font-mono font-medium transition-all ${
              activeDay === 2
                ? "bg-fuchsia-500 text-white shadow-md"
                : "bg-white border border-gray-200 hover:border-fuchsia-500"
            }`}
          >
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Day 2: Saturday
            </span>
          </Button>
          <Button
            onClick={() => setActiveDay(3)}
            variant={activeDay === 3 ? "default" : "outline"}
            className={`px-6 py-3 rounded-md font-mono font-medium transition-all ${
              activeDay === 3
                ? "bg-teal-500 text-white shadow-md"
                : "bg-white border border-gray-200 hover:border-teal-500"
            }`}
          >
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Day 3: Sunday
            </span>
          </Button>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="hidden md:block absolute top-0 bottom-0 left-[85px] w-1 bg-gradient-to-b from-purple-600 via-fuchsia-500 to-teal-500 rounded-full"></div>

          <div className="space-y-8">
            {scheduleData[activeDay as keyof typeof scheduleData].map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 relative">
                <div className="md:w-20 text-center md:flex md:flex-col md:justify-start md:items-center">
                  <div className="font-mono font-medium text-purple-600">{item.time}</div>
                  <div className="hidden md:flex w-10 h-10 bg-white rounded-full border border-gray-200 z-10 items-center justify-center mt-2">
                    {item.icon}
                  </div>
                </div>

                <div className="md:flex-1 bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:border-purple-500 transition-all">
                  <div className="md:hidden flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="font-mono font-medium text-purple-600">{item.time}</span>
                  </div>
                  <h3 className="text-xl font-bold font-mono">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Schedule
