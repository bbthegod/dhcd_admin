/*
 *
 * NotFoundPage
 *
 */
import classes from './styles.module.css';

export default function NotFoundPage() {
  return (
    <div className={classes.root}>
      <div>
        <h1>
          4<span />4
        </h1>
      </div>
      <h2>Oops! Page Not Be Found</h2>
      <p>Sorry but the page you are looking for does not exist</p>
    </div>
  );
}
