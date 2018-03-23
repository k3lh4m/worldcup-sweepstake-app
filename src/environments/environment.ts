// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyARFREZhfY1bGy5xIaCcjlSoBc5MiQOD8c',
    authDomain: 'world-cup-sweepstake.firebaseapp.com',
    databaseURL: 'https://world-cup-sweepstake.firebaseio.com',
    projectId: 'world-cup-sweepstake',
    storageBucket: 'world-cup-sweepstake.appspot.com',
    messagingSenderId: '587705123967'
  }
};
