"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Code, Zap, Download, Search, Filter } from "lucide-react"

type Participant = {
  id: number
  name: string
  email: string
  phone: string | null
  college: string | null
  year_of_study: string | null
  major: string | null
  github_url: string | null
  portfolio_url: string | null
  participation_type: string
  team_name: string | null
  skills: string[]
  dietary_restrictions: string | null
  tshirt_size: string | null
  how_did_you_hear: string | null
  created_at: string
}

interface DashboardClientProps {
  participants: Participant[] | undefined
}

export default function DashboardClient({ participants = [] }: DashboardClientProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")
  const [filteredParticipants, setFilteredParticipants] = useState<Participant[]>(participants || [])

  useEffect(() => {
    // Ensure participants is an array before filtering
    const participantsArray = Array.isArray(participants) ? participants : []

    let result = participantsArray

    // Apply participation type filter
    if (filterType !== "all") {
      result = result.filter((p) => p.participation_type === filterType)
    }

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.email.toLowerCase().includes(term) ||
          (p.college && p.college.toLowerCase().includes(term)) ||
          (p.team_name && p.team_name.toLowerCase().includes(term)),
      )
    }

    setFilteredParticipants(result)
  }, [searchTerm, filterType, participants])

  const exportToCSV = () => {
    // Ensure we have participants to export
    if (!filteredParticipants || filteredParticipants.length === 0) {
      alert("No participants to export")
      return
    }

    // Create CSV content
    const headers = [
      "ID",
      "Name",
      "Email",
      "Phone",
      "College",
      "Year",
      "Major",
      "GitHub",
      "Portfolio",
      "Type",
      "Team",
      "Skills",
      "Dietary Restrictions",
      "T-Shirt Size",
      "Source",
      "Registration Date",
    ]

    const rows = filteredParticipants.map((p) => [
      p.id,
      p.name,
      p.email,
      p.phone || "",
      p.college || "",
      p.year_of_study || "",
      p.major || "",
      p.github_url || "",
      p.portfolio_url || "",
      p.participation_type,
      p.team_name || "",
      (p.skills || []).join(", "),
      p.dietary_restrictions || "",
      p.tshirt_size || "",
      p.how_did_you_hear || "",
      new Date(p.created_at).toLocaleString(),
    ])

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")),
    ].join("\n")

    // Create and download the file
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", `hackskye-registrations-${new Date().toISOString().split("T")[0]}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="relative w-8 h-8 mr-2">
              <Code className="w-6 h-6 text-purple-600 absolute top-0 left-0" />
              <Zap className="w-5 h-5 text-teal-500 absolute bottom-0 right-0" />
            </div>
            <span className="font-mono text-lg font-bold">
              Hack<span className="text-purple-600">skye</span>
              <span className="text-teal-500">2.0</span>
              <span className="ml-2 text-sm font-normal text-gray-500">Dashboard</span>
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Registrations Dashboard</h1>
            <p className="text-gray-600">
              {filteredParticipants.length} participants
              {filterType !== "all" ? ` (${filterType})` : ""}
              {searchTerm ? ` matching "${searchTerm}"` : ""}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={exportToCSV} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export to CSV
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, email, college..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>

            <div className="flex items-center gap-2 min-w-[200px]">
              <Filter className="h-4 w-4 text-gray-400" />
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Participants</SelectItem>
                  <SelectItem value="offline">Offline Only</SelectItem>
                  <SelectItem value="online">Online Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>College</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Team</TableHead>
                  <TableHead>Skills</TableHead>
                  <TableHead>Registered On</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredParticipants.length > 0 ? (
                  filteredParticipants.map((participant) => (
                    <TableRow key={participant.id}>
                      <TableCell className="font-medium">{participant.name}</TableCell>
                      <TableCell>{participant.email}</TableCell>
                      <TableCell>{participant.college || "-"}</TableCell>
                      <TableCell>
                        <Badge variant={participant.participation_type === "offline" ? "default" : "outline"}>
                          {participant.participation_type}
                        </Badge>
                      </TableCell>
                      <TableCell>{participant.team_name || "Solo"}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1 max-w-[200px]">
                          {participant.skills && participant.skills.length > 0 ? (
                            participant.skills.slice(0, 3).map((skill, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                          {participant.skills && participant.skills.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{participant.skills.length - 3}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        {participant.created_at ? new Date(participant.created_at).toLocaleDateString() : "-"}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                      No participants found matching your criteria
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  )
}
