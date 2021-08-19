/* eslint-disable import/no-mutable-exports */
const development = false;

// let URL: string;
let URL_BACKEND: string;

if (development) {
  // URL = 'http://localhost:3000';
  URL_BACKEND = 'http://localhost:3333';
} else {
  // URL = 'http://localhost:3000';
  URL_BACKEND = 'https://api.apjesc.com.br';
}

export { URL_BACKEND };
