import pool from "../Connectiondatabase/route";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export async function POST(request){
    try {
        const body = await request.json();
        const {email, password } = body;
        const [result] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        if (result.length > 0) {
            const user = result[0];
            // Compare the hashed password
            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {
                const payload = {
                    userid: user.userid,
                    email: user.email,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    usertype: user.usertype,
                    userimage:user.userimage,
                    Dateofbirth:user.Dateofbirth,
                };
                // 3. Sign the token
                const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' });
                return Response.json({
                    message: 'เข้าสู่ระบบสำเร็จ', 
                    token
                });
            } else {
                Response.json({ message: 'Invalid credentials' });
            }

        } else {
            Response.json({ message: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        Response.json({ message: 'การเชื่อมต่อฐานข้อมูลผิดพลาด โปรดลองใหม่ภายหลัง' });
    }

}