import Navbar from "@/components/navbar"
import WhyJoin from "@/components/why-join"
import Footer from "@/components/footer"

export default function WhyJoinPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <WhyJoin />
      </main>
      <Footer />
    </div>
  )
}
