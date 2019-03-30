import { UserData } from '../models';
import { lookup } from 'country-data';
import { updateTurnCount } from '../userData';

describe('updateTurnCount', () => {
  test('', () => {
    const input: UserData = {
      turnNumber: 1,
      currentCountry: lookup.countries({ name: 'United Kingdom' })[0],
    };
    expect(updateTurnCount(input).turnNumber).toEqual(2);
  });
});
