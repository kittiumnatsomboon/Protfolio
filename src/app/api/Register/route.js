'use server'
import pool from "../Connectiondatabase/route";
import bcrypt from "bcrypt"
export async function POST(request) {
    try {
        const body = await request.json();
        const { firstname, lastname, dateofbirth, email, password } = body;
        const [rows] = await pool.query(`SELECT COUNT(*) AS 
            count FROM users WHERE email = ? 
        OR (firstname = ? AND lastname = ?)`, [email, firstname, lastname])
        if (rows[0].count > 0) {
            return Response.json({ error: 'อีเมลหรือชื่อ-นามสกุลถูกใช้งานแล้ว' }); // Must return here
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const dateOnly = dateofbirth.split('T')[0];
        await pool.query('INSERT INTO users (firstname,lastname,Dateofbirth,email, password) VALUES (?,?,?,?,?)',
            [firstname, lastname, dateOnly, email, hashedPassword]);
            // ส่งเมลล์หลังสมัคร
        return Response.json({ message: 'สมัครสมาชิกสำเร็จ' });
    } catch (error) {
        // จัดการกรณีที่ส่ง JSON มาผิดพลาด
        return Response.json({ error: "ข้อมูลที่ส่งมาไม่ใช่ JSON ที่ถูกต้อง" }, { status: 400 });
    }
}