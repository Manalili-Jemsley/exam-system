import { FC } from "react";
import { InputFieldTypes, LoginFormFields } from "@/interfaces/components/fields";
import { UseFormRegister } from "react-hook-form";
import { LoginFormType } from "../../hooks/form";

interface Props {
  value: string;
  type: InputFieldTypes;
  name: LoginFormFields;
  register: UseFormRegister<LoginFormType>;
}

const Field: FC<Props> = ({ value, type, name, register }) => {
  const INPUT_CLASSNAME = "outline-yellow-500";

  return (
    <input
      type={type}
      className={INPUT_CLASSNAME}
      value={value}
      {...register(name)}
    />
  );
};

export default Field;