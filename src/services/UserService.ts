import axios from "axios";
import type { User } from "@/store";

const apiClient = axios.create({
  baseURL: `http://localhost:8000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getUsers(perPage: number, page: number) {
    return apiClient.get("/user?_limit=" + perPage + "&_page=" + page);
  },
  getUser(id: number) {
    return apiClient.get("/user/" + id);
  },
  postUser(person: User) {
    return apiClient.post("/user", person);
  },
  login(username: string, password: string) {
    //TODO: Check credentials
    console.log([username, password]);
    if (username === "admin" && password === "admin") {
      return this.getUser(999);
    }
    return false;
  },
};
