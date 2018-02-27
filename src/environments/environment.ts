// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,

    // Initialize Firebase
  firebase: {
    apiKey: "AIzaSyBl_nMxgOQh4fCkixstzYpvEWVhs4WC7og",
    authDomain: "nitro-samurai.firebaseapp.com",
    databaseURL: "https://nitro-samurai.firebaseio.com",
    projectId: "nitro-samurai",
    storageBucket: "nitro-samurai.appspot.com",
    messagingSenderId: "870754973021"
  }

};

