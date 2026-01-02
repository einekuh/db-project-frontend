import { Button, Field, Heading, Input, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";

const schema = z.object({
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
});

type ProfileFormData = z.infer<typeof schema>;

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({ resolver: zodResolver(schema) });
  const [edit, setEdit] = useState(false);
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Heading marginY={15}>Your Profile!</Heading>
      <Stack gap="4" align="flex-start" maxW="sm">
        <Field.Root invalid={!!errors.firstName} width={{ base: 300, md: 500 }}>
          <Field.Label>First Name</Field.Label>
          <Input {...register("firstName")} disabled={!edit} />
          <Field.ErrorText>{errors.firstName?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.lastName} width={{ base: 300, md: 500 }}>
          <Field.Label>Last Name</Field.Label>
          <Input {...register("lastName")} disabled={!edit} />
          <Field.ErrorText>{errors.lastName?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.username} width={{ base: 300, md: 500 }}>
          <Field.Label>Username</Field.Label>
          <Input {...register("username")} disabled={!edit} />
          <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.email} width={{ base: 300, md: 500 }}>
          <Field.Label>E-Mail</Field.Label>
          <Input {...register("email")} disabled={!edit} />
          <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
        </Field.Root>

        <Button
          type={edit ? "submit" : "button"}
          onClick={() => setEdit(!edit)}
        >
          {edit ? "Submit" : "Edit"}
        </Button>
      </Stack>
    </form>
  );
};

export default Profile;
