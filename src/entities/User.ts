import type { ZodUUID } from "zod";

export default interface User {
  userId: ZodUUID;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  passwordHash: string;
}
