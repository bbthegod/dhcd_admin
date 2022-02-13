/*
 *
 * Asynchronously loads the component for ControlPage
 *
 */
import { lazyLoad } from 'utils/loadable';

export default lazyLoad(() => import('./index'));
