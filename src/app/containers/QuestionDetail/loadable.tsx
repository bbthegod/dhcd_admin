/*
 *
 * Asynchronously loads the component for QuestionDetail
 *
 */
import { lazyLoad } from 'utils/loadable';

export default lazyLoad(() => import('./index'));
