import { ArrowRightIcon, MailIcon, UserIcon } from "lucide-react";
import { motion } from "motion/react";
export default function Button({children}) {
    return (
        <>
            <motion.button type='submit' className='w-max flex items-right gap-2 bg-sky-700 hover:bg-sky-700 text-white px-10 py-3 rounded-md'
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                {children}
            </motion.button>
        </>
    )
}