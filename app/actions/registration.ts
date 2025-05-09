"use server"

import { supabase } from "@/lib/supabase"
import { revalidatePath } from "next/cache"
import { z } from "zod"

// Registration form schema
const registrationSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }).optional().or(z.literal("")),
  college: z.string().optional().or(z.literal("")),
  yearOfStudy: z.string().optional().or(z.literal("")),
  major: z.string().optional().or(z.literal("")),
  githubUrl: z.string().url({ message: "Invalid URL" }).optional().or(z.literal("")),
  portfolioUrl: z.string().url({ message: "Invalid URL" }).optional().or(z.literal("")),
  participationType: z.enum(["offline", "online"]),
  teamName: z.string().optional().or(z.literal("")),
  skills: z.array(z.string()).optional(),
  dietaryRestrictions: z.string().optional().or(z.literal("")),
  tshirtSize: z.enum(["XS", "S", "M", "L", "XL", "XXL"]).optional().or(z.literal("")),
  howDidYouHear: z.string().optional().or(z.literal("")),
})

export type RegistrationFormData = z.infer<typeof registrationSchema>

export async function registerParticipant(formData: RegistrationFormData) {
  try {
    // Validate form data
    const validatedData = registrationSchema.parse(formData)

    // Check if email already exists
    const { data: existingUsers, error: queryError } = await supabase
      .from('participants')
      .select('id')
      .eq('email', validatedData.email)
      .limit(1)

    if (queryError) {
      console.error("Error checking existing user:", queryError)
      return { 
        success: false, 
        message: "Database error while checking existing user" 
      }
    }

    if (existingUsers && existingUsers.length > 0) {
      return { success: false, message: "Email already registered" }
    }

    // Insert participant into database with correct column names (snake_case)
    const { error: insertError } = await supabase
      .from('participants')
      .insert({ 
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
        college: validatedData.college || null,
        year_of_study: validatedData.yearOfStudy || null,
        major: validatedData.major || null,
        github_url: validatedData.githubUrl || null,
        portfolio_url: validatedData.portfolioUrl || null,
        participation_type: validatedData.participationType,
        team_name: validatedData.teamName || null,
        skills: validatedData.skills || [],
        dietary_restrictions: validatedData.dietaryRestrictions || null,
        tshirt_size: validatedData.tshirtSize || null,
        how_did_you_hear: validatedData.howDidYouHear || null
      })

    if (insertError) {
      console.error("Error inserting participant:", insertError)
      return { 
        success: false, 
        message: "Failed to register. Database error." 
      }
    }

    revalidatePath("/")
    return { success: true, message: "Registration successful!" }
  } catch (error) {
    console.error("Registration error:", error)
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation error",
        errors: error.errors.map((e) => ({ path: e.path.join("."), message: e.message })),
      }
    }
    return { success: false, message: "Failed to register. Please try again." }
  }
}

// Get all participants for dashboard
export async function getParticipants() {
  try {
    const { data: participants, error } = await supabase
      .from('participants')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error("Error fetching participants:", error)
      return { 
        success: false, 
        message: "Failed to fetch participants", 
        participants: [] 
      }
    }
    
    return { 
      success: true, 
      participants: participants || [] 
    }
  } catch (error) {
    console.error("Error fetching participants:", error)
    return { 
      success: false, 
      message: "Failed to fetch participants", 
      participants: [] 
    }
  }
}
