import { supabase } from "@/lib/supabase"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Check if the participants table exists and has data
    const { count, error } = await supabase
      .from('participants')
      .select('*', { count: 'exact', head: true })
    
    if (error) {
      console.error("Database init error:", error)
      return NextResponse.json(
        { 
          success: false, 
          message: "Failed to initialize database", 
          error: error.message
        },
        { status: 500 }
      )
    }
    
    // Return the count
    return NextResponse.json({ 
      success: true, 
      message: "Database is initialized", 
      count: count || 0 
    })
  } catch (error) {
    console.error("Database init error:", error)
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to initialize database", 
        error: error instanceof Error ? error.message : String(error) 
      },
      { status: 500 }
    )
  }
} 