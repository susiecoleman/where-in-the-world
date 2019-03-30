import { SimpleResponse, dialogflow } from 'actions-on-google';
import { UserData, getCurrentCountry, setCurrentCountry } from './userData';
import { isCorrectContinent, pickCountry } from './countries';

import { Continent } from './models';
import { region } from 'firebase-functions';

const app = dialogflow<{}, UserData>({
  debug: true,
});

app.intent('welcome', conv => {
  const country = pickCountry();
  conv.ask(
    new SimpleResponse({
      text: 'Welcome to Where in the World!',
      speech:
        "Welcome to the where in the world game. I'm going to name a country and all you need to do is tell me which continent it's on.",
    })
  );
  conv.ask(`Which continent is ${country.name} part of? ${country.emoji}`);
  const userData: UserData = conv.user.storage;
  setCurrentCountry(userData, country);
});

app.intent<{ continent: Continent }>(
  'continent_input',
  (conv, { continent }) => {
    const userData: UserData = conv.user.storage;
    const country = getCurrentCountry(userData);
    const isCorrectAnswer = isCorrectContinent(country, continent);
    if (isCorrectAnswer) {
      conv.ask("That's correct!");
    } else {
      conv.ask("That's wrong");
    }
    const nextCountry = pickCountry();
    conv.ask(`Which continent is ${nextCountry.name} part of?`);
    setCurrentCountry(userData, nextCountry);
  }
);

exports.whereInTheWorld = region('europe-west1').https.onRequest(app);
