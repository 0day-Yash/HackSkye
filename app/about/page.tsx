import Navbar from "@/components/navbar"
import About from "@/components/about"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  )
}
