/*
 *
 * Asynchronously loads the component for HeaderTable
 *
 */
import { lazyLoad } from 'utils/loadable';

export default lazyLoad(() => import('./index'));
