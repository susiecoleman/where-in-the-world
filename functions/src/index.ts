import { SimpleResponse, dialogflow } from 'actions-on-google';
import { UserData, getCurrentCountry, getScore, isLastTurn } from './userData';
import { answerResponse, askQuestion, updateUserData } from './responseUtils';
import { isCorrectContinent, pickCountry } from './countries';

import { Continent } from './models';
import { region } from 'firebase-functions';

const app = dialogflow<{}, UserData>({
  debug: true,
});

app.intent('welcome', conv => {
  const country = pickCountry();
  const userData: UserData = conv.user.storage;
  updateUserData(userData, country, false);

  conv.ask(
    new SimpleResponse({
      text: 'Welcome to Where in the World!',
      speech:
        "Welcome to the where in the world game. I'm going to name a country and all you need to do is tell me which continent it's on.",
    })
  );
  askQuestion(country, conv);
});

app.intent<{ continent: Continent }>(
  'continent_input',
  (conv, { continent }) => {
    const userData: UserData = conv.user.storage;
    const country = getCurrentCountry(userData);
    const isCorrectAnswer = isCorrectContinent(country, continent);
    const nextCountry = pickCountry();
    updateUserData(userData, nextCountry, isCorrectAnswer);

    conv.ask(answerResponse(country, isCorrectAnswer));
    if (isLastTurn(userData)) {
      conv.close(
        `Thanks for playing. You got ${getScore(userData) + 1} right.`
      );
    } else {
      askQuestion(nextCountry, conv);
    }
  }
);

exports.whereInTheWorld = region('europe-west1').https.onRequest(app);
