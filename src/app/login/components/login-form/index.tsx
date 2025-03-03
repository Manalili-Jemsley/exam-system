import { InputFieldTypes, LoginFormFields } from "@/interfaces/components/fields";
import { FC } from "react";
import { UseFormReturn } from "react-hook-form";
import { LoginFormType } from "../../hooks/form";
import Field from "./field";
import Footer from "./footer";

interface Props {
  form: UseFormReturn<LoginFormType>;
  onSubmit: (data: LoginFormType) => void;
}

const LoginForm: FC<Props> = ({ form, onSubmit }) => {
  const { watch, register, handleSubmit } = form;
  const { username, password } = watch();

  return (
    <div className="bg-red-500 p-5 rounded-md flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field 
          label="Username"
          name={LoginFormFields.USERNAME} 
          value={username} 
          type={InputFieldTypes.REGULAR} 
          register={register}
        />
        <Field 
          label="Password"
          name={LoginFormFields.PASSWORD} 
          value={password} 
          type={InputFieldTypes.SECURE} 
          register={register}
        />
        <Footer />
      </form>
    </div>
  );
};

export default LoginForm;