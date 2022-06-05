import type { InjectionKey } from "@vue/runtime-core";
import { createStore, Store } from "vuex";
import PeopleService from "@/services/PeopleService";

export type User = {
  id: null | number;
  name: null | string;
  username: null | string;
};

export type Person = {
  id: string | number;
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

function shuffleArray(arr: Array<object>) {
  return arr.sort(() => {
    return Math.random() - 0.5;
  });
}

export const store: Store<State> = createStore<State>({
  state: {
    people: [
      {
        id: 1,
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
        id: 2,
        name: "Jane Doe",
        company: "Samayesh",
        address: "Tehran, IR",
        email: "jane.doe@example.com",
        website: "https://example.com",
        avatar: "assets/img/avatar/000.webp",
        team: "esteghlal",
      },
      {
        id: 3,
        name: "Jon Doe",
        profession: "Trader",
        address: "Tehran, IR",
        email: "jon.doe@example.com",
        website: "https://jon.example.com",
        avatar: "assets/img/avatar/011.webp",
      },
    ],
    user: {
      id: 999,
      name: "Me MySelf",
      username: "admin",
    },
  },
  actions: {
    fetchPeople({ commit /*, dispatch*/ }, { perPage, page }) {
      PeopleService.getPeople(perPage ? perPage : 50, page ? page : 1)
        .then((r) => {
          commit("SET_PEOPLE", shuffleArray(r.data));
        })
        .catch((reason) => {
          const notification = {
            type: "error",
            message: "There was a problem fetching events: " + reason.message,
          };
          // dispatch("notification/add", notification, { root: true });
          console.warn(notification);
        });
    },
    doLogin(context, user: User) {
      context.commit("SET_CURRENT_USER", user);
    },
    doLogout(context) {
      context.commit("SET_CURRENT_USER", {
        id: null,
        name: null,
        username: null,
      });
    },
  },
  getters: {
    isLoggedIn() {
      return store.state.user.id !== null;
    },
    isAdmin() {
      return store.state.user.id === 999;
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
