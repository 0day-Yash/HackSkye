import { supabase } from "@/lib/supabase"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Check if we already have a test user
    const { data: existingUser, error: queryError } = await supabase
      .from('participants')
      .select('id')
      .eq('email', 'test@example.com')
      .limit(1)
    
    if (queryError) {
      console.error("Error checking existing user:", queryError)
      return NextResponse.json({ 
        success: false, 
        message: "Database error while checking existing user",
        error: queryError.message
      }, { status: 500 })
    }
    
    if (existingUser && existingUser.length > 0) {
      return NextResponse.json({ 
        success: true, 
        message: "Test user already exists", 
        id: existingUser[0].id 
      });
    }

    // Create a test participant with correct column names (snake_case)
    const { error: insertError } = await supabase
      .from('participants')
      .insert({
        name: "Test User",
        email: "test@example.com",
        phone: "1234567890",
        college: "Test College",
        year_of_study: "3rd Year",
        major: "Computer Science",
        github_url: "https://github.com/testuser",
        portfolio_url: "https://testuser.dev",
        participation_type: "offline",
        team_name: "Test Team",
        skills: ["JavaScript", "React", "Node.js"],
        dietary_restrictions: "None",
        tshirt_size: "L",
        how_did_you_hear: "Twitter",
      })
    
    if (insertError) {
      console.error("Error creating test user:", insertError)
      return NextResponse.json(
        { 
          success: false, 
          message: "Failed to create test user", 
          error: insertError.message
        },
        { status: 500 }
      )
    }
    
    return NextResponse.json({ 
      success: true, 
      message: "Test user added successfully" 
    });
  } catch (error) {
    console.error("Error creating test user:", error);
    return NextResponse.json(
      { 
        success: false, 
        message: "Failed to create test user", 
        error: error instanceof Error ? error.message : String(error) 
      },
      { status: 500 }
    );
  }
} 