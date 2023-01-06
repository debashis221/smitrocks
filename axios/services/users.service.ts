import { http } from "../http";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export const fetchUsers = async (): Promise<User[]> => {
  return await http.get<User[]>("/users");
};

export const createUser = async (user: User): Promise<User> => {
  return await http.post<User>("/users", user);
};

export const updateUser = async (user: User): Promise<User> => {
  return await http.put<User>(`/users/${user.id}`, user);
};

export const deleteUser = async (user: User): Promise<User> => {
  return await http.delete<User>(`/users/${user.id}`);
};
