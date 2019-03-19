/*
 * HomeScreenScreen Messages
 *
 * This contains all the text for the HomeScreen component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.HomeScreen';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'AI Style Transfer',
  },
  subHeader: {
    id: `${scope}.subHeader`,
    defaultMessage: 'Using Fritz SDK',
  },
  cameraLabel: {
    id: `${scope}.cameraLabel`,
    defaultMessage: 'Use Camera',
  },
  localLabel: {
    id: `${scope}.localLabel`,
    defaultMessage: 'Pick From Gallery',
  },
  credits: {
    id: `${scope}.credits`,
    defaultMessage: 'Image by {owner} at {source}',
  },
});
