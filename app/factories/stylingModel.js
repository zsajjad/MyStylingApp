import pick from 'lodash/pick';
import find from 'lodash/find';

import { RNFritzVisionImageStyling } from 'react-native-fritz';

const MODELS = [
  {
    name: 'darkKnights',
    customModel: true,
    modelIdentifier: '55cdc02f89174e1c8458690d5b8621ae',
    modelVersion: 1,
    sample: '',
    title: 'Dark Knights',
  },
  {
    name: 'starryNight',
    customModel: false,
    sample: '',
    title: 'Starry Night',
  },
  {
    name: 'poppyField',
    customModel: false,
    sample: '',
    title: 'Poppy Field',
  },
  {
    name: 'theScream',
    customModel: false,
    sample: '',
    title: 'The Scream',
  },
  {
    name: 'bicentennialPrint',
    customModel: false,
    sample: '',
    title: 'Bicentennial Print',
  },
  {
    name: 'femmes',
    customModel: false,
    sample: '',
    title: 'Les Femmes',
  },
  {
    name: 'headOfClown',
    customModel: false,
    sample: '',
    title: 'Head of Clown',
  },
  {
    name: 'theTrial',
    customModel: false,
    sample: '',
    title: 'The Trial',
  },
  {
    name: 'ritmoPlastico',
    customModel: false,
    sample: '',
    title: 'Ritmo Plastico',
  },
  {
    name: 'kaleidoscope',
    customModel: false,
    sample: '',
    title: 'Kaleidoscope',
  },
  {
    name: 'pinkBlueRhombus',
    customModel: false,
    sample: '',
    title: 'Pink Blue Rhombus',
  },
];

const loadedModels = {};

export async function getModelInstance(modelName) {
  if (!modelName) {
    throw Error('NO MODEL NAME FOUND');
  }
  if (!loadedModels[modelName]) {
    const modelConfigs = find(MODELS, ['name', modelName]);
    const params = pick(modelConfigs, [
      'name',
      'modelIdentifier',
      'customModel',
      'modelVersion',
    ]);
    if (!params.name) {
      throw Error('NO MODEL NAME FOUND', params);
    }
    const model = await RNFritzVisionImageStyling(params);
    loadedModels[modelName] = model;
  }
  return new Promise((res) => {
    res(loadedModels[modelName]);
  });
}

export const getModelsList = () =>
  MODELS.map((item) => pick(item, ['name', 'title', 'sample']));
