import { Log } from 'platform/Logger';
import { AsyncStorage } from 'react-native';
import config from 'configs';

function log(...args) {
  if (!__DEV__ && config.LOG_LOCAL_STORAGE) {
    Log(...args);
  }
}

class LocalStorage {
  setItem(key, data) {
    log('LOCAL STORAGE: Setting ', key, data);
    return AsyncStorage.setItem(key, JSON.stringify(data));
  }

  async getItem(key) {
    log('LOCAL STORAGE: Getting ', key);
    const data = await AsyncStorage.getItem(key);
    try {
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
  }

  removeItem(key) {
    AsyncStorage.removeItem(key);
  }

  async immutableUpdate(key, data) {
    log('LOCAL STORAGE: immutableUpdate ', key, data);
    await AsyncStorage.removeItem(key);
    return AsyncStorage.setItem(key, JSON.stringify(data));
  }

  createInstance() {
    return this;
  }
}

export default new LocalStorage();
