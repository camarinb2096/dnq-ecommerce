const Button = ({ text, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-red-500 text-white text-base rounded-2xl px-6 py-2 font-bold hover:bg-red-600 transition-colors w-44 ${props.className}`}
    >
      {text}
    </button>
  );
}

export default Button;
