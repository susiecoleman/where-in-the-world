import { Continent, Error, convertStringToContinent } from '../models';

describe('convertStringToContinent', () => {
  test('should return an error if continent is invalid', () => {
    expect(convertStringToContinent('ABC')).toBeInstanceOf(Error);
  });
  test('should return North America', () => {
    expect(convertStringToContinent('North America')).toEqual(
      Continent.NORTHAMERICA
    );
  });
  test('should return South America', () => {
    expect(convertStringToContinent('South America')).toEqual(
      Continent.SOUTHAMERICA
    );
  });
  test('should return Asia', () => {
    expect(convertStringToContinent('Asia')).toEqual(Continent.ASIA);
  });
  test('should return Europe', () => {
    expect(convertStringToContinent('Europe')).toEqual(Continent.EUROPE);
  });
  test('should return Africa', () => {
    expect(convertStringToContinent('Africa')).toEqual(Continent.AFRICA);
  });
  test('should return Oceania', () => {
    expect(convertStringToContinent('Oceania')).toEqual(Continent.OCEANIA);
  });
  test('should return Antarctica', () => {
    expect(convertStringToContinent('Antarctica')).toEqual(
      Continent.ANTARCTICA
    );
  });
});
