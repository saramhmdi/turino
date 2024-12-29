import { locations, fleetVehicleMap } from "./constants";
import { ImAirplane } from "react-icons/im";
import { TbCarSuv } from "react-icons/tb";
import { PiVanFill } from "react-icons/pi";
import Bus from "../../components/atoms/icons/Bus";
import { LuShip } from "react-icons/lu";
import { e2p } from "./numbersChange";

function locationToPersian(englishName) {
  if (!englishName) return;
  const locationObj = locations.find(
    (loc) => loc.name.toLowerCase().trim() === englishName.toLowerCase().trim()
  );
  return locationObj ? locationObj.persianName : "نام استان پیدا نشد";
}

function idToPersian(id) {
  if (!id) return;
  const locationObj = locations.find((loc) => loc.id === id);
  return locationObj ? locationObj.persianName : "نام استان پیدا نشد";
}
function translateFleetVehicle(fleetVehicle) {
  return fleetVehicleMap[fleetVehicle] || "نامشخص";
}

const getVehicleIcon = (vehicle) => {
  switch (vehicle) {
    case "Bus":
      return Bus;
    case "Van":
      return PiVanFill;
    case "SUV":
      return TbCarSuv;
    case "Airplane":
      return ImAirplane;
    case "ُShip":
      return LuShip;
    default:
      return null;
  }
};
const persianDate = (date) =>
  new Date(date).toLocaleDateString("fa-IR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const calculateDayNight=(startDate=0 , endDate )=>{
  const start = new Date(startDate);
  const end = new Date(endDate);
  const totalDays = (end - start) / (1000 * 60 * 60 * 24);
  const nights = e2p(Math.floor(totalDays));
  const days = e2p(totalDays % 1 === 0 ? nights : nights + 1);
  const totalHours = e2p(Math.floor((end - start) / (1000 * 60 * 60)));

return {
  days,nights,totalHours
}
}
export {
  locationToPersian,
  convertToIsoString,
  idToPersian,
  translateFleetVehicle,
  getVehicleIcon,
  persianDate,
  calculateDayNight,flattenObject
};
