import { http } from "../http"; // import http module from the http file

export interface User {
  // Define interface named user
  data: Data; // data property of user
  status: number; // status property of user
  statusText: string; // statusText property of user
}

export interface Data {
  // Define interface named Data
  user: UserClass; // user property of data
  msg: string; // msg property of data
}

export interface UserClass {
  // Define interface named UserClass
  id: string; // id property of userClass
  name: string; // name property of userClass
  email: string; // email property of userClass
  password: string; // password property of userClass
  emailVerified: null; // emailVerified property of userClass
  image: null; // image property of userClass
  isAdmin: boolean; // isAdmin property of userClass
  isTeacher: boolean; // isTeacher property of userClass
}

export const fetchUsers = async (): Promise<User[]> => {
  // Define function to fetch all users
  return await http.get("/users"); // fetches users from the database
};
export const fetchSingleUser = async (email: string): Promise<User> => {
  // Define function to fetch single user
  return await http.get(`/users?email=${email}`); // fetches user from the database
};

export const createUser = async (user: UserClass): Promise<User> => {
  // Define function to create user
  return await http.post("/users", user); // create user in the database
};

export const updateUser = async (user: UserClass): Promise<User> => {
  // Define function to update user
  return await http.put(`/users/${user.id}`, user); // update user in the database
};

export const deleteUser = async (user: UserClass): Promise<User> => {
  // Define function to delete user
  return await http.delete(`/users/${user.id}`); // delete user from the database
};
