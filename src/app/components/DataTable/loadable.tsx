/*
 *
 * Asynchronously loads the component for DataTable
 *
 */
import { lazyLoad } from 'utils/loadable';

export default lazyLoad(() => import('./index'));
