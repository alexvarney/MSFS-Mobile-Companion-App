import { useEffect } from "react";
import useDataStore from "../stores/data-store";
import { useQuery } from "react-query";

export const BASE_PATH = "http://192.168.0.22:4000/";

const truncateCoordinate = (x) => (x ? parseFloat(x).toFixed(5) : 0);

const useDataPolling = () => {
  const { state, setValues } = useDataStore();

  const { data } = useQuery(
    "simData",
    async () => {
      const response = await fetch(BASE_PATH + "ui");
      const data = await response.json();

      data.LATITUDE = truncateCoordinate(data?.LATITUDE);
      data.LONGITUDE = truncateCoordinate(data?.LONGITUDE);

      return data;
    },
    {
      refetchInterval: 1000,
    }
  );

  useEffect(() => {
    if (JSON.stringify(state) !== JSON.stringify(data)) {
      console.log("data changed, updating");
      setValues(data);
    }
  }, [data]);
};

export default useDataPolling;
