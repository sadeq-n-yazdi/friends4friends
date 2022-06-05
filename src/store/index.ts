import type { InjectionKey } from "@vue/runtime-core";
import { createStore, Store } from "vuex";

export type User = {
  uid: null | number;
  name: null | string;
  username: null | string;
};

export type Person = {
  uid: string | number;
  name: string;
  company?: null | string;
  profession?: null | string;
  address?: null | string;
  phone?: null | string;
  email?: null | string;
  website?: null | string;
  notes?: null | string;
  avatar: string;
  team?: null | string;
};

export interface State {
  user: User;
  people: Person[];
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store: Store<State> = createStore<State>({
  state: {
    people: [
      {
        uid: 1,
        name: "John Doe",
        company: "Educational Publishing",
        profession: "👨‍💻 Senior Fullstack Developer",
        address: "Sheffield, UK",
        phone: "+44 7749 001122",
        email: "john.doe@example.com",
        website: "https://example.com",
        notes:
          "He will be happy to help anyone to improve their skills specially in codding.",
        avatar: "assets/img/avatar/001.png",
        team: "perspolis",
      },
      {
        uid: 2,
        name: "Jane Doe",
        company: "Samayesh",
        address: "Tehran, IR",
        email: "jane.doe@example.com",
        website: "https://example.com",
        avatar: "assets/img/avatar/000.webp",
        team: "esteghlal",
      },
      {
        uid: 3,
        name: "Jon Doe",
        profession: "Trader",
        address: "Tehran, IR",
        email: "jon.doe@example.com",
        website: "https://jon.example.com",
        avatar: "assets/img/avatar/011.webp",
      },
    ],
    user: {
      uid: 999,
      name: "Me MySelf",
      username: "admin",
    },
  },
  actions: {
    fetchPeople(context) {
      //TODO: Perform Ajax Call to fetch people list
      context.commit("SET_PEOPLE", [
        {
          uid: 4,
          name: "Jon Matrix",
          profession: "Superhero",
          address: "Matrix",
          email: "matrix@example.com",
          website: "https://matrix.example.com",
          avatar: "assets/img/avatar/012.webp",
        },
      ]);
    },
    doLogin(context, user: User) {
      context.commit("SET_CURRENT_USER", user);
    },
    doLogout(context) {
      context.commit("SET_CURRENT_USER", {
        uid: null,
        name: null,
        username: null,
      });
    },
  },
  getters: {
    isLoggedIn() {
      return store.state.user.uid !== null;
    },
    isAdmin() {
      return store.state.user.uid === 999;
    },
  },
  mutations: {
    SET_CURRENT_USER(state, user: User) {
      state.user = user;
    },
    SET_PEOPLE(state, people: Person[]) {
      state.people = people;
    },
  },
});
