/*
 *
 * SearchBar
 *
 */
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Paper, Input } from '@mui/material';

import classes from './styles.module.css';

interface Props {
  search: string;
  setSearch: Function;
}

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid item>
        <div className={classes.searchWrapper}>
          <Paper className={classes.search} elevation={1}>
            <SearchIcon className={classes.searchIcon} />
            <Input
              className={classes.searchInput}
              disableUnderline
              placeholder="Search"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
}
