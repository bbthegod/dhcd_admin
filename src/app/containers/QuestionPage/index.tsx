/*
 *
 * QuestionPage
 *
 */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import QuestionDialog from 'app/components/QuestionDialog';
import SearchBar from 'app/components/SearchBar';
import DataTable from 'app/components/DataTable';
import Loading from 'app/components/Loading';
import Header from 'app/components/Header';

import { selectQuestionPage } from './slice/selectors';
import { actions } from './slice';

interface Props {}

const heading = ['Nội dung', 'Câu trả lời 1', 'Câu trả lời 2', 'Câu trả lời 3', 'Câu trả lời 4'];
const value = ['content', 'options[0].answer', 'options[1].answer', 'options[2].answer', 'options[3].answer'];

interface Props {}

export default function QuestionPage(props: Props) {
  //====================================== Hook ======================================
  const { questions, count, loading } = useSelector(selectQuestionPage);
  const dispatch = useDispatch();
  //====================================== State ======================================
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  //====================================== Effect ======================================
  useEffect(() => {
    dispatch(
      actions.get({
        limit: rowsPerPage,
        skip: page * rowsPerPage,
        filter: { content: { $regex: search, $options: 'i' } },
      }),
    );
  }, [dispatch, rowsPerPage, page, search]);
  //====================================== Callback ======================================
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleCreate = (data: Question) => {
    dispatch(actions.create(data));
    setOpen(false);
  };

  //====================================== Render ======================================
  return (
    <>
      <Header setOpen={setOpen} title="Câu Hỏi" subtitle="Quản lý" />
      <SearchBar search={search} setSearch={setSearch} />
      {!loading ? (
        <DataTable
          isLeaderboard={false}
          title="question"
          heading={heading}
          value={value}
          data={questions}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          page={page}
          count={count}
          rowsPerPage={rowsPerPage}
        />
      ) : (
        <Loading />
      )}
      <QuestionDialog setOpen={setOpen} open={open} handleSubmit={handleCreate} />
    </>
  );
}
