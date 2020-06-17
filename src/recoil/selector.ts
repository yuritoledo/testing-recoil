import { selector } from "recoil";
import textState from "./state";

export const textLength = selector({
  key: "textLength",
  get({ get }) {
    const { length } = get(textState);
    return length;
  }
});
