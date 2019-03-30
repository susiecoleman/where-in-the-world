import {
  Contexts,
  DialogflowConversation,
  SimpleResponse,
  Suggestions,
} from 'actions-on-google';
import { Continent, UserData } from './models';
import { setCurrentCountry, updateScore, updateTurnCount } from './userData';

import { Country } from 'country-data';
import { getCountryContinent } from './countries';

const updateUserData = (
  userData: UserData,
  country: Country,
  isCorrectAnswer: boolean
) => {
  setCurrentCountry(userData, country);
  updateTurnCount(userData);
  if (isCorrectAnswer) {
    updateScore(userData);
  }
};

const answerResponse = (country: Country, isCorrect: boolean) => {
  const getRightAnswer = () => {
    switch (getCountryContinent(country)) {
      case Continent.AFRICA:
        return 'The correct answer is Africa';
      case Continent.ANTARCTICA:
        return 'The correct answer is Antarctica';
      case Continent.ASIA:
        return 'The correct answer is Asia';
      case Continent.EUROPE:
        return 'The correct answer is Europe';
      case Continent.NORTHAMERICA:
        return 'The correct answer is North America';
      case Continent.OCEANIA:
        return 'The correct answer is Oceania';
      case Continent.SOUTHAMERICA:
        return 'The correct answer is South America';
      default:
        return '';
    }
  };

  if (isCorrect) {
    return `That's correct`;
  } else {
    return `That's not right. ${getRightAnswer()}`;
  }
};

const askQuestion = (
  country: Country,
  conv: DialogflowConversation<{}, UserData, Contexts>
) => {
  const response = `Which continent is ${country.name} part of?`;
  if (conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')) {
    conv.ask(
      new SimpleResponse({
        speech: response,
        text: `${response} ${country.emoji}`,
      })
    );
    conv.ask(
      new Suggestions([
        'Africa',
        'Antarctica',
        'Asia',
        'Europe',
        'North America',
        'Oceania',
        'South America',
      ])
    );
  } else {
    conv.ask(response);
  }
};

export { updateUserData, answerResponse, askQuestion };
