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
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
});

type SignUpFormData = z.infer<typeof schema>;

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({ resolver: zodResolver(schema) });

  const setStatus = useAuthStore((s) => s.setStatus);
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    setStatus("authenticated");
    navigate("/");
  });

  return (
    <form onSubmit={onSubmit}>
      <Heading marginY={15}>Sign Up!</Heading>
      <Stack gap="4" align="flex-start" maxW="sm">
        <Field.Root invalid={!!errors.firstName} width={{ base: 300, md: 500 }}>
          <Field.Label>First Name</Field.Label>
          <Input {...register("firstName")} />
          <Field.ErrorText>{errors.firstName?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.lastName} width={{ base: 300, md: 500 }}>
          <Field.Label>Last Name</Field.Label>
          <Input {...register("lastName")} />
          <Field.ErrorText>{errors.lastName?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.email} width={{ base: 300, md: 500 }}>
          <Field.Label>E-Mail</Field.Label>
          <Input {...register("email")} />
          <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.password} width={{ base: 300, md: 500 }}>
          <Field.Label>Password</Field.Label>
          <PasswordInput {...register("password")} />
          <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.username} width={{ base: 300, md: 500 }}>
          <Field.Label>Username</Field.Label>
          <Input {...register("username")} />
          <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
        </Field.Root>
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
};

export default SignUpForm;
