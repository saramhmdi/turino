"use client";

import { useAddToBasket } from "@/core/services/mutations";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function ReserveButton({text , id}) {
  const { mutate, isPending } = useAddToBasket();
  const router = useRouter();

  const cartHandler = () => {
    if (isPending) return;

    mutate(id, {
      onSuccess: (data) => {
        toast.success(data.data.message);
        router.push("/checkout");
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  return (
    <span
    className="bg-primary py-2 px-4 lg:px-8 rounded-[10px] text-xl lg:text-2xl text-background"
    onClick={cartHandler}
    >{text}</span>
  )
}

export default ReserveButton