/*
 *
 * ContentDetail
 *
 */
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Grid,
} from '@mui/material';
import detailMaker from 'utils/detailMaker';
import classes from './styles.module.css';

interface Props {
  children: any;
  title: string;
  heading: string[];
  value: string[];
  data: any;
}

export default function ContentDetail({ children, title, heading, value, data }: Props) {
  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item md={8}>
        <Card>
          <CardHeader title={title} />
          <Divider />
          <CardContent className={classes.content}>
            <Table>
              <TableBody>
                {detailMaker(heading, value, data).map((v, i) => (
                  <TableRow selected={i % 2 !== 0} key={i}>
                    <TableCell>{v[0]}</TableCell>
                    <TableCell>{v[1]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardActions className={classes.actions}>{children}</CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
