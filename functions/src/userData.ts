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
  return userData.turnNumber >= 5;
};

const updateTurnCount = (userData: UserData): UserData => {
  userData.turnNumber = userData.turnNumber += 1;
  return userData;
};

const updateScore = (userData: UserData): UserData => {
  userData.score = userData.score += 1;
  return userData;
};

const getScore = (userData: UserData) => {
  return userData.score || 0;
};

export {
  UserData,
  getCurrentCountry,
  setCurrentCountry,
  isLastTurn,
  updateTurnCount,
  updateScore,
  getScore,
};
