/*
 *
 * UserPage
 *
 */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import UserDialog from 'app/components/UserDialog';
import SearchBar from 'app/components/SearchBar';
import DataTable from 'app/components/DataTable';
import Loading from 'app/components/Loading';
import Header from 'app/components/Header';

import { selectUserPage } from './slice/selectors';
import { actions } from './slice';

interface Props {}

const heading = ['Tên Người Dùng', 'Tên đầy đủ', 'Chức Vụ'];
const value = ['username', 'fullname', 'role'];

export default function UserPage(props: Props) {
  const { users, count, loading } = useSelector(selectUserPage);
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
        filter: { username: { $regex: search, $options: 'i' } },
      }),
    );
  }, [dispatch, page, rowsPerPage, search]);
  //====================================== Callback ======================================
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleCreate = (data: User) => {
    dispatch(actions.create(data));
    setOpen(false);
  };
  //====================================== Render ======================================
  return (
    <>
      <Header setOpen={setOpen} title="Người Dùng" subtitle="Quản lý" />
      <SearchBar search={search} setSearch={setSearch} />
      {!loading ? (
        <DataTable
          isLeaderboard={false}
          title="user"
          heading={heading}
          value={value}
          data={users}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          page={page}
          count={count}
          rowsPerPage={rowsPerPage}
        />
      ) : (
        <Loading />
      )}
      <UserDialog setOpen={setOpen} open={open} handleSubmit={handleCreate} />
    </>
  );
}
