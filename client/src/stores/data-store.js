import React, { useReducer, useContext } from "react";

const DataStoreContext = React.createContext();

const ActionTypes = {
  setValues: "setValues",
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

export const DataStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});
  const value = React.useMemo(() => [state, dispatch], [state]);

  return (
    <DataStoreContext.Provider value={value}>
      {children}
    </DataStoreContext.Provider>
  );
};

const useDataStore = () => {
  const [state, dispatch] = useContext(DataStoreContext);

  const setValues = (values) =>
    dispatch({ type: ActionTypes.setValues, payload: values });

  return { state, dispatch, setValues };
};

export default useDataStore;
