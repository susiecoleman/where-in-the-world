import { Country } from 'country-data';
import { UserData } from './models';

const getCurrentCountry = (userData: UserData): Country => {
  return userData.currentCountry;
};

const setCurrentCountry = (userData: UserData, country: Country): UserData => {
  userData.currentCountry = country;
  return userData;
};

const isLastTurn = (userData: UserData): boolean => {
  return userData.turnNumber >= 3;
};

const updateTurnCount = (userData: UserData): UserData => {
  userData.turnNumber = userData.turnNumber += 1;
  return userData;
};

export {
  UserData,
  getCurrentCountry,
  setCurrentCountry,
  isLastTurn,
  updateTurnCount,
};
