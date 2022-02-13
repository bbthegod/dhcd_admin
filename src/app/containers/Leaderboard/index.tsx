/*
 *
 * Leaderboard
 *
 */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import DataTable from 'app/components/DataTable';
import Loading from 'app/components/Loading';
import Header from 'app/components/Header';

import { selectLeaderboard } from './slice/selectors';
import classes from './styles.module.css';
import { actions } from './slice';

interface Props {}

const heading = ['Mã Sinh Viên', 'Tên Sinh Viên', 'Điểm Số'];
const value = ['userID.username', 'userID.fullname', 'totalScore'];

export default function Leaderboard(props: Props) {
  //====================================== Hook ======================================
  const { users, loading } = useSelector(selectLeaderboard);
  const dispatch = useDispatch();
  //====================================== Effect ======================================
  useEffect(() => {
    dispatch(actions.get());
  }, [dispatch]);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(actions.get());
    }, 20000);
    return () => clearInterval(interval);
  }, [dispatch]);
  //====================================== Render ======================================
  return !loading ? (
    <>
      <Header title="Bảng Xếp Hạng" subtitle="Quản lý" />
      <div className={classes.table}>
        <DataTable isLeaderboard heading={heading} value={value} data={users} />
      </div>
    </>
  ) : (
    <Loading />
  );
}
