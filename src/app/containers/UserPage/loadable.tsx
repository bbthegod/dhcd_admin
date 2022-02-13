/*
 *
 * Asynchronously loads the component for UserPage
 *
 */
import { lazyLoad } from 'utils/loadable';

export default lazyLoad(() => import('./index'));
