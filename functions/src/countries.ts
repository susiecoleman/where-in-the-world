import { Continent, Error, convertStringToContinent } from './models';
import { Country, countries } from 'country-data';
import {
  Country as CountryData,
  continents,
  countries as countryWithContinents,
} from 'countries-list';

const countryList: ReadonlyArray<Country> = countries.all;
const countriesWithContinentsList: {
  [K: string]: CountryData;
} = countryWithContinents;
const continentsList: { [K: string]: string } = continents;

const pickCountry = (): Country => {
  const index = Math.floor(Math.random() * countryList.length);
  return countryList[index];
};

const isCorrectContinent = (
  country: Country,
  continent: Continent
): boolean => {
  const countryContinent = getCountryContinent(country);
  if (countryContinent instanceof Error) {
    return false;
  } else {
    return countryContinent === continent;
  }
};

const getCountryContinent = (country: Country): Continent | Error => {
  const countryAlpha2Code: string = country.alpha2;
  const countryWithContinent: CountryData =
    countriesWithContinentsList[countryAlpha2Code];
  const continentAlpha2Code: string =
    typeof countryWithContinent === 'undefined'
      ? ''
      : countryWithContinent.continent;
  const continent: string = convertAlpha2CodeToFullName(continentAlpha2Code);
  return convertStringToContinent(continent);
};

const convertAlpha2CodeToFullName = (continent: string): string => {
  return continentsList[continent] || '';
};

export {
  pickCountry,
  convertAlpha2CodeToFullName,
  isCorrectContinent,
  getCountryContinent,
};
