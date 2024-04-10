import React, { forwardRef } from 'react';

const Input = forwardRef(({ type, placeholder, className, ...rest }, ref) => {
  const defaultClassName = "text-base text-black outline-none rounded-2xl bg-white/70";
  const combinedClassName = `${defaultClassName} ${className || ''}`;
  return (
    <input
      type={type}
      placeholder={placeholder}
      ref={ref}
      className={combinedClassName}
      {...rest}
    />
  );
});

export default Input;
