import axios from "axios";
import { HOURS } from "../utils/constants";
const SERVICE_URL = "https://swapi.dev";

function calculateStops(consumables, MGLT, distance) {
  const timeYieldShip = consumables.split(" ");

  if (timeYieldShip[1] === "day" || timeYieldShip[1] === "days") {
    const distanceYield = timeYieldShip[0] * HOURS.DAY * MGLT;
    const stops = distance / distanceYield;
    return stops;
  } else if (timeYieldShip[1] === "week" || timeYieldShip[1] === "weeks") {
    const distanceYield = timeYieldShip[0] * HOURS.DAY * 7 * MGLT;
    const stops = distance / distanceYield;
    return stops;
  } else if (timeYieldShip[1] === "month" || timeYieldShip[1] === "months") {
    const distanceYield = timeYieldShip[0] * HOURS.DAY * 30 * MGLT;
    const stops = distance / distanceYield;
    return stops;
  } else if (timeYieldShip[1] === "year" || timeYieldShip[1] === "years") {
    const distanceYield = timeYieldShip[0] * HOURS.DAY * 365 * MGLT;
    const stops = distance / distanceYield;
    return stops;
  }
}

function calculateStartShip(payload, distance) {
  const ships = {};

  payload.forEach((ship) => {
    const { name, consumables, MGLT } = ship;
    const stops = calculateStops(consumables, MGLT, distance);
    ships[name] = Math.round(stops);
  });

  console.log(ships);
}

export default class ComplexoService {
  static getStarShips = async (distance) => {
    const URL = `${SERVICE_URL}/api/starships/`;

    await axios.get(URL).then((result) => {
      const payload = result.data.results;
      calculateStartShip(payload, distance);
    });
  };
}
