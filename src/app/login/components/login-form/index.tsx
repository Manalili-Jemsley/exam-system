import { InputFieldTypes, LoginFormFields } from "@/interfaces/components/fields";
import { FC } from "react";
import { UseFormReturn } from "react-hook-form";
import { LoginFormType } from "../../hooks/form";
import Field from "./field";

interface Props {
  form: UseFormReturn<LoginFormType>;
}

const LoginForm: FC<Props> = ({ form }) => {
  const { watch, register } = form;
  const { username, password } = watch();

  return (
    <div className="bg-red-500 p-5 rounded-md flex flex-col">
      <form>
        <div className="">
          <p>Username</p>
          <Field name={LoginFormFields.USERNAME} value={username} type={InputFieldTypes.REGULAR} register={register} />
        </div>
        <div className="">
          <p>Password</p>
          <Field name={LoginFormFields.PASSWORD} value={password} type={InputFieldTypes.SECURE} register={register} />
        </div>
        <button type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;