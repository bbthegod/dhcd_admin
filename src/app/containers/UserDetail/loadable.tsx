/*
 *
 * Asynchronously loads the component for UserDetail
 *
 */
import { lazyLoad } from 'utils/loadable';

export default lazyLoad(() => import('./index'));
