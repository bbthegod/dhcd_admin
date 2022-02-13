/*
 *
 * Asynchronously loads the component for SidebarNav
 *
 */
import { lazyLoad } from 'utils/loadable';

export default lazyLoad(() => import('./index'));
