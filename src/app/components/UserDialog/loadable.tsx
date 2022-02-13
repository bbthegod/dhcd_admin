/*
 *
 * Asynchronously loads the component for UserDialog
 *
 */
import { lazyLoad } from 'utils/loadable';

export default lazyLoad(() => import('./index'));
