'use client'
import FieldInput from "@/app/components/FieldInput"
import Button from "@/app/components/Button";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from "react";
import Link from "next/link";
import { Lock } from "lucide-react";
export default function Login() {
    return (
        <>
            <div className='flex items-center justify-center min-h-screen'>
                <div className='w-full max-w-lg px-10 py-8 mx-auto  border rounded-lg shadow-2xl'>
                    <div className='max-w-md mx-auto space-y-3'>
                        <h3 className="text-lg font-semibold"><Lock/></h3>
                        <div>
                            <FieldInput children="Email address" label="email" placeholder="กรุณาระบุอีเมลล์แอดเดรส"
                                type="text"
                            />
                        </div>
                        <div>
                            <FieldInput children="Password" label="password" placeholder="กรุณาระบุรหัสผ่าน"
                                type="password"
                            />
                        </div>
                        <div className="flex gap-3 pt-3 items-center">
                            <Button children="เข้าสู่ระบบ"  />
                            <Link href="#" className="text-red-600">ลืมรหัสผ่าน</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}