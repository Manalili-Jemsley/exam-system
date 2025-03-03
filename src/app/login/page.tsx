"use client";
import { FC } from "react";
import LoginForm from "./components/login-form";
import useLoginForm from "./hooks/form";

const Login: FC = () => {
  const { form, onSubmit } = useLoginForm();

  return (
    <div className="flex justify-center items-center h-screen">
      <LoginForm form={form} onSubmit={onSubmit} />
    </div>
  );
};

export default Login;