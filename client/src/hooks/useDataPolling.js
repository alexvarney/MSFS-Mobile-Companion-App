import { useEffect } from "react";
import useDataStore from "../stores/data-store";
import {
  useQuery,
  useQueryCache,
  useMutation,
  QueryCache,
  ReactQueryCacheProvider,
} from "react-query";

const API_ROUTE = "http://192.168.0.22:4000/ui";

const useDataPolling = () => {
  const cache = useQueryCache();
  const { setValues } = useDataStore();

  const { status, data, error } = useQuery(
    "simData",
    async () => {
      const response = await fetch(API_ROUTE);
      const data = await response.json();
      return data;
    },
    {
      refetchInterval: 500,
    }
  );

  useEffect(() => setValues(data), [data]);

  return { status, data };
};

export default useDataPolling;
