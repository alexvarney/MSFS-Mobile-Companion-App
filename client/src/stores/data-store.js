import React, { useReducer, useContext, useCallback } from "react";
import { useMutation, useQuery, useQueryCache } from "react-query";
import { BASE_PATH } from "../hooks/useDataPolling";

const triggerUpdate = ({ eventName, value }) => {
  return fetch(BASE_PATH + `event/${eventName}/trigger`, {
    method: "POST",
    body: JSON.stringify({ value_to_use: value }),
  });
};

const DataStoreContext = React.createContext();

const ActionTypes = {
  setValues: "setValues",
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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

  const cache = useQueryCache();

  const [mutate] = useMutation(triggerUpdate, {
    onSuccess: async () => {
      await delay(2500);
      cache.invalidateQueries("simData");
    },
  });

  const trigger = useCallback(
    async (values) => {
      await mutate(values);
    },
    [mutate]
  );

  const setValues = (values) =>
    dispatch({ type: ActionTypes.setValues, payload: values });

  return { state, dispatch, setValues, trigger };
};

export default useDataStore;
