import Navbar from "@/components/navbar"
import EventFormat from "@/components/event-format"
import Footer from "@/components/footer"

export default function EventPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <EventFormat />
      </main>
      <Footer />
    </div>
  )
}
