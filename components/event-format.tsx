"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { MapPin, Users, Calendar, DollarSign } from "lucide-react"

const EventFormat = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="event-format" className="py-20 relative bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 relative">
            Event Format
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full"></div>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-purple-600 mr-2" />
                  <h3 className="text-xl font-bold font-mono">Dates & Time</h3>
                </div>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Friday, July 17</span> (6 PM) to{" "}
                  <span className="font-medium">Sunday, July 19</span> (6 PM), 2026
                </p>
                <p className="text-gray-600">
                  A full 48 hours of coding, creating, and collaborating in a high-energy environment.
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-fuchsia-500 mr-2" />
                  <h3 className="text-xl font-bold font-mono">Location</h3>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="font-medium text-purple-600 mb-1">Offline</p>
                    <p className="text-gray-600">Bangalore tech hub (venue TBD - targeting premium tech spaces)</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="font-medium text-fuchsia-500 mb-1">Online</p>
                    <p className="text-gray-600">
                      Accessible from anywhere in India via our custom virtual hackathon platform
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm h-full">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <Users className="w-5 h-5 text-teal-500 mr-2" />
                  <h3 className="text-xl font-bold font-mono">Participation</h3>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="font-medium text-purple-600 mb-1">Offline</p>
                    <p className="text-gray-600">
                      100 hackers on-site, experiencing the full energy of in-person collaboration
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="font-medium text-fuchsia-500 mb-1">Online</p>
                    <p className="text-gray-600">
                      200+ wild coders from across India, connected through our digital platform
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <DollarSign className="w-5 h-5 text-purple-600 mr-2" />
                  <h3 className="text-xl font-bold font-mono">Registration Fee</h3>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="font-medium text-purple-600 mb-1">Offline</p>
                    <p className="text-gray-600">
                      ₹900 (includes everything: food, swag, Wi-Fi, floor space for sleeping)
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="font-medium text-teal-500 mb-1">Online</p>
                    <p className="text-gray-600">FREE (thanks to the internet gods and our awesome sponsors)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EventFormat
