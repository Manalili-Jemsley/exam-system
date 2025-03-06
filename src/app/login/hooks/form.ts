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
    fetch("http://localhost:3000/api/login", { method: "POST", body: JSON.stringify(data) });
  };

  return {
    form,
    onSubmit,
  };
};

export default useLoginForm;