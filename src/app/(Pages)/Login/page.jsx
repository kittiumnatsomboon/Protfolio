'use client'
import FieldInput from "@/app/components/FieldInput"
import Button from "@/app/components/Button";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from "react";
import * as Yup from 'yup';
import Link from "next/link";
import { Lock } from "lucide-react";

const SigninSchema = Yup.object().shape({
    email: Yup.string()
        .email('กรุณาระบุอีเมลล์')
        .required('กรุณาระบุข้อมูล'),
    password: Yup.string()
        .min(6, 'รหัสผ่านขั้นต่ำ 6 ตัวอักษร')
        .required('กรุณาระบุข้อมูล'),
});

export default function Login() {

    const [message, setMessage] = useState('');
    return (
        <>
            <div className='flex items-center justify-center min-h-screen'>
                <div className='w-full max-w-lg px-10 py-8 mx-auto  border rounded-lg shadow-2xl'>
                    <div className='max-w-md mx-auto space-y-3'>
                        <h3 className="text-lg font-semibold"><Lock /></h3>
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validationSchema={SigninSchema} // Pass the Yup schema here
                            onSubmit={async (values, { setSubmitting }) => {
                                const res = await fetch('/api/Login/', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(values)
                                })
                                const respone = await res.json();
                                setMessage(respone.message || respone.error)
                                
                            }}
                        >
                            {({ values, errors, touched, handleChange, handleBlur }) => (
                                <Form >

                                    <div>
                                        <FieldInput children="Email address" label="email" placeholder="กรุณาระบุอีเมลล์แอดเดรส"
                                            type="text"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.email && touched.email ? (
                                            <div className="text-red-500">{errors.email}</div>
                                        ) : null}
                                    </div>
                                    <div>
                                        <FieldInput children="Password" label="password" placeholder="กรุณาระบุรหัสผ่าน"
                                            type="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.password && touched.password ? (
                                            <div className="text-red-500">{errors.password}</div>
                                        ) : null}
                                    </div>
                                    <div className="flex gap-3 pt-3 items-center">
                                        <Button children="เข้าสู่ระบบ" />
                                        <Link href="#" className="text-red-600">ลืมรหัสผ่าน</Link>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}