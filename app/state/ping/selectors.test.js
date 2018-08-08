import { getPingMessage, pingHasError, pingIsLoading } from './selectors';

describe('ping selectors', () => {
  const mockState = {
    ping: {
      pingData: {
        error: true,
        loading: true,
        message: 'Hello world'
      }
    }
  };
  describe('getPingMessage', () => {
    it('Should return message', () => {
      expect(getPingMessage(mockState)).toEqual(mockState.ping.pingData.message);
    });
  });
  describe('pingHasError', () => {
    it('Should return error state', () => {
      expect(pingHasError(mockState)).toEqual(mockState.ping.pingData.error);
    });
  });
  describe('pingIsLoading', () => {
    it('Should return loading state', () => {
      expect(pingIsLoading(mockState)).toEqual(mockState.ping.pingData.loading);
    });
  });
});
