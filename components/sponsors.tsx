"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Award, DollarSign, BarChart } from "lucide-react"

const Sponsors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const sponsorTiers = [
    {
      tier: "Platinum Sponsor",
      amount: "₹2.5L",
      color: "border-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      tier: "Gold Sponsors",
      amount: "₹1.5L each",
      color: "border-teal-500",
      bgColor: "bg-teal-50",
      textColor: "text-teal-500",
    },
    {
      tier: "Silver Sponsors",
      amount: "₹75K each",
      color: "border-fuchsia-500",
      bgColor: "bg-fuchsia-50",
      textColor: "text-fuchsia-500",
    },
  ]

  const sponsorPerks = [
    "Logo on streams, banners, and swag",
    "Speak at kickoff ceremony",
    "Access to resumes, demos, and developers",
    "Build brand loyalty with India's next gen hackers",
    "Recruiting opportunities",
    "Product showcases",
  ]

  return (
    <section id="sponsors" className="py-20 relative bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 relative">
            Sponsorship
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full"></div>
          </h2>
          <p className="text-lg text-center max-w-2xl text-gray-700 mt-6">
            Backed by Rebels Like You. Interested brands can email us at{" "}
            <a href="mailto:hacksykeindia@gmail.com" className="text-purple-600 hover:underline">
              hacksykeindia@gmail.com
            </a>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold font-mono mb-6">Sponsorship Tiers</h3>
            <div className="space-y-6">
              {sponsorTiers.map((tier, index) => (
                <div key={index} className={`bg-white p-6 rounded-lg border ${tier.color} shadow-sm ${tier.bgColor}`}>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className={`text-xl font-bold font-mono ${tier.textColor}`}>{tier.tier}</h4>
                    <div className="flex items-center">
                      <DollarSign className={`w-4 h-4 mr-1 ${tier.textColor}`} />
                      <span className="font-mono font-bold">{tier.amount}</span>
                    </div>
                  </div>
                  <div className={`w-full h-1 bg-gray-100 rounded-full mb-4`}>
                    <div
                      className={`h-full ${tier.textColor} rounded-full`}
                      style={{ width: (3 - index) * 33 + "%" }}
                    ></div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {index === 0 && "Premium positioning and maximum brand exposure"}
                    {index === 1 && "Excellent visibility and presentation opportunities"}
                    {index === 2 && "Great value with solid brand presence"}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border border-purple-600 shadow-sm">
              <div className="flex items-center mb-4">
                <BarChart className="w-5 h-5 text-purple-600 mr-2" />
                <h4 className="text-xl font-bold font-mono">Target Raise</h4>
              </div>
              <p className="text-gray-600 mb-2">₹5L–7L total to keep participant costs at ₹1K or lower</p>
              <div className="w-full bg-gray-100 rounded-full h-4">
                <div
                  className="bg-gradient-to-r from-purple-600 to-teal-500 h-4 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>₹0</span>
                <span>₹5L</span>
                <span>₹10L</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-mono mb-6">Sponsorship Perks</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
              <div className="flex items-center mb-4">
                <Award className="w-5 h-5 text-teal-500 mr-2" />
                <h4 className="text-xl font-bold font-mono">Benefits</h4>
              </div>
              <ul className="space-y-3">
                {sponsorPerks.map((perk, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center mr-2 mt-1">
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                    </span>
                    <span className="text-gray-600">{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold font-mono mb-4">Growth Strategy</h4>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-8 font-mono font-bold text-purple-600 flex items-center">Y1</div>
                  <div>
                    <p className="font-medium">Launch in Bangalore (2026)</p>
                    <p className="text-sm text-gray-600">300+ participants, ₹5.9L–7.9L revenue</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-8 font-mono font-bold text-fuchsia-500 flex items-center">Y2</div>
                  <div>
                    <p className="font-medium">Expand to Delhi (2027)</p>
                    <p className="text-sm text-gray-600">500+ participants, ₹10L–15L revenue</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-8 font-mono font-bold text-teal-500 flex items-center">Y5</div>
                  <div>
                    <p className="font-medium">10 cities nationwide (2030)</p>
                    <p className="text-sm text-gray-600">2,000+ participants, ₹50L+ revenue</p>
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

export default Sponsors
