"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, Zap, Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const progress = (scrolled / windowHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Event", href: "#event-format" },
    { name: "Schedule", href: "#schedule" },
    { name: "Why Join", href: "#why-join" },
    { name: "Hub", href: "#hackskye-hub" },
    { name: "Sponsors", href: "#sponsors" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm" : "py-4 bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center cursor-pointer group">
            <div className="relative w-10 h-10 mr-2 transition-transform group-hover:scale-110">
              <Code className="w-8 h-8 text-purple-600 absolute top-0 left-0" />
              <Zap className="w-6 h-6 text-teal-500 absolute bottom-0 right-0" />
            </div>
            <span className="font-mono text-xl font-bold">
              Hack<span className="text-purple-600">skye</span>
              <span className="text-teal-500">2.0</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-800 hover:text-purple-600 font-medium transition-colors cursor-pointer relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link href="#registration">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white hover:shadow-lg transition-all">
                Register Now
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-purple-600 p-2 hover:bg-purple-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-800 hover:text-purple-600 font-medium transition-colors cursor-pointer py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="#registration" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Register Now</Button>
            </Link>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200">
        <div
          className="h-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-teal-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </nav>
  )
}

export default Navbar
