/*
 *
 * FilePage
 *
 */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import FileDialog from 'app/components/FileDialog';
import SearchBar from 'app/components/SearchBar';
import DataTable from 'app/components/DataTable';
import Loading from 'app/components/Loading';
import Header from 'app/components/Header';

import { selectFilePage } from './slice/selectors';
import { actions } from './slice';

interface Props {}

const heading = ['Tên tài liệu', 'URL'];
const value = ['filename', 'url'];

interface Props {}

export default function FilePage(props: Props) {
  //====================================== Hook ======================================
  const { files, count, loading } = useSelector(selectFilePage);
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
        filter: { filename: { $regex: search, $options: 'i' } },
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

  const handleCreate = (data: File) => {
    dispatch(actions.create(data));
    setOpen(false);
  };

  //====================================== Render ======================================
  return (
    <>
      <Header setOpen={setOpen} title="Tài liệu" subtitle="Quản lý" />
      <SearchBar search={search} setSearch={setSearch} />
      {!loading ? (
        <DataTable
          isLeaderboard={false}
          title="file"
          heading={heading}
          value={value}
          data={files}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          page={page}
          count={count}
          rowsPerPage={rowsPerPage}
        />
      ) : (
        <Loading />
      )}
      <FileDialog setOpen={setOpen} open={open} handleSubmit={handleCreate} />
    </>
  );
}
