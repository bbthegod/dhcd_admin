/*
 *
 * LoginPage
 *
 */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import { Card, CardContent, Typography, Button, TextField } from '@mui/material';

import AuthStorageContext from 'context/AuthStorageContext';
import SnackbarContext from 'context/SnackbarContext';
import { selectLoginPage } from './slice/selectors';
import classes from './styles.module.css';
import { actions } from './slice';

interface Props {}

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Trường này không được để trống !'),
  password: Yup.string().required('Trường này không được để trống !'),
});

export default function LoginPage(props: Props) {
  //====================================== Hook ======================================
  const { data, loading, snackbar, message, variant } = useSelector(selectLoginPage);
  const AuthStorage = useContext(AuthStorageContext);
  const Snackbar = useContext(SnackbarContext);
  const providerRef = useRef<any>();
  const dispatch = useDispatch();
  const history = useHistory();
  //====================================== Effect ======================================

  //Open snackbar when login failed
  useEffect(() => {
    if (snackbar) {
      open(message, variant);
      setTimeout(() => {
        dispatch(actions.closeSnackbar());
      }, 2000);
    }
  }, [Snackbar, dispatch, message, variant, snackbar]);

  //Redirect to play when success
  useEffect(() => {
    if (data) {
      AuthStorage.set(data, () => {
        history.push('/');
      });
    }
    return () => {
      dispatch(actions.reset());
    };
  }, [history, data, dispatch, AuthStorage]);
  //====================================== Callback ======================================
  const open = (message: string, variant: string) => {
    providerRef.current.enqueueSnackbar(message, { variant: variant });
  };
  //====================================== Render ======================================
  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      ref={providerRef}
    >
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h3" className={classes.text}>
              LOG IN
            </Typography>
            <Formik
              initialValues={{
                username: '',
                password: '',
              }}
              validationSchema={validationSchema}
              onSubmit={values => {
                dispatch(actions.login(values));
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className={classes.inputWrapper}>
                    <Field
                      as={TextField}
                      error={!!errors.username && !!touched.username}
                      name="username"
                      className={classes.input}
                      variant="outlined"
                      label="Mã Sinh Viên"
                      helperText={errors.username}
                      fullwidth
                    />
                  </div>
                  <div className={classes.inputWrapper}>
                    <Field
                      as={TextField}
                      error={!!errors.password && !!touched.password}
                      name="password"
                      type="password"
                      className={classes.input}
                      variant="outlined"
                      label="Mật Khẩu"
                      helperText={errors.password}
                      fullwidth
                    />
                  </div>
                  <Button
                    className={classes.button}
                    color="primary"
                    size="large"
                    type="submit"
                    variant="contained"
                    disabled={loading}
                  >
                    Sign in
                  </Button>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </SnackbarProvider>
  );
}
