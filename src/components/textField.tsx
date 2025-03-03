import { FC, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const TextField: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  autoComplete = "off",
  ...props
}) => {
  const INPUT_CLASSNAME = ""; // todo: customize common textfield

  return (
    <input
      className={twMerge(INPUT_CLASSNAME, className)}
      autoComplete={autoComplete}
      {...props}
    />
  );
};

export default TextField;