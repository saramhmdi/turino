"use client";

import Loading from "@/components/atoms/Loading";
import NotConnection from "@/components/templates/NotConnection";
import { useGetUserData } from "@/core/services/queries";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function AuthProvider({ children }) {
  const router = useRouter();
  const { isPending, data, error } = useGetUserData(); // Ensure error is destructured correctly

  useEffect(() => {
    if (!isPending && (!data?.data || error)) {
      router.push("/"); // Redirect to home if no data or error
    }
  }, [isPending, data, error]);

  if (isPending) return <Loading />;
  if (error) return <NotConnection />; // Handle error page or fallback UI

  return children;
}

export default AuthProvider;
