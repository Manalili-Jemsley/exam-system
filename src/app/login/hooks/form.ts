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

  return {
    form,
  };
};

export default useLoginForm;