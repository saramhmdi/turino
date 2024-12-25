
import { locations } from "./constants";

function locationToPersian(englishName) {
  if (!englishName) return 
  const locationObj = locations.find((loc) => loc.name.toLowerCase().trim() === englishName.toLowerCase().trim());
  return locationObj ? locationObj.persianName : "نام استان پیدا نشد";
}

function idToPersian( id= "2") {
  if (!id) return 
  const locationObj = locations.find(loc => loc.id === id);
  return locationObj ? locationObj.persianName : "نام استان پیدا نشد";
}

export { locationToPersian, convertToIsoString , idToPersian};
