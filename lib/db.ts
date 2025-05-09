import { neon } from "@neondatabase/serverless"

// Check if DATABASE_URL is defined
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set")
}

// Create a SQL client with the Neon connection
export const sql = neon(process.env.DATABASE_URL)

// Helper function to execute SQL queries
export async function executeQuery(query: string, params: any[] = []) {
  try {
    // Use the sql.query method for parameterized queries
    const result = await sql.query(query, params)
    return result.rows
  } catch (error) {
    console.error("Database query error:", error)
    throw error
  }
}
