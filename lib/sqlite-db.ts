import Database from 'better-sqlite3';
import { join } from 'path';
import fs from 'fs';

// Create the data directory if it doesn't exist
const dataDir = join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize the database file
const dbPath = join(dataDir, 'hackskye.db');
const db = new Database(dbPath);

// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS participants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone TEXT,
    college TEXT,
    year_of_study TEXT,
    major TEXT,
    github_url TEXT,
    portfolio_url TEXT,
    participation_type TEXT NOT NULL,
    team_name TEXT,
    skills TEXT,
    dietary_restrictions TEXT,
    tshirt_size TEXT,
    how_did_you_hear TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);

// Type for parameters
type QueryParam = string | number | null | undefined;

// Helper function to execute a query with proper typing
export function executeQuery(query: string, params: QueryParam[] = []): any[] {
  try {
    // For SELECT queries
    if (query.trim().toLowerCase().startsWith('select')) {
      const stmt = db.prepare(query);
      return stmt.all(...params);
    }
    
    // For INSERT, UPDATE, DELETE queries
    const stmt = db.prepare(query);
    stmt.run(...params);
    return [];
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

// Convert array to JSON string for storage
export function arrayToString(arr: string[] | undefined | null): string {
  if (!arr || arr.length === 0) return '[]';
  return JSON.stringify(arr);
}

// Convert JSON string to array when retrieving from database
export function stringToArray(str: string | null): string[] {
  if (!str || str === '[]') return [];
  try {
    return JSON.parse(str);
  } catch (e) {
    return [];
  }
} 