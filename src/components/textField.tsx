import { FC, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const TextField: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...props
}) => {
  const INPUT_CLASSNAME = ""; // todo: customize common textfield

  return (
    <input
      className={twMerge(INPUT_CLASSNAME, className)}
      {...props}
    />
  );
};

export default TextField;