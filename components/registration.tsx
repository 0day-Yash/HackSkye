"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Calendar, MapPin, Code, Check, Loader, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { registerParticipant, type RegistrationFormData } from "@/app/actions/registration"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const Registration = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState<RegistrationFormData>({
    name: "",
    email: "",
    phone: "",
    college: "",
    yearOfStudy: "",
    major: "",
    githubUrl: "",
    portfolioUrl: "",
    participationType: "offline",
    teamName: "",
    skills: [],
    dietaryRestrictions: "",
    tshirtSize: "",
    howDidYouHear: "",
  })

  const [skillInput, setSkillInput] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [validationErrors, setValidationErrors] = useState<{ path: string; message: string }[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const addSkill = () => {
    if (skillInput.trim() && !formData.skills?.includes(skillInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        skills: [...(prev.skills || []), skillInput.trim()],
      }))
      setSkillInput("")
    }
  }

  const removeSkill = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills?.filter((s) => s !== skill) || [],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setValidationErrors([])

    try {
      const result = await registerParticipant(formData)

      if (result.success) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          college: "",
          yearOfStudy: "",
          major: "",
          githubUrl: "",
          portfolioUrl: "",
          participationType: "offline",
          teamName: "",
          skills: [],
          dietaryRestrictions: "",
          tshirtSize: "",
          howDidYouHear: "",
        })
      } else {
        setError(result.message || "Registration failed. Please try again.")
        if (result.errors) {
          setValidationErrors(result.errors)
        }
      }
    } catch (err) {
      console.error("Registration error:", err)
      setError(err instanceof Error ? err.message : "Failed to submit registration")
    } finally {
      setIsSubmitting(false)
    }
  }

  const getErrorForField = (fieldName: string) => {
    return validationErrors.find((err) => err.path === fieldName)?.message
  }

  return (
    <section id="registration" className="py-20 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 relative">
            Register Now
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full"></div>
          </h2>
          <p className="text-lg text-center max-w-2xl text-gray-700 mt-6">
            Secure your spot for HackSkye 2.0. Offline spots are limited to the first 100 registrations!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-8 rounded-lg border border-purple-600 shadow-sm h-full">
              <h3 className="text-2xl font-bold font-mono mb-6">Event Details</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-purple-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Date & Time</p>
                    <p className="text-gray-600">July 17–19, 2026 | 6 PM – 6 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-fuchsia-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">Bangalore (Offline) + Online (Nationwide)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Code className="w-5 h-5 text-teal-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Registration Fee</p>
                    <p className="text-gray-600">₹900 offline / Free online</p>
                  </div>
                </div>
              </div>

              <div className="p-4 border border-teal-500 bg-teal-50 rounded-lg">
                <p className="font-medium text-center mb-2">Registration Deadline:</p>
                <p className="text-2xl font-bold font-mono text-center text-teal-500">July 10, 2026</p>
                <div className="mt-4 flex justify-between text-xs text-gray-600">
                  <div>
                    <p className="font-medium text-gray-800">Offline Spots</p>
                    <p>100 (first come, first served)</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Online Spots</p>
                    <p>200+ (no limit)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
                <p className="font-medium text-center text-purple-600 mb-1">The Hacksyke Promise</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-4 h-4 mr-2 text-teal-500">
                      <Check className="w-4 h-4" />
                    </span>
                    <span>Always ₹1K or less</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 mr-2 text-teal-500">
                      <Check className="w-4 h-4" />
                    </span>
                    <span>Chaos-powered, community-driven</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 mr-2 text-teal-500">
                      <Check className="w-4 h-4" />
                    </span>
                    <span>By India's youth, for India's youth</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold font-mono mb-6">Registration Form</h3>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  {error && (
                    <Alert variant="destructive" className="mb-6">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Personal Information */}
                      <div className="space-y-2 md:col-span-2">
                        <h4 className="font-semibold text-lg border-b pb-2">Personal Information</h4>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={`w-full ${getErrorForField("name") ? "border-red-500" : ""}`}
                          placeholder="Your full name"
                        />
                        {getErrorForField("name") && (
                          <p className="text-red-500 text-xs mt-1">{getErrorForField("name")}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`w-full ${getErrorForField("email") ? "border-red-500" : ""}`}
                          placeholder="your.email@example.com"
                        />
                        {getErrorForField("email") && (
                          <p className="text-red-500 text-xs mt-1">{getErrorForField("email")}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Your phone number"
                        />
                      </div>

                      {/* Education Information */}
                      <div className="space-y-2 md:col-span-2 mt-4">
                        <h4 className="font-semibold text-lg border-b pb-2">Education</h4>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="college">College/University</Label>
                        <Input
                          type="text"
                          id="college"
                          name="college"
                          value={formData.college}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Your institution"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="yearOfStudy">Year of Study</Label>
                        <Select
                          value={formData.yearOfStudy}
                          onValueChange={(value) => handleSelectChange("yearOfStudy", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1st Year">1st Year</SelectItem>
                            <SelectItem value="2nd Year">2nd Year</SelectItem>
                            <SelectItem value="3rd Year">3rd Year</SelectItem>
                            <SelectItem value="4th Year">4th Year</SelectItem>
                            <SelectItem value="5th Year">5th Year</SelectItem>
                            <SelectItem value="Graduate">Graduate</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="major">Major/Field of Study</Label>
                        <Input
                          type="text"
                          id="major"
                          name="major"
                          value={formData.major}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Your major"
                        />
                      </div>

                      {/* Hackathon Information */}
                      <div className="space-y-2 md:col-span-2 mt-4">
                        <h4 className="font-semibold text-lg border-b pb-2">Hackathon Information</h4>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label>
                          Participation Type <span className="text-red-500">*</span>
                        </Label>
                        <RadioGroup
                          value={formData.participationType}
                          onValueChange={(value) => handleSelectChange("participationType", value)}
                          className="flex flex-col space-y-1 mt-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="offline" id="offline" />
                            <Label htmlFor="offline" className="font-normal">
                              Offline (₹900) - In-person at Bangalore venue
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="online" id="online" />
                            <Label htmlFor="online" className="font-normal">
                              Online (Free) - Remote participation
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="teamName">Team Name (Optional)</Label>
                        <Input
                          type="text"
                          id="teamName"
                          name="teamName"
                          value={formData.teamName}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Leave blank if registering solo"
                        />
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="skills">Skills</Label>
                        <div className="flex gap-2">
                          <Input
                            type="text"
                            id="skillInput"
                            value={skillInput}
                            onChange={(e) => setSkillInput(e.target.value)}
                            className="w-full"
                            placeholder="Add your skills (e.g., React, Python, UI/UX)"
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault()
                                addSkill()
                              }
                            }}
                          />
                          <Button type="button" onClick={addSkill} variant="outline">
                            Add
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {formData.skills?.map((skill) => (
                            <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                              {skill}
                              <button
                                type="button"
                                onClick={() => removeSkill(skill)}
                                className="ml-1 rounded-full hover:bg-gray-200 p-0.5"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Additional Information */}
                      <div className="space-y-2 md:col-span-2 mt-4">
                        <h4 className="font-semibold text-lg border-b pb-2">Additional Information</h4>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="githubUrl">GitHub URL</Label>
                        <Input
                          type="url"
                          id="githubUrl"
                          name="githubUrl"
                          value={formData.githubUrl}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="https://github.com/yourusername"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="portfolioUrl">Portfolio/LinkedIn URL</Label>
                        <Input
                          type="url"
                          id="portfolioUrl"
                          name="portfolioUrl"
                          value={formData.portfolioUrl}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Your portfolio or LinkedIn URL"
                        />
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="dietaryRestrictions">Dietary Restrictions (for offline participants)</Label>
                        <Textarea
                          id="dietaryRestrictions"
                          name="dietaryRestrictions"
                          value={formData.dietaryRestrictions}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Any dietary restrictions we should know about"
                          rows={2}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="tshirtSize">T-shirt Size (for offline participants)</Label>
                        <Select
                          value={formData.tshirtSize}
                          onValueChange={(value) => handleSelectChange("tshirtSize", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="XS">XS</SelectItem>
                            <SelectItem value="S">S</SelectItem>
                            <SelectItem value="M">M</SelectItem>
                            <SelectItem value="L">L</SelectItem>
                            <SelectItem value="XL">XL</SelectItem>
                            <SelectItem value="XXL">XXL</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="howDidYouHear">How did you hear about us?</Label>
                        <Select
                          value={formData.howDidYouHear}
                          onValueChange={(value) => handleSelectChange("howDidYouHear", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Social Media">Social Media</SelectItem>
                            <SelectItem value="Friend">Friend</SelectItem>
                            <SelectItem value="College">College</SelectItem>
                            <SelectItem value="Previous Event">Previous Event</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 flex items-start space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the{" "}
                      <a href="#" className="text-purple-600 hover:underline">
                        Terms & Conditions
                      </a>{" "}
                      and understand that payment details will be sent to my email after registration.
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 bg-gradient-to-r from-purple-600 to-teal-500 text-white rounded-md hover:shadow-lg transition-all flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-5 h-5 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Register Now"
                    )}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-teal-100 mx-auto flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-teal-500" />
                  </div>
                  <h4 className="text-2xl font-bold font-mono mb-2">Registration Successful!</h4>
                  <p className="text-gray-600 mb-6">
                    Thank you for registering for Hacksyke 2.0! We've sent a confirmation email with further details.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="px-6 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition-all"
                  >
                    Register Another Person
                  </Button>
                </div>
              )}
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
              <p className="text-center font-mono font-medium">
                <span className="text-teal-500">Questions?</span> Email us at{" "}
                <a href="mailto:hacksykeindia@gmail.com" className="text-purple-600 hover:underline">
                  hacksykeindia@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Registration
