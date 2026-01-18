'use client'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Cake} from "lucide-react";
import { motion } from "motion/react";
export default function Dateofbirth({label , placeholder , onChange , value , children , select}){
    return(
        <>
        <motion.div
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <p className="mb-2 font-medium">{children}</p>
                <div className='flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-pink-500'>
                    <Cake className='size-5' />
                    <DatePicker 
                    onChange={onChange} value={value}
                    placeholder={placeholder}
                    name={label}
                    calendarIcon
                    className='w-full p-3 outline-none'
                    placeholderText={placeholder}
                    yearDropdownItemNumber={100}
                    showYearDropdown
                    scrollableYearDropdown
                    scrollableMonthYearDropdown
                    showMonthDropdown
                    selected={select}
                    />
                </div>
            </motion.div>
        </>
    )
}