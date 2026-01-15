import { NextRequest, NextResponse } from "next/server";
import pool from "../Connectiondatabase/route";
export async function GET() {
    try {
        // Use the pool to run a query directly
        // The pool automatically manages borrowing and returning connections
        const[rows] = await pool.execute("SELECT * FROM users");
        console.log(rows)
        return NextResponse.json(rows);
    } catch (err) {
        console.error(err);
        return NextResponse.json({message:"Error connection"})
    }
}