/*
 *
 * Header
 *
 */
import { Grid, Typography, Button } from '@mui/material';

interface Props {
  title: string;
  subtitle: string;
  setOpen?: Function;
}

export default function Header({ setOpen, title, subtitle }: Props) {
  return (
    <Grid alignItems="flex-end" container spacing={3}>
      <Grid item>
        <Typography component="h2" gutterBottom variant="overline">
          {subtitle}
        </Typography>
        <Typography component="h1" variant="h3">
          {title}
        </Typography>
      </Grid>
      <Grid item flexGrow={1}>
        {setOpen && (
          <Button color="primary" variant="contained" onClick={() => setOpen(true)} style={{ float: 'right' }}>
            Tạo Mới
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
