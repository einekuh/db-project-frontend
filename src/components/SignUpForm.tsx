import { Button, Field, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { PasswordInput } from "./ui/password-input";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import useSignUp from "@/hooks/useSignUp";

async function isEmailAvailable(email: string): Promise<boolean> {
  /* const res = await fetch(
    `/api/auth/email-available?email=${encodeURIComponent(email)}` 
  );
  if (!res.ok) return false;
  const data = await res.json(); // { available: boolean }
  return Boolean(data.available);*/
  return true;
}

const schema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Invalid email")
    .refine(async (email) => await isEmailAvailable(email), {
      message: "Email already exists",
    }),
  first_name: z.string().trim().min(1, "First name is required").max(50),
  last_name: z.string().trim().min(1, "Last name is required").max(50),
  password: z.string(),
  /*.min(8, "Password must be at least 8 characters")
    .max(72, "Password must be at most 72 characters")
    .regex(/[a-z]/, "Password must contain a lowercase letter")
    .regex(/[A-Z]/, "Password must contain an uppercase letter")
    .regex(/[0-9]/, "Password must contain a number"),*/
});

type SignUpFormData = z.infer<typeof schema>;

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({ resolver: zodResolver(schema) });
  const registerUser = useSignUp();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    registerUser.mutate({
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      password: data.password,
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <Heading marginY={16} fontSize="250%">
        Sign up!
      </Heading>

      <Stack gap="4" align="flex-start">
        <Field.Root
          invalid={!!errors.first_name}
          width={{ base: 300, md: 750 }}
        >
          <Field.Label>
            <Heading>First Name</Heading>
          </Field.Label>
          <Input {...register("first_name")} size="xl" />
          <Field.ErrorText>{errors.first_name?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.last_name} width={{ base: 300, md: 750 }}>
          <Field.Label>
            <Heading>Last Name</Heading>
          </Field.Label>
          <Input {...register("last_name")} size="xl" />
          <Field.ErrorText>{errors.last_name?.message}</Field.ErrorText>
        </Field.Root>

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
        <Text color="red">
          {registerUser.isError
            ? registerUser.error?.message ===
              "Request failed with status code 400"
              ? "A user with this email already exists!"
              : "Something went wrong!"
            : null}
        </Text>
        <Button size="xl" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default SignUpForm;
