import axios from "axios";
import type { Person } from "@/store";

const apiClient = axios.create({
  baseURL: `http://localhost:8000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getPeople(perPage: number, page: number) {
    return apiClient.get("/people?_limit=" + perPage + "&_page=" + page);
  },
  getPerson(id: number) {
    return apiClient.get("/people/" + id);
  },
  postPerson(person: Person) {
    return apiClient.post("/people", person);
  },
};
