import React, { useReducer } from "react";

const PositionStoreContext = React.createContext();

export const ActionTypes = {
  setValues: "setValues",
};

export const Actions = {
  setValues: (dispatch, payload) =>
    dispatch({ type: ActionTypes.setValues, payload }),
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.setValues:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

const initialState = {};

export const PositionStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});

  return (
    <PositionStoreContext.Provider value={[state, dispatch]}>
      {children}
    </PositionStoreContext.Provider>
  );
};

export default usePositionStore = () => {};
