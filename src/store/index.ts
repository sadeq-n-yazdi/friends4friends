import type { InjectionKey } from "@vue/runtime-core";
import { createStore, Store } from "vuex";

export interface State {
  user: {
    uid: number;
    name: string;
    username: string;
  };
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    user: {
      uid: 1,
      name: "Jon Doe",
      username: "jon.doe",
    },
    people: [
      {
        uid: 0,
        name: "John Doe",
        company: "Educational Publishing",
        profession: "👨‍💻 Senior Fullstack Developer",
        address: "Sheffield, UK",
        phone: "+44 7749 001122",
        email: "john.doe@example.com",
        website: "https://example.com",
        notes:
          "He will be happy to help anyone to improve their skills specialy in codding.",
        avatar: "assets/img/avatar/001.png",
        team: "perspolis",
      },
      {
        uid: 1,
        name: "Jane Doe",
        company: "Samayesh",
        address: "Tehran, IR",
        email: "jane.doe@example.com",
        website: "https://example.com",
        avatar: "assets/img/avatar/000.webp",
        team: "esteghlal",
      },
      {
        uid: 2,
        name: "Jon Doe",
        company: "",
        profession: "Trader",
        address: "Tehran, IR",
        email: "jon.doe@example.com",
        website: "https://jon.example.com",
        avatar: "assets/img/avatar/011.webp",
        team: "",
      },
    ],
  },
  // getters:{},
  // dispatch: {},
  // commit:{},
});
