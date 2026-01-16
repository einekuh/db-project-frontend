export default interface User {
  user_id?: string;
  forename?: string;
  surname?: string;
  email?: string;
  password?: string;
  created_at?: string;
  is_active?: boolean;
  is_superuser?: boolean;
  is_verified?: boolean;
  user_status?: string;
}

export interface UserCreate {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}
