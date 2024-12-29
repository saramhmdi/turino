import ReserveButton from "@/components/atoms/ReserveButton";
import { serverFetch } from "@/core/services/http";
import RegisterReservation from "../molecules/RegisterReservation";

async function PassengerDetails(context) {
  const {params} = context
  // const tourData = await serverFetch(`tour/${params.id}`, null, {
  //   cache: "no-store",
  // });
  console.log(params)
  return (
    <div>
      {/* <RegisterReservation title={tourData}/> */}
    </div>
  )
}

export default PassengerDetails