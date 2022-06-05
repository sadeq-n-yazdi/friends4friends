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
  },
  // getters:{},
  // dispatch: {},
  // commit:{},
});
