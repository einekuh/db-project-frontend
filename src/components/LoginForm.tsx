import { Button, Field, Heading, Input, Stack } from "@chakra-ui/react";
import { PasswordInput } from "./ui/password-input";
import { useForm } from "react-hook-form";
import useAuthStore from "@/authStore";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string(),
  password: z.string(),
});

type LoginFormData = z.infer<typeof schema>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(schema) });

  //const authStatus =useAuthStore(s => s.authStatus);
  const setStatus = useAuthStore((s) => s.setStatus);
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    setStatus("authenticated");
    navigate("/");
  });

  return (
    <form onSubmit={onSubmit}>
      <Heading marginY={15}>Log In!</Heading>
      <Stack gap="4" align="flex-start" maxW="sm">
        <Field.Root invalid={!!errors.email} width={{ base: 300, md: 500 }}>
          <Field.Label>E-mail</Field.Label>
          <Input {...register("email")} />
          <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.password} width={{ base: 300, md: 500 }}>
          <Field.Label>Password</Field.Label>
          <PasswordInput {...register("password")} />
          <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
        </Field.Root>
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
