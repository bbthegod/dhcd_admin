/*
 *
 * Asynchronously loads the component for FileDetail
 *
 */
import { lazyLoad } from 'utils/loadable';

export default lazyLoad(() => import('./index'));
