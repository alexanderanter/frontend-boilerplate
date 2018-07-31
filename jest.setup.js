/* eslint-disable import/no-extraneous-dependencies */
import 'raf/polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-localstorage-mock';
import fetchMock from 'jest-fetch-mock';
/* eslint-enable import/no-extraneous-dependencies */

global.fetch = fetchMock;

Enzyme.configure({ adapter: new Adapter() });
