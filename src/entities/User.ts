export default interface User {
  id?: number;
  first_name?: string;
  last_name?: string;
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

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserUpdate {
  email?: string;
  first_name?: string;
  last_name?: string;
}
