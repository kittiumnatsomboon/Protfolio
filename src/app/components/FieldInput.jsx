export default function FieldInput({ type, label, placeholder, onChange, children }) {
    return (
        <>
            <p className="mb-2 font-medium">{children}</p>
            <div className='flex items-center pl-3 rounded-lg border border-slate-700 focus-within:border-pink-500'>
                <input name={label} type={type} placeholder={placeholder} className='w-full p-3 outline-none'
                    onChange={onChange}
                />
            </div>
        </>
    )
}