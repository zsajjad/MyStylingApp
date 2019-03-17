/**
 * Network Info for App
 */
import { NetInfo } from 'react-native';
import { eventChannel } from 'redux-saga';

export function getNetworkInfo() {
  return NetInfo.isConnected.fetch();
}

export function createNetworkInfoChangesChannel() {
  return eventChannel((emit) => {
    NetInfo.isConnected.addEventListener('connectionChange', emit);
    return () =>
      NetInfo.isConnected.removeEventListener('connectionChange', emit);
  });
}

export async function getNetworkType() {
  const connectionInfo = await NetInfo.getConnectionInfo();
  if (connectionInfo && connectionInfo.type) {
    return `${connectionInfo.type}${
      connectionInfo.effectiveType !== 'unknown'
        ? `-${connectionInfo.effectiveType}`
        : ''
    }`;
  }
  return '';
}
