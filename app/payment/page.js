"use client";

import FailedPayment from "@/components/templates/FailedPayment";
import SuccessPayment from "@/components/templates/SuccessPayment";
import { useSearchParams } from "next/navigation";

function PaymentPage() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  if (status === "success") return <SuccessPayment />;

  return <FailedPayment />;
}

export default PaymentPage;
