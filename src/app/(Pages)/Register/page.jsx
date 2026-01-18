'use client'
import FieldInput from "@/app/components/FieldInput";
import SectionTitle from "../../components/Section";
import { ArrowRightIcon, MailIcon, UserIcon } from "lucide-react";
import { motion } from "motion/react";
import Dateofbirth from "@/app/components/Dateofbirth";
import Button from "@/app/components/Button";
export default function Register() {
    return (
        <>
            <div className="px-4 md:px-16 lg:px-24 xl:px-32">
                <SectionTitle text2="สมัครสมาชิก" text3="สร้างบัญชีสำหรับใช้เข้าสู่ระบบเพื่อดำเนินการต่อ" />
                <form onSubmit={(e) => e.preventDefault()} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl mx-auto text-slate-300 mt-16 w-full' >
                    {/* Fistname */}
                    <FieldInput label="firstname" placeholder="กรุณาระบุชื่อ" type="text" children="ชื่อ" />
                    {/* Lastname */}
                    <FieldInput label="lastname" placeholder="กรุณาระบุนามสกุล" type="text" children="นามสกุล" />
                    {/* Dateofbirth */}
                    <Dateofbirth children="วันเดือนปีเกิด" placeholder="กรุณาระบุวันเดือนปีเกิด"/>
                    {/* อีเมลล์ */}
                    <FieldInput label="email" placeholder="กรุณาระบุที่อยู่อีเมลล์" children="email address" />
                    {/* รหัสผ่าน */}
                    <FieldInput label="password" placeholder="กรุณาระบุรหัสผ่าน" type="password" children="รหัสผ่าน" />
                    {/* ยืนยัน */}
                    <FieldInput label="confirmpassword" placeholder="กรุณายืนยันรหัสผ่าน" type="password" children="ยืนยันรหัสผ่าน" />
                    <Button children="สมัครสมาชิก" />
                </form>
            </div>
        </>
    )
}