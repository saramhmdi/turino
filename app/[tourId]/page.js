"use client";
import { useParams } from "next/navigation";

import Loading from "@/components/atoms/Loading";
import NotConnection from "@/components/templates/NotConnection";
import NotResult from "@/components/templates/NotResult";
import { useGetTour } from "@/core/services/queries";
import React from "react";
import DetailsPage from "@/components/templates/DetailsPage";
import persian from "react-date-object/calendars/persian";

function DetailsTour() {
  const params = useParams();
  const { tourId } = params;
  const { data, isPending, error } = useGetTour(tourId);
  if (isPending) return <Loading />;
  if (error) return <NotConnection />;
  if (data?.data?.length === 0) return <NotResult />;
  console.log(data);
  return <DetailsPage data={data?.data} />;
}

export default DetailsTour;

// export default async function Page({
//     params,
//   }: {
//     params: Promise<{ slug: string }>
//   }) {
//     const slug = (await params).slug
//     return <div>My Post: {slug}</div>
//   }
