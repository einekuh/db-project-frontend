import {
  Button,
  Field,
  Heading,
  HStack,
  Input,
  InputGroup,
  Span,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";

const schema = z.object({
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
  about: z.string(),
});

const MAX_CHARACTERS = 500;

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

  const [value, setValue] = useState("");

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
        <Field.Root invalid={!!errors.about} width={{ base: 300, md: 500 }}>
          <Field.Label>About</Field.Label>
          <InputGroup
            endElement={
              <Span color="fg.muted" textStyle="xs">
                {value.length} / {MAX_CHARACTERS}
              </Span>
            }
          >
            <Textarea
              {...register("about")}
              variant="outline"
              autoresize
              placeholder="Write something about yourself!"
              maxLength={MAX_CHARACTERS}
              onChange={(e) => {
                setValue(e.currentTarget.value.slice(0, MAX_CHARACTERS));
              }}
            />
          </InputGroup>
          <Field.ErrorText>{errors.about?.message}</Field.ErrorText>
        </Field.Root>
        <HStack>
          <Button
            type={edit ? "submit" : "button"}
            onClick={() => setEdit(!edit)}
          >
            {edit ? "Submit" : "Edit"}
          </Button>
          <Button type={"button"} hidden={!edit} onClick={() => setEdit(!edit)}>
            Cancel
          </Button>
        </HStack>
      </Stack>
    </form>
  );
};

export default Profile;
