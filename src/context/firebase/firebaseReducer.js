import { SHOW_LOADER, FETCH_NOTES, ADD_NOTE, REMOVE_NOTE } from "../type";

const handlers = {
  [SHOW_LOADER]: (state) => ({ ...state, loading: true }),
  [FETCH_NOTES]: (state, { payload }) => ({
    ...state,
    notes: payload,
    loading: false,
  }),
  [ADD_NOTE]: (state, { payload }) => ({
    ...state,
    notes: [...state.notes, payload],
  }),
  [REMOVE_NOTE]: (state, { payload }) => ({
    ...state,
    notes: state.notes.filter((note) => note.id !== payload),
  }),
  DEFAULT: (state) => state,
};

export const firebaseReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
