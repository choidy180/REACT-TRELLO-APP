import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minute",
  default: 0,
})

export const hourSelector = selector<number>({
  key: "hours",
  get: ({get}) => {
    const minutes = get(minuteState);
    return minutes/60;
  },
  // set = state를 수정해줌
  set: ({set}, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
  }
})