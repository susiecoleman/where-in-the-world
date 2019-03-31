# Where in the World Action

Action for Google Assistant platform. User is given a country and asked to name the continent it is part of.

## Architecture

Managed through the [assistant console](https://console.actions.google.com) with [dialogflow](https://console.dialogflow.com) for NLU. The dialogflow project is included in the repo as a [zip file](./Where-in-the-World.zip). The fulfillment part of the Action is a [firebase function](https://console.firebase.google.com/)

## Set up

run `yarn install` from inside the `functions` directory

## Deploy

run `yarn deploy` from inside the `functions` directory

## Running Locally

run `yarn valid` from inside the `functions` directory to build, lint and test the project.

[Notes](https://susiecoleman.github.io/frameworks-services-libraries/GoogleServices/Firebase/#running-locally) on running the function locally and a [blog post](https://www.theguardian.com/info/2019/jan/31/hey-google-help-me-use-cloud-functions)

## Action in the Action Store

### Privacy Policy - Required for release

[https://sites.google.com/view/whereintheworldaction/home](https://sites.google.com/view/whereintheworldaction/home)

### Logo

[Globe logo](./logo.png) from [pixabay](https://pixabay.com/illustrations/earth-globe-planet-map-geography-3087437/)
