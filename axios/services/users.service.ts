import { http } from "../http";

export interface User {
  data: Data;
  status: number;
  statusText: string;
}

export interface Data {
  user: UserClass;
  msg: string;
}

export interface UserClass {
  id: string;
  name: string;
  email: string;
  password: string;
  emailVerified: null;
  image: null;
  isAdmin: boolean;
  isTeacher: boolean;
}

export const fetchUsers = async (): Promise<User[]> => {
  return await http.get("/users");
};
export const fetchSingleUser = async (email: string): Promise<any> => {
  return await http.get(`/users?email=${email}`);
};

export const createUser = async (user: UserClass): Promise<User> => {
  return await http.post("/users", user);
};

export const updateUser = async (user: UserClass): Promise<User> => {
  return await http.put(`/users/${user.id}`, user);
};

export const deleteUser = async (user: UserClass): Promise<User> => {
  return await http.delete(`/users/${user.id}`);
};
