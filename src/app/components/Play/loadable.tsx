/*
 *
 * Asynchronously loads the component for Play
 *
 */
import { lazyLoad } from 'utils/loadable';

export default lazyLoad(() => import('./index'));
