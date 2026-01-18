import { ArrowRightIcon, MailIcon, UserIcon , HandIcon } from "lucide-react";
import { motion } from "motion/react";
export default function FieldInput({type , label , placeholder , onChange , value , children}) {
    return (
        <>
            <motion.div
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <p className="mb-2 font-medium">{children}</p>
                <div className='flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-pink-500'>
                    <input name={label} type={type} placeholder={placeholder} className='w-full p-3 outline-none'
                    onChange={onChange} value={value}
                    />
                </div>
            </motion.div>
        </>
    )
}