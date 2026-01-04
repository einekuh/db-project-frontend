import { Button, Field, Heading, Input, Stack } from "@chakra-ui/react";
import { PasswordInput } from "./ui/password-input";
import { useForm } from "react-hook-form";
import useAuthStore from "@/authStore";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
  username: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username may contain only letters, numbers, and _"
    ),
  forename: z.string().trim().min(1, "First name is required").max(50),
  surname: z.string().trim().min(1, "Last name is required").max(50),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(72, "Password must be at most 72 characters")
    .regex(/[a-z]/, "Password must contain a lowercase letter")
    .regex(/[A-Z]/, "Password must contain an uppercase letter")
    .regex(/[0-9]/, "Password must contain a number"),
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
      <Heading marginY={16} fontSize="250%">
        Sign up!
      </Heading>
      <Stack gap="4" align="flex-start">
        <Field.Root invalid={!!errors.forename} width={{ base: 300, md: 750 }}>
          <Field.Label>
            <Heading>Forename</Heading>
          </Field.Label>
          <Input {...register("forename")} size="xl" />
          <Field.ErrorText>{errors.forename?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.surname} width={{ base: 300, md: 750 }}>
          <Field.Label>
            <Heading>Surname</Heading>
          </Field.Label>
          <Input {...register("surname")} size="xl" />
          <Field.ErrorText>{errors.surname?.message}</Field.ErrorText>
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

        <Field.Root invalid={!!errors.username} width={{ base: 300, md: 750 }}>
          <Field.Label>
            <Heading>Username</Heading>
          </Field.Label>
          <Input {...register("username")} size="xl" />
          <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
        </Field.Root>
        <Button size="xl" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default SignUpForm;
