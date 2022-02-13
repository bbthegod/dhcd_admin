/*
 *
 * Dashboard
 *
 */
import { SnackbarProvider } from 'notistack';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';

import SnackbarContext from 'context/SnackbarContext';
import SideBar from 'app/components/SideBar/loadable';
import Topbar from 'app/components/Topbar/loadable';

import { selectDashboard } from './slice/selectors';
import classes from './styles.module.css';
import { actions } from './slice';

interface Props {
  children: any;
}

export default function Dashboard({ children }: Props) {
  //====================================== Hook ======================================
  const { status, message, variant } = useSelector(selectDashboard);
  const providerRef = useRef<any>();
  const dispatch = useDispatch();
  //====================================== Effect ======================================
  useEffect(() => {
    if (status) {
      open(message, variant);
      dispatch(actions.closeSnackbar());
    }
  }, [dispatch, message, variant, status]);
  //====================================== Callback ======================================
  const open = (message: string, variant: string) => {
    providerRef.current.enqueueSnackbar(message, { variant: variant });
  };
  //====================================== Render ======================================
  return (
    <div className={classes.root}>
      <SnackbarContext.Provider value={{ open }}>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          ref={providerRef}
        >
          <Topbar />
          <SideBar />
          <main className={classes.content}>{children}</main>
        </SnackbarProvider>
      </SnackbarContext.Provider>
    </div>
  );
}
