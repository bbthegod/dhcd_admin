/*
 *
 * UserDetail
 *
 */
import { useState } from 'react';

import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Grid,
  Divider,
  TextareaAutosize,
  Button,
  TextField,
  InputAdornment,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ClassIcon from '@mui/icons-material/Class';
import PhoneIcon from '@mui/icons-material/Phone';
import CodeIcon from '@mui/icons-material/Code';

import classes from './styles.module.css';

interface Props {
  usersDetail: Play;
  handleSubmit: Function;
}

export default function UserDetail({ usersDetail, handleSubmit }: Props) {
  //====================================== State ======================================
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState('');
  //====================================== Callback ======================================
  const onSubmit = () => {
    handleSubmit(score, comment);
    setScore(0);
    setComment('');
  };
  //====================================== Render ======================================
  return (
    <List className={classes.content}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CodeIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={usersDetail?.userID?.username} secondary="Tên người dùng" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={usersDetail?.userID?.fullname} secondary="Tên đầy đủ" />
      </ListItem>
      <div className={classes.scoreBox}>
        <Grid container md={12}>
          <Grid item md={12} style={{ marginTop: '20px' }}>
            <TextField
              className={classes.colored}
              label="Tổng Điểm ( Tối đa 400đ )"
              variant="outlined"
              type="number"
              fullWidth
              value={score}
              onChange={e => (+e.target.value <= 400 ? setScore(+e.target.value) : null)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" style={{ color: '#FFFFFF' }}>
                    {usersDetail?.totalScore} +{' '}
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={12} className={classes.textarea}>
            <TextareaAutosize value={comment} onChange={e => setComment(e.target.value)} />
          </Grid>
          <Grid item md={12}>
            <Button variant="contained" color="primary" onClick={onSubmit}>
              Gửi đi
            </Button>
          </Grid>
        </Grid>
      </div>
    </List>
  );
}
