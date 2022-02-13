/*
 *
 * DataTable
 *
 */
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Card,
  Button,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

import tableMaker from 'utils/tableMaker';
import classes from './styles.module.css';

interface Props {
  isLeaderboard: boolean;
  data: any;
  heading: string[];
  value: string[];
  count?: number | undefined;
  title?: string | undefined;
  page?: number | undefined;
  rowsPerPage?: number | undefined;
  handleChangePage?: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void | undefined;
  handleChangeRowsPerPage?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
}

export default function DataTable(props: Props) {
  const {
    isLeaderboard,
    count,
    page,
    rowsPerPage,
    title,
    data,
    heading,
    value,
    handleChangePage,
    handleChangeRowsPerPage,
  } = props;
  //====================================== Hook ======================================
  const history = useHistory();
  //====================================== State ======================================
  const [table, setTable] = useState<any>(undefined);
  const [row, setRow] = useState<Play | undefined>(undefined);
  //====================================== State ======================================
  useEffect(() => {
    let temp = tableMaker(heading, value, data);
    setTable(temp);
  }, [value, data, heading]);
  //====================================== State ======================================
  return (
    <div className={classes.root}>
      {!isLeaderboard && page !== undefined && count !== undefined && rowsPerPage !== undefined && (
        <Typography color="textSecondary" gutterBottom variant="body2" className={classes.page}>
          {`${count} Bản ghi được tìm thấy. Trang ${page + 1} trên ${Math.ceil(count / rowsPerPage)}`}
        </Typography>
      )}
      <Card>
        <CardContent className={classes.content}>
          <div className={classes.inner}>
            <Table>
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  {table &&
                    table.heading.map((item, index) => (
                      <TableCell align="center" key={index}>
                        {item}
                      </TableCell>
                    ))}
                  <TableCell align="right">Hành động</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {table &&
                  table.body.map(items => (
                    <TableRow hover key={items.id}>
                      {items.array.map((item, index) => (
                        <TableCell align="center" key={index}>
                          {item}
                        </TableCell>
                      ))}
                      <TableCell align="right" key={-1}>
                        <Button
                          color="primary"
                          size="small"
                          variant="outlined"
                          onClick={() => {
                            if (isLeaderboard) {
                              setRow(data.find(f => f._id === items.id));
                            } else {
                              history.push(`/${title}/${items.id}`);
                            }
                          }}
                        >
                          XEM
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        {!isLeaderboard &&
          page !== undefined &&
          count !== undefined &&
          rowsPerPage !== undefined &&
          handleChangePage &&
          handleChangeRowsPerPage && (
            <CardActions className={classes.actions}>
              <TablePagination
                labelRowsPerPage="Số bản ghi mỗi trang"
                component="div"
                count={count}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[10, 20, 50]}
              />
            </CardActions>
          )}
      </Card>
      {isLeaderboard && row && (
        <Dialog
          fullWidth
          maxWidth="md"
          open={!!row}
          onClose={() => setRow(undefined)}
          aria-labelledby="customized-dialog-title"
        >
          <DialogTitle id="customized-dialog-title">
            Bình luận {row.isInterviewed ? `( ${row.interviewer} )` : ''}
          </DialogTitle>
          <DialogContent dividers>
            <DialogContentText className={classes.interviewContent}>
              {row.isInterviewed ? row.comment : 'Chưa được phỏng vấn'}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setRow(undefined)} color="primary" autoFocus>
              Đóng
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}
