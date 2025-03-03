import { FC } from "react";
import { InputFieldTypes, LoginFormFields } from "@/interfaces/components/fields";
import { UseFormRegister } from "react-hook-form";
import { LoginFormType } from "../../hooks/form";
import TextField from "@/components/textField";

interface Props {
  label: string;
  value: string;
  type: InputFieldTypes;
  name: LoginFormFields;
  register: UseFormRegister<LoginFormType>;
}

const Field: FC<Props> = ({ label, value, type, name, register }) => {
  const INPUT_CLASSNAME = "outline-yellow-100";

  return (
    <div className="pb-5">
      <p>{label}</p>
      <TextField
        type={type}
        className={INPUT_CLASSNAME}
        value={value}
        {...register(name)}
      />
    </div>
  );
};

export default Field;