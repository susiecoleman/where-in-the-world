import { Continent, Error } from '../models';
import {
  convertAlpha2CodeToFullName,
  getCountryContinent,
  isCorrectContinent,
} from '../countries';

import { lookup } from 'country-data';

describe('convertAlpha2CodeToFullName', () => {
  test('should return an empty string if the currency code is invalid', () => {
    expect(convertAlpha2CodeToFullName('ABC')).toEqual('');
  });
  test('should return Africa if the currency code is AF', () => {
    expect(convertAlpha2CodeToFullName('AF')).toEqual('Africa');
  });
  test('should return Antarctica if the currency code is AN', () => {
    expect(convertAlpha2CodeToFullName('AN')).toEqual('Antarctica');
  });
  test('should return Asia if the currency code is AS', () => {
    expect(convertAlpha2CodeToFullName('AS')).toEqual('Asia');
  });
  test('should return Europe if the currency code is EU', () => {
    expect(convertAlpha2CodeToFullName('EU')).toEqual('Europe');
  });
  test('should return North America if the currency code is NA', () => {
    expect(convertAlpha2CodeToFullName('NA')).toEqual('North America');
  });
  test('should return Oceania if the currency code is OC', () => {
    expect(convertAlpha2CodeToFullName('OC')).toEqual('Oceania');
  });
  test('should return South America if the currency code is SA', () => {
    expect(convertAlpha2CodeToFullName('SA')).toEqual('South America');
  });
});

describe('isCorrectContinent', () => {
  test('should return true if continent is correct', () => {
    const france = lookup.countries({ name: 'France' })[0];
    expect(isCorrectContinent(france, Continent.EUROPE)).toEqual(true);
  });

  test('should return false if continent is incorrect', () => {
    const france = lookup.countries({ name: 'France' })[0];
    expect(isCorrectContinent(france, Continent.NORTHAMERICA)).toEqual(false);
  });
});

describe('getCountryContinent', () => {
  test('should return the correct continent', () => {
    const uk = lookup.countries({ name: 'United Kingdom' })[0];
    expect(getCountryContinent(uk)).toEqual(Continent.EUROPE);
  });

  test('should return error if continent is invalid', () => {
    const uk = {
      alpha2: 'ZZ',
      alpha3: 'GBR',
      countryCallingCodes: ['+44'],
      currencies: ['GBP'],
      emoji: '🇬🇧',
      ioc: 'GBR',
      languages: ['eng', 'cor', 'gle', 'gla', 'cym'],
      name: 'United Kingdom',
      status: 'assigned',
    };

    expect(getCountryContinent(uk)).toBeInstanceOf(Error);
  });
});
