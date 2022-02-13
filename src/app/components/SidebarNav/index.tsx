/*
 *
 * SidebarNav
 *
 */
import { List, ListItem, Button } from '@mui/material';
import { useHistory, useLocation } from 'react-router-dom';

import classes from './styles.module.css';

interface Props {
  pages: any;
}

export default function SidebarNav({ pages }: Props) {
  const history = useHistory();
  const location = useLocation();
  return (
    <List className={classes.root}>
      {pages.map(page => (
        <ListItem className={classes.item} disableGutters key={page.title}>
          <Button
            className={location.pathname.includes(page.href.replace('/', '')) ? classes.buttonActive : classes.button}
            startIcon={page.icon}
            onClick={() => history.push(page.href)}
          >
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );
}
