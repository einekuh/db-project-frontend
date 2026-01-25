import {
  Box,
  Button,
  CloseButton,
  Dialog,
  Field,
  Heading,
  HStack,
  Input,
  Portal,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useEffect, useState } from "react";
import useMe from "@/hooks/useMe";
import useUpdateUser from "@/hooks/useUpdateUser";
import useDeleteUser from "@/hooks/useDeleteUser";
import useLogout from "@/hooks/useLogout";

const schema = z.object({
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
});

type ProfileFormData = z.infer<typeof schema>;

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileFormData>({ resolver: zodResolver(schema) });
  const [edit, setEdit] = useState(false);

  const updateUser = useUpdateUser();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    updateUser.mutate(data);
  });

  const { data: user, error, isLoading } = useMe(3);

  // Sync form values with the currently loaded user
  useEffect(() => {
    if (!user) return;
    reset({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    });
  }, [user, reset]);

  const deleteUser = useDeleteUser();
  const logout = useLogout();

  const handleDelete = () => {
    deleteUser.mutate(undefined, {
      onSuccess: () => {
        // Backend returns 204 No Content on success and clears the cookie.
        logout.mutate();
      },
      onError: (error: any) => {
        const status = error?.response?.status;
        const data = error?.response?.data;
        // Temporäres Debugging: Status + Response loggen
        // (im Browser in der Konsole sichtbar)
        console.error("Delete account failed", { status, data });
        alert(`Could not delete account. Status: ${status}`);
      },
    });
  };

  /////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////

  if (error) return error.message;

  if (isLoading) return <Spinner />;

  if (user)
    return (
      <form onSubmit={onSubmit}>
        <Heading marginY={16} fontSize="250%">
          Your Profile!
        </Heading>
        <Stack gap="4" align="flex-start">
          <Field.Root
            invalid={!!errors.first_name}
            width={{ base: 300, md: 750 }}
          >
            <Field.Label>
              <Heading>First Name</Heading>
            </Field.Label>
            <Input {...register("first_name")} disabled={!edit} size="xl" />
            <Field.ErrorText>{errors.first_name?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root
            invalid={!!errors.last_name}
            width={{ base: 300, md: 750 }}
          >
            <Field.Label>
              <Heading>Last Name</Heading>
            </Field.Label>
            <Input {...register("last_name")} disabled={!edit} size="xl" />
            <Field.ErrorText>{errors.last_name?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.email} width={{ base: 300, md: 750 }}>
            <Field.Label>
              <Heading>E-Mail</Heading>
            </Field.Label>
            <Input {...register("email")} disabled={!edit} size="xl" />
            <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
          </Field.Root>

          <HStack>
            <Button
              type="button"
              onClick={() => setEdit(!edit)}
              size="xl"
              hidden={edit}
            >
              Edit
            </Button>
            <Button
              type="submit"
              onClick={() => setEdit(!edit)}
              size="xl"
              hidden={!edit}
            >
              Submit
            </Button>
            <Button
              size="xl"
              type="reset"
              hidden={!edit}
              onClick={() => {
                setEdit(!edit);
              }}
            >
              Cancel
            </Button>
          </HStack>
          <Box marginTop="10%">
            <Dialog.Root motionPreset="slide-in-bottom" size="sm">
              <Dialog.Trigger asChild>
                <Button variant="outline" colorPalette="red">
                  Delete Account
                </Button>
              </Dialog.Trigger>
              <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                  <Dialog.Content>
                    <Dialog.Header>
                      <Dialog.Title>
                        <Text>Delete</Text>
                      </Dialog.Title>
                    </Dialog.Header>
                    <Dialog.Body>
                      <Text>
                        Do you really want to delete your account? It will not
                        be possible to restore it!
                      </Text>
                    </Dialog.Body>
                    <Dialog.Footer>
                      <Dialog.ActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                      </Dialog.ActionTrigger>
                      <Button
                        variant="outline"
                        colorPalette="red"
                        onClick={handleDelete}
                      >
                        Delete
                      </Button>
                    </Dialog.Footer>
                    <Dialog.CloseTrigger asChild>
                      <CloseButton size="sm" />
                    </Dialog.CloseTrigger>
                  </Dialog.Content>
                </Dialog.Positioner>
              </Portal>
            </Dialog.Root>
          </Box>
        </Stack>
      </form>
    );
};

export default Profile;
