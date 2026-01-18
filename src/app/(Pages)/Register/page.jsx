'use client'
import FieldInput from "@/app/components/FieldInput";
import SectionTitle from "../../components/Section";
import Button from "@/app/components/Button";
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from "react";
import { motion } from "motion/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
        .min(5, 'กรุณาระบุตัวอักษรขั้นต่ำ 5 ตัวอักษร')
        .max(50, 'อักษรสูงสุด 50 ตัวอักษร')
        .required('กรุณาระบุข้อมูล'),
    lastname: Yup.string()
        .min(5, 'กรุณาระบุตัวอักษรขั้นต่ำ 5 ตัวอักษร')
        .max(50, 'อักษรสูงสุด 50 ตัวอักษร')
        .required('กรุณาระบุข้อมูล'),
    email: Yup.string()
        .email('กรุณาระบุอีเมลล์')
        .required('กรุณาระบุข้อมูล'),
    password: Yup.string()
        .min(6, 'รหัสผ่านขั้นต่ำ 6 ตัวอักษร')
        .required('กรุณาระบุข้อมูล'),
    confirmpassword: Yup
        .string()
        .required('กรุณาระบุรหัสผ่าน')
        .oneOf([Yup.ref('password'), null], 'รหัสผ่านไม่ตรงกัน'),
});

export default function Register() {
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date) => {
        setStartDate(date);
    };
    const [message, setMessage] = useState('');
    return (
        <>
            <div className="px-4 md:px-16 lg:px-24 xl:px-32">
                <SectionTitle text2="สมัครสมาชิก" text3="สร้างบัญชีสำหรับใช้เข้าสู่ระบบเพื่อดำเนินการต่อ" />
                <Formik
                    initialValues={{ firstname: '', lastname: '', dateofbirth: '', email: '', password: '', confirmpassword: '' }}
                    validationSchema={SignupSchema} // Pass the Yup schema here
                    onSubmit={async (values, { setSubmitting }) => {
                        const res = await fetch('/api/Register/', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json', // บอกเซิร์ฟเวอร์ว่าส่งข้อมูล JSON
                            },
                            body: JSON.stringify(values)
                        })
                        console.log(values)
                        const respone = await res.json();
                        setMessage(respone.message || respone.error)
                    }}
                >
                    {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => (
                        <Form className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl mx-auto text-slate-300 mt-16 w-full'>
                            {/* Fistname */}
                            <motion.div
                                initial={{ y: 150, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                            >
                                <FieldInput label="firstname" placeholder="กรุณาระบุชื่อ" type="text" children="ชื่อ"
                                    value={values.firstname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.firstname && touched.firstname ? (
                                    <div className="text-red-500">{errors.firstname}</div>
                                ) : null}
                            </motion.div>
                            {/* Lastname */}
                            <motion.div
                                initial={{ y: 150, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                            >
                                <FieldInput label="lastname" placeholder="กรุณาระบุนามสกุล" type="text" children="นามสกุล"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.lastname && touched.lastname ? (
                                    <div className="text-red-500">{errors.lastname}</div>
                                ) : null}
                            </motion.div>
                            {/* Dateofbirth */}
                            <motion.div
                                initial={{ y: 150, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                            >
                                <p className="mb-2 font-medium">วันเดือนปีเกิด</p>
                                <div className='flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-pink-500'>

                                    <DatePicker
                                        className="w-full p-3 outline-none"
                                        placeholderText="กรุณาระบุวันเดือนปีเกิด"
                                        yearDropdownItemNumber={100}
                                        scrollableYearDropdown
                                        showYearDropdown
                                        showMonthDropdown
                                        selected={values.dateofbirth || null}
                                        onChange={
                                            (date) =>
                                                setFieldValue(
                                                    'dateofbirth',
                                                    date
                                                )
                                        }
                                        dateFormat="yyyy-MM-dd"
                                        name="dateofbirth"
                                    />
                                </div>

                            </motion.div>
                            {/* อีเมลล์ */}
                            <motion.div
                                initial={{ y: 150, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                            >
                                <FieldInput label="email" placeholder="กรุณาระบุที่อยู่อีเมลล์" children="email address"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email ? (
                                    <div className="text-red-500">{errors.email}</div>
                                ) : null}
                            </motion.div>
                            {/* รหัสผ่าน */}
                            <motion.div
                                initial={{ y: 150, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                            >
                                <FieldInput label="password" placeholder="กรุณาระบุรหัสผ่าน" type="password" children="รหัสผ่าน"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.password && touched.password ? (
                                    <div className="text-red-500">{errors.password}</div>
                                ) : null}
                            </motion.div>
                            {/* ยืนยัน */}
                            <motion.div
                                initial={{ y: 150, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                            >
                                <FieldInput label="confirmpassword" placeholder="กรุณายืนยันรหัสผ่าน" type="password" children="ยืนยันรหัสผ่าน"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.confirmpassword && touched.confirmpassword ? (
                                    <div className="text-red-500">{errors.confirmpassword}</div>
                                ) : null}
                            </motion.div>
                            <Button children="สมัครสมาชิก" />
                            
                            {message}
                        </Form>
                    )}
                </Formik>
            </div >
        </>
    )
}