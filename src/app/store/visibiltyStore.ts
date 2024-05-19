import { createEvent, createStore } from "effector";

type VisibilityStoreType = {
  isVisibleMenu: boolean;
  isFilterVisible: boolean;
};

type VisibilityPayload =
  | {
      isVisibleMenu: boolean;
    }
  | {
      isFilterVisible: boolean;
    };

export const toggleVisibilty = createEvent<VisibilityPayload>();

export const $visibiltyStore = createStore<VisibilityStoreType>({
  isVisibleMenu: false,
  isFilterVisible: false,
}).on(toggleVisibilty, (state, payload) => {
  return { ...state, ...payload };
});
