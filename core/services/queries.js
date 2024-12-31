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
  const queryFn = () => api.get(`tour/${id}`);
  const queryKey = ["tourId", id];
  return useQuery({ queryFn, queryKey });
};
const useGetUserData = () => {
  const queryFn = () => api.get("user/profile");
  const queryKey = ["user-data"];

  return useQuery({ queryFn, queryKey });
};

const useGetBasket = () => {
  const queryFn = () => api.get("basket");
  const queryKey = ["user-basket"];

  return useQuery({ queryFn, queryKey });
};

const useGetUserTours = () => {
  const queryFn = () => api.get("user/tours");
  const queryKey = ["user-tours"];

  return useQuery({ queryFn, queryKey });
};
const useGetTransactions = () => {
  const queryFn = () => api.get("user/transactions");
  const queryKey = ["user-transactions"];

  return useQuery({ queryFn, queryKey });
};
const useGetProfile = () => {
  const queryFn = () => api.get("user/profile");
  const queryKey = ["user-profile"];

  return useQuery({ queryFn, queryKey });
};
export {
  useGetAllTours,
  useGetTour,
  useGetUserData,
  useGetUserTours,
  useGetBasket,
  useGetTransactions,
  useGetProfile,
};
