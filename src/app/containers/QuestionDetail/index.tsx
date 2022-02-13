/*
 *
 * QuestionDetail
 *
 */
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Tabs, Tab, Divider, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import QuestionDialog from 'app/components/QuestionDialog';
import ConfirmDialog from 'app/components/ConfirmDialog';
import ContentDetail from 'app/components/ContentDetail';
import Loading from 'app/components/Loading';
import Header from 'app/components/Header';

import { selectQuestionDetail } from './slice/selectors';
import classes from './styles.module.css';
import { actions } from './slice';

interface Props {}

const heading = ['Nội dung', 'Câu trả lời 1', 'Câu trả lời 2', 'Câu trả lời 3', 'Câu trả lời 4', 'Câu trả lời đúng'];
const value = [
  'content',
  'options[0].answer',
  'options[1].answer',
  'options[2].answer',
  'options[3].answer',
  'correctAnswer',
];

export default function QuestionDetail(props: Props) {
  //====================================== Hook ======================================
  const { question, redirect, loading } = useSelector(selectQuestionDetail);
  const params = useParams<any>();
  const dispatch = useDispatch();
  const history = useHistory();
  //====================================== State ======================================
  const [remove, setRemove] = useState(false);
  const [edit, setEdit] = useState(false);
  const [tab, setTab] = useState(0);
  //====================================== Effect ======================================

  useEffect(() => {
    dispatch(actions.get(params.id));
    return () => {
      dispatch(actions.cleanup());
    };
  }, [dispatch, params.id]);

  useEffect(() => {
    if (redirect) history.push('/question');
  }, [redirect, history]);

  //====================================== Callback ======================================

  const handleRemove = () => dispatch(actions.remove(question?._id));

  const changeTab = (event, newValue) => setTab(newValue);

  //====================================== Render ======================================
  return !loading ? (
    <div>
      <Header subtitle="Câu Hỏi" title={question ? question.content : ''} />
      <Tabs className={classes.tabs} onChange={changeTab} scrollButtons="auto" value={tab} variant="scrollable">
        <Tab label="Câu Hỏi" value={0} />
      </Tabs>
      <Divider className={classes.divider} />
      <div className={classes.content}>
        {tab === 0 && question && (
          <ContentDetail title="Thông tin sinh viên" heading={heading} value={value} data={question}>
            <Button onClick={() => setEdit(true)} startIcon={<EditIcon />} className={classes.editButton}>
              Sửa
            </Button>
            <Button onClick={() => setRemove(true)} startIcon={<DeleteIcon />} className={classes.removeButton}>
              Xoá
            </Button>
          </ContentDetail>
        )}
      </div>
      <ConfirmDialog open={remove} setOpen={setRemove} message="Xoá câu hỏi này ?" handleAction={handleRemove} />
      {question && (
        <QuestionDialog data={question} setOpen={setEdit} open={edit} handleSubmit={d => dispatch(actions.edit(d))} />
      )}
    </div>
  ) : (
    <Loading />
  );
}
