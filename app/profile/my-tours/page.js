"use client";

import { useGetUserTours } from "@/core/services/queries";

function MyToursPage() {
  const { data, isPending } = useGetUserTours();

  if (isPending) return <p>Loading......</p>;

  return (
    <div>
      {data?.data?.map((tour) => (
        <MyToursPage/>
      ))}
    </div>
  );
}

export default MyToursPage;
