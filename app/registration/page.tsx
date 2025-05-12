import Navbar from "@/components/navbar"
import Registration from "@/components/registration"
import Footer from "@/components/footer"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Registration />
      </main>
      <Footer />
    </div>
  )
}
