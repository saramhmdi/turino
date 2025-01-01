
"use client";

import Loading from "@/components/atoms/Loading";
import MyToursPage from "@/components/templates/MyToursPage";
import { useGetUserTours } from "@/core/services/queries";

function MyTours() {
  const { data, isPending } = useGetUserTours();

  if (isPending) return <Loading />;
  if (!data?.data?.length) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-500">
        هیچ تور فعالی برای نمایش وجود ندارد.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {data.data.map((tour, index) => (
        <MyToursPage key={index} tour={tour} />
      ))}
    </div>
  );
}

export default MyTours;
