import { ADD_PASS, CHANGE_NUMBER, NEW_CLICK } from "../constants/action-types";

const initialState = {
    pass: "",
    number: 8,
    new_click: true
};
  
function rootReducer(state = initialState, action) {
    if (action.type === ADD_PASS) {
        return Object.assign({}, state, {
            pass: action.payload
          });
    }
    if (action.type === CHANGE_NUMBER) {
        return Object.assign({}, state, {
            number: action.payload
          });
    }
    if (action.type === NEW_CLICK) {
        return Object.assign({}, state, {
            new_click: action.payload
          });
    }
    return state;
};

export default rootReducer;