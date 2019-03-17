/**
 *
 * Asynchronously loads the component for Image
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
