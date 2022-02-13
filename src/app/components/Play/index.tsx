/*
 *
 * Play
 *
 */
import moment from 'moment/moment';

import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import classes from './styles.module.css';

interface Props {
  play: any;
}

export default function Play({ play }: Props) {
  return play ? (
    <>
      <Card className={classes.info}>
        <Grid alignItems="center" container>
          <Grid className={classes.item} item md={3} sm={6} xs={12}>
            <Typography component="h4" gutterBottom variant="overline">
              Tên người dùng
            </Typography>
            <div className={classes.valueContainer}>
              <Typography variant="h6">{play.userID.username}</Typography>
            </div>
          </Grid>
          <Grid className={classes.item} item md={3} sm={6} xs={12}>
            <Typography component="h4" gutterBottom variant="overline">
              Tên đầy đủ
            </Typography>
            <div className={classes.valueContainer}>
              <Typography variant="h6">{play.userID.fullname}</Typography>
            </div>
          </Grid>
          <Grid className={classes.item} item md={3} sm={6} xs={12}>
            <Typography component="h4" gutterBottom variant="overline">
              Tổng điểm
            </Typography>
            <div className={classes.valueContainer}>
              <Typography variant="h6">{play.totalScore}</Typography>
            </div>
          </Grid>
          <Grid className={classes.item} item md={3} sm={6} xs={12}>
            <Typography component="h4" gutterBottom variant="overline">
              Đã kết thúc
            </Typography>
            <div className={classes.valueContainer}>
              <Typography variant="h6">{play.isEnded ? <CheckIcon /> : <CloseIcon />}</Typography>
            </div>
          </Grid>
        </Grid>
      </Card>
      <Card>
        <CardHeader title="Câu hỏi" />
        <Divider />
        <CardContent className={classes.content}>
          <div className={classes.inner}>
            <Table>
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell align="left">Câu Trả Lời</TableCell>
                  <TableCell align="left">Số Thứ Tự</TableCell>
                  <TableCell align="center">Đã Trả Lời</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {play.questions.map((question, index) => (
                  <TableRow hover selected={index % 2 === 0}>
                    <TableCell align="left">{question.questionId.content}</TableCell>
                    <TableCell align="left">
                      {question.answered ? question.questionId.options[question.answer - 1].answer : 'Chưa trả lời'}
                    </TableCell>
                    <TableCell align="center">{question.answered ? <CheckIcon /> : <CloseIcon />}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </>
  ) : (
    <Typography component="h1" gutterBottom>
      Chưa dự thi
    </Typography>
  );
}
