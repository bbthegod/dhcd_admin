/*
 *
 * UserDialog
 *
 */
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import { Modal, Card, CardContent, CardActions, Grid, Typography, Button, TextField, MenuItem } from '@mui/material';

import classes from './styles.module.css';
import { request } from 'utils/request';
import stringNormalize from 'utils/stringNormalize';
import { USER } from 'constants/config';

interface Props {
  data?: User;
  open: boolean;
  setOpen: Function;
  handleSubmit: Function;
}

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Trường này không được để trống !'),
  fullname: Yup.string().required('Trường này không được để trống !'),
  role: Yup.string().required('Trường này không được để trống !'),
  password: Yup.string().required('Trường này không được để trống !'),
});

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export default function UserDialog({ open, setOpen, data, handleSubmit }: Props) {
  //====================================== Callback ======================================
  const onSubmit = async (values, actions) => {
    values.fullname = stringNormalize(values.fullname);
    const { response } = await request({
      url: `${USER}?limit=5&skip=0&filter%5Busername%5D%5B%24regex%5D=${values.username}&filter%5Busername%5D%5B%24options%5D=i`,
      method: 'GET',
    });
    if (response && response.count > 0 && !data) {
      actions.setSubmitting(false);
      actions.setFieldError('username', 'Tên người dùng đã được sử dụng');
    } else {
      if (data) {
        handleSubmit({
          ...data,
          ...values,
        });
      } else {
        handleSubmit(values);
      }
      setOpen(false);
    }
  };
  //====================================== Render ======================================
  return (
    <Modal onClose={() => setOpen(false)} open={open}>
      <Formik
        initialValues={{
          username: data ? data.username : '',
          fullname: data ? data.fullname : '',
          role: data ? data.role : '',
          password: data ? data.password : `${getRndInteger(100000, 999999)}`,
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off">
            <Card className={classes.root}>
              <CardContent className={classes.content}>
                <Typography align="center" gutterBottom variant="h4">
                  {data ? 'Chỉnh sửa người dùng' : 'Thêm người dùng'}
                </Typography>
                <Grid className={classes.container} container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <Field
                      as={TextField}
                      error={!!errors.username && !!touched.username}
                      helperText={errors.username}
                      name="username"
                      label="Tên người dùng"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Field
                      as={TextField}
                      error={!!errors.fullname && !!touched.fullname}
                      helperText={errors.fullname}
                      name="fullname"
                      label="Tên đầy đủ"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Field
                      as={TextField}
                      error={!!errors.role && !!touched.role}
                      helperText={errors.role}
                      name="role"
                      select
                      label="Chức Vụ"
                      variant="outlined"
                      fullWidth
                    >
                      <MenuItem key="user" value="user">
                        Đoàn viên
                      </MenuItem>
                      <MenuItem key="delegate" value="delegate">
                        Đại biểu
                      </MenuItem>
                    </Field>
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <Field as={TextField} name="password" label="Mật khẩu" variant="outlined" fullWidth disabled />
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions className={classes.actions}>
                <Button
                  onClick={() => setOpen(false)}
                  variant="contained"
                  color="primary"
                  className={classes.closeButton}
                >
                  Đóng
                </Button>
                <Button className={classes.saveButton} variant="contained" type="submit" color="primary">
                  Lưu
                </Button>
              </CardActions>
            </Card>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
