import 'better-sqlite3';

declare module 'better-sqlite3' {
  interface Statement {
    all(...params: any[]): any[];
    run(...params: any[]): RunResult;
  }

  interface RunResult {
    changes: number;
    lastInsertRowid: number;
  }
} 