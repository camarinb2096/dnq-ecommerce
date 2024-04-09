const Input = ({ type, placeholder, value, onChange, className }) => {
    const defaultClassName = "text-base text-black outline-none rounded-2xl bg-white/70"
    const combinedClassName = `${defaultClassName} ${className || ''}`
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={combinedClassName}
        />
    )
}

export default Input