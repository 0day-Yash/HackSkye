import Link from "next/link"
import { Code, Zap, Twitter, Instagram, Linkedin, Github, Mail, Phone, Users } from "lucide-react"

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 border-t border-gray-200 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="relative w-10 h-10 mr-2">
                <Code className="w-8 h-8 text-purple-600 absolute top-0 left-0" />
                <Zap className="w-6 h-6 text-teal-500 absolute bottom-0 right-0" />
              </div>
              <span className="font-mono text-xl font-bold">
                Hack<span className="text-purple-600">skye</span>
                <span className="text-teal-500">2.0</span>
              </span>
            </div>
            <p className="text-gray-700 mb-4">
              India's Hackathon Rebellion.
              <br />
              48 Hours of Code, Chaos, and Glory.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold font-mono mb-4 text-gray-800">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
                  About Hacksyke
                </Link>
              </li>
              <li>
                <Link
                  href="#event-format"
                  className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
                >
                  Event Format
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="#why-join" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
                  Why Join
                </Link>
              </li>
              <li>
                <Link
                  href="#hackskye-hub"
                  className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
                >
                  Hacksyke Hub
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-mono mb-4 text-gray-800">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-purple-600 mr-2 mt-1" />
                <div>
                  <p className="text-sm text-gray-600">Email:</p>
                  <a href="mailto:hacksykeindia@gmail.com" className="text-gray-700 hover:text-purple-600 transition-colors">
                    hacksykeindia@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-fuchsia-500 mr-2 mt-1" />
                <div>
                  <p className="text-sm text-gray-600">Phone:</p>
                  <a href="tel:+919915181929" className="text-gray-700 hover:text-purple-600 transition-colors">
                    +91 9915181929
                  </a>
                  <br />
                  <a href="tel:+919041260790" className="text-gray-700 hover:text-purple-600 transition-colors">
                    +91 9041260790
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Users className="w-5 h-5 text-teal-500 mr-2 mt-1" />
                <div>
                  <p className="text-sm text-gray-600">Organizers:</p>
                  <p className="text-gray-700">Yash & Rishul</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Hacksyke 2.0. All rights reserved.</p>
          <p className="text-gray-600 text-xs mt-2">
            <span className="text-teal-500">Hacksyke:</span> Where India's Coders Go Wild.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
