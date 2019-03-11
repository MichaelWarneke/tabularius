import * as functions from 'firebase-functions';

export const helloWorld = functions.https.onRequest(
  (request: any, response: any) => {
    response.send('Hello from Firebase via travis!');
  }
);
