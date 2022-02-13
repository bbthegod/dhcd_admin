/*
 *
 * Asynchronously loads the component for QuestionPage
 *
 */
import { lazyLoad } from 'utils/loadable';

export default lazyLoad(() => import('./index'));
