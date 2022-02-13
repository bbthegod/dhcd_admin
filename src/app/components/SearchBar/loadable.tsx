/*
 *
 * Asynchronously loads the component for SearchBar
 *
 */
import { lazyLoad } from 'utils/loadable';

export default lazyLoad(() => import('./index'));
