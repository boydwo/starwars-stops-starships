import axios from 'axios';

import { HOURS } from '../utils/constants';
import { setStops } from '../actions/starShips';

const SERVICE_URL = 'https://swapi.dev';

function calculateStops(amount, MGLT, days, distance) {
  const distanceYield = amount * HOURS.DAY * days * MGLT;
  const stops = distance / distanceYield;
  return Math.round(stops);
}
function calculatesYield(consumables, MGLT, distance) {
  const timeYieldShip = consumables.split(' ');
  const amount = timeYieldShip[0];
  const calendar = timeYieldShip[1];

  if (calendar === 'day' || calendar === 'days') {
    return calculateStops(amount, MGLT, 1, distance);
  }
  if (calendar === 'week' || calendar === 'weeks') {
    return calculateStops(amount, MGLT, 7, distance);
  }
  if (calendar === 'month' || calendar === 'months') {
    return calculateStops(amount, MGLT, 30, distance);
  }
  if (calendar === 'year' || calendar === 'years') {
    return calculateStops(amount, MGLT, 365, distance);
  }
  return 0;
}

function calculateStartShip(payload, distance) {
  const ships = [];

  payload.forEach((ship) => {
    const { name, consumables, MGLT } = ship;
    const stops = calculatesYield(consumables, MGLT, distance);
    const shipStops = {
      name,
      stops,
    };
    ships.push(shipStops);
  });
  return ships;
}

export default class ComplexoService {
  static getStarShips = (distance) => async (dispatch) => {
    const URL = `${SERVICE_URL}/api/starships/`;
    axios.get(URL).then((result) => {
      const payload = result.data.results;
      const stops = calculateStartShip(payload, distance);
      dispatch(setStops(stops));
    });
  };

  static calculatesStarSHipsYield = (data, value) => {
    return calculateStartShip(data, value);
  };
}
