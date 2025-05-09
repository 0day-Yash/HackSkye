import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import EventFormat from "@/components/event-format"
import Schedule from "@/components/schedule"
import WhyJoin from "@/components/why-join"
import HacksykeHub from "@/components/hackskye-hub"
import Sponsors from "@/components/sponsors"
import Registration from "@/components/registration"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <EventFormat />
        <Schedule />
        <WhyJoin />
        <HacksykeHub />
        <Sponsors />
        <Registration />
      </main>
      <Footer />
    </div>
  )
}
