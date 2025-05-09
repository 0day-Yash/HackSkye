"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button" // Assuming this is your ShadCN/UI button
import { Calendar, MapPin, Code, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const Hero = () => {
  // --- Countdown Timer Logic ---
  const calculateTimeLeft = () => {
    // IMPORTANT: Set your Hackathon's START date and time here
    // If it starts at 9 AM on May 11, 2025, use: '2025-05-11T09:00:00'
    const hackathonStartDate = new Date('2025-05-11T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = hackathonStartDate - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isEventLive: false,
      hasEventPassed: false
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        isEventLive: false,
        hasEventPassed: false,
      };
    } else {
      // Check if event is currently ongoing (assuming it lasts 48 hours as per your info)
      const hackathonEndDate = hackathonStartDate + (48 * 60 * 60 * 1000);
      if (now < hackathonEndDate) {
        timeLeft.isEventLive = true;
      } else {
        timeLeft.hasEventPassed = true;
      }
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, isEventLive: false, hasEventPassed: false });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true when component mounts (client-side only)
    setIsClient(true);
    // Initialize with the current time left
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear interval if the component is unmounted or event has passed
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures this only runs once on mount

  const formatTime = (time: number) => String(time).padStart(2, '0');
  // --- End Countdown Timer Logic ---

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-12 md:pt-20"> {/* Adjusted padding */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-fuchsia-50 to-teal-50 z-0"></div>
      {/* Optional: Add a subtle pattern or animated shapes here */}
      {/* <div className="absolute inset-0 opacity-10 pattern-dots pattern-purple-400 pattern-bg-white pattern-size-4 pattern-opacity-20 z-0"></div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          {/* Left Column: Info */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-teal-600 font-semibold tracking-wider mb-2 text-lg uppercase">
              May 11-13, 2025
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-mono mb-5">
              <span className="block">Hack</span>
              <span className="text-purple-600 relative inline-block">
                Skye
                <span className="absolute -inset-1.5 bg-purple-200/80 blur-lg -z-10 transform skew-y-1"></span>
              </span>
              <span className="text-teal-500">2.0</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-8 text-gray-700">
              India's Hackathon Revolution Begins Here. Join us for 48 hours of innovation!
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-10 text-sm sm:text-base justify-items-center md:justify-items-start">
              <div className="flex items-center text-purple-700 font-medium">
                <Calendar className="w-5 h-5 mr-2.5 shrink-0" />
                <span>May 11–13, 2025</span>
              </div>
              <div className="flex items-center text-fuchsia-600 font-medium">
                <MapPin className="w-5 h-5 mr-2.5 shrink-0" />
                <span>Bangalore & Online</span>
              </div>
              <div className="flex items-center text-teal-600 font-medium">
                <Clock className="w-5 h-5 mr-2.5 shrink-0" />
                <span>48 Hours of Hacking</span>
              </div>
              <div className="flex items-center text-purple-700 font-medium">
                <Code className="w-5 h-5 mr-2.5 shrink-0" />
                <span>₹900 Offline / Free Online</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="#registration">
                <Button
                  size="lg" // Shadcn UI Button size prop
                  className="group w-full sm:w-auto relative px-8 py-7 text-lg bg-gradient-to-r from-purple-600 via-fuchsia-500 to-teal-500 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:ring-4 focus:ring-purple-300"
                >
                  <span className="relative z-10 font-semibold text-white flex items-center">
                    Register Now <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-purple-500 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Button>
              </Link>
              <Link href="#about">
                <Button
                  size="lg" // Shadcn UI Button size prop
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-7 text-lg border-2 border-teal-500 text-teal-600 hover:bg-teal-50 hover:text-teal-700 hover:border-teal-600 hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-teal-200 font-semibold"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Countdown */}
          <div className="md:w-1/2 w-full max-w-md md:max-w-none">
            <div className="p-6 sm:p-8 rounded-xl bg-white/70 backdrop-blur-md border border-gray-200/80 shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold font-mono mb-6 text-center text-gray-800">
                Countdown to <span className="text-purple-600">HackSkye 2.0</span>
              </h2>
              
              {/* Only render the countdown content on the client */}
              {isClient ? (
                <>
                  {timeLeft.isEventLive ? (
                    <div className="text-center py-8">
                      <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 mb-2">
                        HackSkye is LIVE!
                      </h3>
                      <p className="text-lg text-gray-600">Good luck to all hackers!</p>
                    </div>
                  ) : timeLeft.hasEventPassed ? (
                    <div className="text-center py-8">
                      <h3 className="text-3xl font-bold text-gray-700 mb-2">Hackathon Has Ended</h3>
                      <p className="text-lg text-gray-600">Thanks for participating!</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
                      <CountdownUnit value={timeLeft.days} label="Days" color="purple" />
                      <CountdownUnit value={timeLeft.hours} label="Hours" color="fuchsia" />
                      <CountdownUnit value={timeLeft.minutes} label="Minutes" color="teal" />
                      <CountdownUnit value={timeLeft.seconds} label="Seconds" color="purple" />
                    </div>
                  )}
                </>
              ) : (
                // Show a loading state on the server
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
                  <CountdownPlaceholder label="Days" color="purple" />
                  <CountdownPlaceholder label="Hours" color="fuchsia" />
                  <CountdownPlaceholder label="Minutes" color="teal" />
                  <CountdownPlaceholder label="Seconds" color="purple" />
                </div>
              )}

              <div className="mt-8 text-center">
                <p className="text-gray-700 italic text-sm sm:text-base">"Build anything. Break stuff. Sleep later."</p>
                <p className="text-xs mt-2 text-gray-500">Offline: 100 spots | Online: Unlimited</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Helper component for Countdown Units to reduce repetition
interface CountdownUnitProps {
  value: number;
  label: string;
  color: 'purple' | 'fuchsia' | 'teal';
}

const CountdownUnit: React.FC<CountdownUnitProps> = ({ value, label, color }) => {
  const colorClasses = {
    purple: 'text-purple-600 group-hover:border-purple-500',
    fuchsia: 'text-fuchsia-500 group-hover:border-fuchsia-500',
    teal: 'text-teal-500 group-hover:border-teal-500',
  };

  return (
    <div className="bg-white/80 p-3 sm:p-4 rounded-lg border border-gray-200/70 flex flex-col items-center group hover:shadow-lg hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-1">
      <span className={`text-4xl lg:text-5xl font-bold font-mono ${colorClasses[color]} group-hover:scale-110 transition-transform duration-300 inline-block`}>
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mt-1">{label}</span>
    </div>
  );
};

// Server-side placeholder component for the countdown
const CountdownPlaceholder: React.FC<{ label: string; color: 'purple' | 'fuchsia' | 'teal' }> = ({ label, color }) => {
  const colorClasses = {
    purple: 'text-purple-600 group-hover:border-purple-500',
    fuchsia: 'text-fuchsia-500 group-hover:border-fuchsia-500',
    teal: 'text-teal-500 group-hover:border-teal-500',
  };

  return (
    <div className="bg-white/80 p-3 sm:p-4 rounded-lg border border-gray-200/70 flex flex-col items-center">
      <span className={`text-4xl lg:text-5xl font-bold font-mono ${colorClasses[color]} inline-block opacity-40`}>
        --
      </span>
      <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mt-1">{label}</span>
    </div>
  );
};

export default Hero
