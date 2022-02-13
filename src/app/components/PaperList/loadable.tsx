/*
 *
 * Asynchronously loads the component for PaperList
 *
 */
import { lazyLoad } from 'utils/loadable';

export default lazyLoad(() => import('./index'));
