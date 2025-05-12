import Navbar from "@/components/navbar"
import HacksykeHub from "@/components/hackskye-hub"
import Footer from "@/components/footer"

export default function HubPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <HacksykeHub />
      </main>
      <Footer />
    </div>
  )
}
