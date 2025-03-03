import { useForm } from "react-hook-form";

export interface LoginFormType {
  username: string;
  password: string;
}

const useLoginForm = () => {
  const form = useForm<LoginFormType>({
    defaultValues: {
      username: "",
      password: "",
    }
  });

  const onSubmit = (data: LoginFormType) => {
    console.log(data.username, data.password);
  };

  return {
    form,
    onSubmit,
  };
};

export default useLoginForm;