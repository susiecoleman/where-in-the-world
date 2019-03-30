import { Country } from 'country-data';
import { UserData } from './models';

const getCurrentCountry = (userData: UserData): Country => {
  return userData.currentCountry;
};

const setCurrentCountry = (userData: UserData, country: Country): UserData => {
  userData.currentCountry = country;
  return userData;
};

export { UserData, getCurrentCountry, setCurrentCountry };
