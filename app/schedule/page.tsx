import Navbar from "@/components/navbar"
import Schedule from "@/components/schedule"
import Footer from "@/components/footer"

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Schedule />
      </main>
      <Footer />
    </div>
  )
}
