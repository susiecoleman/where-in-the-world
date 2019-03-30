import { Country } from 'country-data';

interface UserData {
  turnNumber: number;
  currentCountry: Country;
}

enum Continent {
  NORTHAMERICA = 'northamerica',
  SOUTHAMERICA = 'southamerica',
  ASIA = 'asia',
  EUROPE = 'europe',
  AFRICA = 'africa',
  OCEANIA = 'oceania',
  ANTARCTICA = 'antarctica',
}

const convertStringToContinent = (s: string): Continent | Error => {
  const continents: { [key: string]: Continent } = {
    'North America': Continent.NORTHAMERICA,
    'South America': Continent.SOUTHAMERICA,
    Asia: Continent.ASIA,
    Europe: Continent.EUROPE,
    Africa: Continent.AFRICA,
    Oceania: Continent.OCEANIA,
    Antarctica: Continent.ANTARCTICA,
  };

  const continent: Continent = continents[s];
  return typeof continent === 'undefined'
    ? new Error('Invalid Continent')
    : continent;
};

class Error {
  constructor(public message: string) {}
}

export { UserData, Continent, Error, convertStringToContinent };
