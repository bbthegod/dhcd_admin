/*
 *
 * UserDetail
 *
 */
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import LockOpenIcon from '@mui/icons-material/LockOpenOutlined';
import { Tabs, Tab, Divider, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import ConfirmDialog from 'app/components/ConfirmDialog';
import ContentDetail from 'app/components/ContentDetail';
import UserDialog from 'app/components/UserDialog';
import Loading from 'app/components/Loading';
import Header from 'app/components/Header';
import Play from 'app/components/Play';

import { selectUserDetail } from './slice/selectors';
import classes from './styles.module.css';
import { actions } from './slice';

interface Props {}

const heading = ['Tên người dùng', 'Tên đầy đủ', 'Chức vụ', 'Điểm danh', 'Mật khẩu'];
const value = ['username', 'fullname', 'role', 'isCheckin', 'password'];

export default function UserDetail(props: Props) {
  //====================================== Hook ======================================
  const { user, play, redirect, loading } = useSelector(selectUserDetail);
  const params = useParams<any>();
  const dispatch = useDispatch();
  const history = useHistory();
  //====================================== State ======================================
  const [remove, setRemove] = useState(false);
  const [reset, setReset] = useState(false);
  const [edit, setEdit] = useState(false);
  const [tab, setTab] = useState(0);
  //====================================== Effect ======================================

  useEffect(() => {
    dispatch(actions.get(params.id));
    dispatch(actions.getPlay(params.id));
    return () => {
      dispatch(actions.cleanup());
    };
  }, [dispatch, params.id]);

  useEffect(() => {
    if (redirect) history.push('/user');
  }, [redirect, history]);

  //====================================== Callback ======================================

  const handleRemove = () => dispatch(actions.remove(user?._id));

  const handleReset = () => dispatch(actions.reset(user?._id));

  const changeTab = (event, newValue) => setTab(newValue);

  //====================================== Render ======================================
  return !loading ? (
    <div>
      <Header subtitle="Người Dùng" title={user ? user.fullname : ''} />
      <Tabs className={classes.tabs} onChange={changeTab} scrollButtons="auto" value={tab} variant="scrollable">
        <Tab label="Người dùng" value={0} />
        <Tab label="Vòng chơi" value={1} />
      </Tabs>
      <Divider className={classes.divider} />
      <div className={classes.content}>
        {tab === 0 && user && (
          <ContentDetail title="Thông tin người dùng" heading={heading} value={value} data={user}>
            <Button onClick={() => setEdit(true)} startIcon={<EditIcon />} className={classes.editButton}>
              Sửa
            </Button>
            <Button onClick={() => setRemove(true)} startIcon={<DeleteIcon />} className={classes.removeButton}>
              Xoá
            </Button>
            <Button onClick={() => setReset(true)} startIcon={<LockOpenIcon />} className={classes.resetButton}>
              Đặt lại vòng chơi
            </Button>
          </ContentDetail>
        )}
        {tab === 1 && <Play play={play} />}
      </div>
      <ConfirmDialog open={remove} setOpen={setRemove} message="Xoá người dùng này ?" handleAction={handleRemove} />
      <ConfirmDialog open={reset} setOpen={setReset} message="Đặt lại vòng chơi ?" handleAction={handleReset} />
      {user && <UserDialog data={user} setOpen={setEdit} open={edit} handleSubmit={d => dispatch(actions.edit(d))} />}
    </div>
  ) : (
    <Loading />
  );
}
