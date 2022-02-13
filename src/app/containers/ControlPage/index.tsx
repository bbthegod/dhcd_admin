/*
 *
 * ControlPage
 *
 */
import { useDispatch } from 'react-redux';
import { actions } from './slice';
import { Container, Button } from '@mui/material';
import classes from './styles.module.css';

interface Props {}

export default function ControlPage(props: Props) {
  const dispatch = useDispatch();
  return (
    <Container className={classes.root}>
      <Button variant="contained" onClick={() => dispatch(actions.startQuiz())}>
        Phát Bài Thi
      </Button>
      <Button variant="contained" onClick={() => dispatch(actions.clearQuiz())}>
        Reset Tất Cả Bài Thi
      </Button>
      <Button variant="contained" onClick={() => dispatch(actions.resetCheckin())}>
        Reset Điểm Danh
      </Button>
    </Container>
  );
}
