import {
  INCREMENT_NUM,
  DECREMENT_NUM,
  RESET,
  TOGGLE,
} from "../constants/ActionTypes";

const arr = [2, -2];
const ran = arr[Math.floor(Math.random() * arr.length)];

export function incrementNum(payload) {
  return {
    type: INCREMENT_NUM,
    payload: payload,
  };
}

export function decrementNum(payload) {
  return {
    type: DECREMENT_NUM,
    payload: payload,
  };
}

export function resetNum() {
  return {
    type: RESET,
    payload: 0,
  };
}

export function toggleNum() {
  return {
    type: TOGGLE,
    // payload: setTimeout(() => 2 || -2, 2000),
    payload: (() => setTimeout(() => ran, 2000))(),
  };
}
