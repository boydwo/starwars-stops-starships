import ApiService from '../services/ApiService';

import { object } from './mock/mock-ApiService';
import { result } from './mock/mock-result-ApiService';

describe('Test method of calculating starShips stops in ApiService', () => {
  it('The method must receive the distance and objects of the ships and return the number of stops', () => {
    const calculation = ApiService.calculatesStarSHipsYield(object, 1000000);
    expect(calculation).toEqual(result);
  });
});
