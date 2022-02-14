/*
 *
 * FileDetail
 *
 */
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Divider, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import ConfirmDialog from 'app/components/ConfirmDialog';
import ContentDetail from 'app/components/ContentDetail';
import FileDialog from 'app/components/FileDialog';
import Loading from 'app/components/Loading';
import Header from 'app/components/Header';

import { selectFileDetail } from './slice/selectors';
import classes from './styles.module.css';
import { actions } from './slice';

interface Props {}

const heading = ['Tên tài liệu', 'URL', 'Cho phép đoàn viên xem'];
const value = ['filename', 'url', 'allowDelegate'];

export default function FileDetail(props: Props) {
  //====================================== Hook ======================================
  const { file, redirect, loading } = useSelector(selectFileDetail);
  const params = useParams<any>();
  const dispatch = useDispatch();
  const history = useHistory();
  //====================================== State ======================================
  const [remove, setRemove] = useState(false);
  const [reset, setReset] = useState(false);
  const [edit, setEdit] = useState(false);
  //====================================== Effect ======================================

  useEffect(() => {
    dispatch(actions.get(params.id));
    return () => {
      dispatch(actions.cleanup());
    };
  }, [dispatch, params.id]);

  useEffect(() => {
    if (redirect) history.push('/file');
  }, [redirect, history]);

  //====================================== Callback ======================================

  const handleRemove = () => dispatch(actions.remove(file?._id));

  const handleReset = () => dispatch(actions.reset(file?._id));

  const handleSubmit = data => dispatch(actions.edit(data));

  //====================================== Render ======================================
  return !loading ? (
    <div>
      <Header subtitle="Tài Liệu" title={file ? file.filename : ''} />
      <Divider className={classes.divider} />
      <div className={classes.content}>
        <ContentDetail title="Thông tin tài liệu" heading={heading} value={value} data={file}>
          <Button onClick={() => setEdit(true)} startIcon={<EditIcon />} className={classes.editButton}>
            Sửa
          </Button>
          <Button onClick={() => setRemove(true)} startIcon={<DeleteIcon />} className={classes.removeButton}>
            Xoá
          </Button>
        </ContentDetail>
      </div>
      <ConfirmDialog open={remove} setOpen={setRemove} message="Xoá người dùng này ?" handleAction={handleRemove} />
      <ConfirmDialog open={reset} setOpen={setReset} message="Đặt lại vòng chơi ?" handleAction={handleReset} />
      {file && <FileDialog data={file} setOpen={setEdit} open={edit} handleSubmit={handleSubmit} />}
    </div>
  ) : (
    <Loading />
  );
}
