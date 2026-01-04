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
      <Heading marginY={16} fontSize="250%">
        Log in!
      </Heading>
      <Stack gap="4" align="flex-start">
        <Field.Root invalid={!!errors.email} width={{ base: 300, md: 750 }}>
          <Field.Label>
            <Heading>E-mail</Heading>
          </Field.Label>
          <Input {...register("email")} size="xl" />
          <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.password} width={{ base: 300, md: 750 }}>
          <Field.Label>
            <Heading>Password</Heading>
          </Field.Label>
          <PasswordInput {...register("password")} size="xl" />
          <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
        </Field.Root>
        <Button size="xl" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
