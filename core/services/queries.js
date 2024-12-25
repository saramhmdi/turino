import { useQuery } from "@tanstack/react-query";
import api from "../config/api";
const useGetAllTours = (destinationId, originId, startDate, endDate) => {
  const queryFn = () =>
    api.get(
      `tour?destinationId=${destinationId || ""}&originId=${
        originId || ""
      }&startDate=${startDate || ""}&endDate=${endDate || ""}`
    );

  const queryKey = ["all-tours", destinationId, originId, startDate, endDate];

  return useQuery({ queryFn, queryKey, enabled: true });
};

const useGetTour = (id) => {
  const queryFn = ()=>api.get(`tour/${id}`);
  const queryKey = ["tourId" ,id];
  return useQuery({ queryFn, queryKey });
};

export { useGetAllTours, useGetTour };
