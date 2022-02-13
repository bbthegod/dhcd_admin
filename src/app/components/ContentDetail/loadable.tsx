/*
 *
 * Asynchronously loads the component for ContentDetail
 *
 */
import { lazyLoad } from 'utils/loadable';

export default lazyLoad(() => import('./index'));
