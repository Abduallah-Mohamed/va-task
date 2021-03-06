import {
  INCREMENT_NUM,
  DECREMENT_NUM,
  RESET,
  TOGGLE,
} from "../constants/ActionTypes";

export default function reducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT_NUM:
      return state + 1;
    case DECREMENT_NUM:
      return state - 1;
    case RESET:
      return (state = action.payload);
    case TOGGLE:
      return (state = action.payload);
  }

  return state;
}
