export const getPingMessage = state => state.ping.pingData.message;
export const pingHasError = state => state.ping.pingData.error;
export const pingIsLoading = state => state.ping.pingData.loading;

export default {
  getPingMessage,
  pingHasError,
  pingIsLoading
};
