"use client";
import Transaction from "@/components/templates/Transaction";
import { useGetTransactions } from "@/core/services/queries";

function TransactionsPage() {
  const { data, isPending } = useGetTransactions();
  if (isPending) return <p>Loading......</p>;
  console.log(data);

  return <Transaction data={data.data} />;
}

export default TransactionsPage;
