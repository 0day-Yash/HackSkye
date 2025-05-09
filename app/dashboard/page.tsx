import { getParticipants } from "../actions/registration"
import DashboardClient from "@/components/dashboard/dashboard-client"

export default async function DashboardPage() {
  try {
    // Fetch participants data
    const { success, participants } = await getParticipants()

    if (!success) {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <div className="bg-red-50 border border-red-500 text-red-700 p-4 rounded-md">
            Error loading participants data. Please try again.
          </div>
        </div>
      )
    }

    return <DashboardClient participants={participants || []} />
  } catch (error) {
    console.error("Dashboard error:", error)
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="bg-red-50 border border-red-500 text-red-700 p-4 rounded-md">
          An unexpected error occurred. Please try again later.
        </div>
      </div>
    )
  }
}
