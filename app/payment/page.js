"use client";

import FailedPayment from "@/components/templates/FailedPayment";
import SuccessPayment from "@/components/templates/SuccessPayment";
import useQuery from "@/core/hooks/query";
import Link from "next/link";
import { useEffect } from "react";

function PaymentPage() {
  const { getQuery } = useQuery();
  console.log(getQuery);
  const status = getQuery("status");

  if (status === "success") return <SuccessPayment />;

  return <FailedPayment />;
}

export default PaymentPage;
