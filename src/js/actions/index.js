import { ADD_PASS, CHANGE_NUMBER, NEW_CLICK } from "../constants/action-types";

export function addPass(payload) {
  return { type: ADD_PASS, payload }
};
export function changeNumber(payload) {
  return { type: CHANGE_NUMBER, payload }
};
export function newClick(payload) {
  return { type: NEW_CLICK, payload }
};