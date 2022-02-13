/*
 *
 * Topbar
 *
 */
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import InputIcon from '@mui/icons-material/Input';

import classes from './styles.module.css';

interface Props {}

export default function Topbar(props: Props) {
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <div className={classes.flexGrow} />
        <RouterLink to="/">
          <IconButton className={classes.signOutButton} color="primary" onClick={() => localStorage.clear()}>
            <InputIcon />
          </IconButton>
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
}
