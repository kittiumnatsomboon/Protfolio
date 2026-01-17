'use client'
import SectionTitle from "../../components/Section";
import { ArrowRightIcon, MailIcon, UserIcon } from "lucide-react";
import { motion } from "motion/react";
export default function Register(){
    return(
        <>
        <div className="px-4 md:px-16 lg:px-24 xl:px-32">
            <SectionTitle text2="สมัครสมาชิก" text3="สร้างบัญชีสำหรับใช้เข้าสู่ระบบเพื่อดำเนินการต่อ" />
            <form onSubmit={(e) => e.preventDefault()} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl mx-auto text-slate-300 mt-16 w-full' >
                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <p className='mb-2 font-medium'>ชื่อ-นามสกุล</p>
                    <div className='flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-pink-500'>
                        <UserIcon className='size-5' />
                        <input name='name' type="text" placeholder='Enter your name' className='w-full p-3 outline-none' />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    <p className='mb-2 font-medium'>Email id</p>
                    <div className='flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-pink-500'>
                        <MailIcon className='size-5' />
                        <input name='email' type="email" placeholder='Enter your email' className='w-full p-3 outline-none' />
                    </div>
                </motion.div>

                <motion.div className='sm:col-span-2'
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    <p className='mb-2 font-medium'>Message</p>
                    <textarea name='message' rows={8} placeholder='Enter your message' className='focus:border-pink-500 resize-none w-full p-3 outline-none rounded-lg border border-slate-700' />
                </motion.div>
                
                <motion.button type='submit' className='w-max flex items-right gap-2 bg-sky-700 hover:bg-sky-700 text-white px-10 py-3 rounded-full'
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    สมัครสมาชิก
                </motion.button>
            </form>
        </div>
        </>
    )
}