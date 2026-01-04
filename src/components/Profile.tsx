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
  forename: z.string(),
  surname: z.string(),
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
      <Heading marginY={16} fontSize="250%">
        Your Profile!
      </Heading>
      <Stack gap="4" align="flex-start">
        <Field.Root invalid={!!errors.forename} width={{ base: 300, md: 750 }}>
          <Field.Label>
            <Heading>Forename</Heading>
          </Field.Label>
          <Input
            {...register("forename")}
            disabled={!edit}
            value={"hier wird der name dynamisch geladen"}
            size="xl"
          />
          <Field.ErrorText>{errors.forename?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.surname} width={{ base: 300, md: 750 }}>
          <Field.Label>
            <Heading>Surname</Heading>
          </Field.Label>
          <Input
            {...register("surname")}
            disabled={!edit}
            value={"hier wird der name dynamisch geladen"}
            size="xl"
          />
          <Field.ErrorText>{errors.surname?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.username} width={{ base: 300, md: 750 }}>
          <Field.Label>
            <Heading>Username</Heading>
          </Field.Label>
          <Input
            {...register("username")}
            disabled={!edit}
            value={"hier wird der username dynamisch geladen"}
            size="xl"
          />
          <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.email} width={{ base: 300, md: 750 }}>
          <Field.Label>
            <Heading>E-Mail</Heading>
          </Field.Label>
          <Input
            {...register("email")}
            disabled={!edit}
            value={"hier wird die email dynamisch geladen"}
            size="xl"
          />
          <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.about} width={{ base: 300, md: 750 }}>
          <Field.Label>
            <Heading>About</Heading>
          </Field.Label>
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
              disabled={!edit}
              value={""}
              size="xl"
            />
          </InputGroup>
          <Field.ErrorText>{errors.about?.message}</Field.ErrorText>
        </Field.Root>
        <HStack>
          <Button
            type={edit ? "submit" : "button"}
            onClick={() => setEdit(!edit)}
            size="xl"
          >
            {edit ? "Submit" : "Edit"}
          </Button>
          <Button
            size="xl"
            type={"button"}
            hidden={!edit}
            onClick={() => setEdit(!edit)}
          >
            Cancel
          </Button>
        </HStack>
      </Stack>
    </form>
  );
};

export default Profile;
