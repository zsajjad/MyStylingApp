import Permissions from 'react-native-permissions';

const RESPONSE = {
  authorized: 'AUTHORIZED',
  denied: 'DENIED',
  restricted: 'RESTRICTED',
  undetermined: 'ERROR',
};

export async function getLocationPermission(request = true) {
  let permission = await Permissions.check('location');
  if (!request) {
    return RESPONSE[permission];
  }
  if (permission !== 'authorized') {
    permission = await Permissions.request('location');
  }
  return RESPONSE[permission];
}
