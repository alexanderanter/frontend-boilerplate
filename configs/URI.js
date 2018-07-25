const DEVELOPMENT = 'http://localhost:8080';
const PRODUCTION = '';
const BASE_URI = process.env.HOST === 'DEVELOPMENT' ? DEVELOPMENT : PRODUCTION;

export default BASE_URI;
