const Input = ({ type, placeholder, value, onChange }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="text-base text-black outline-none rounded-2xl bg-white/70 px-4 py-2 w-2/3"
        />
    )
}

export default Input