/*
 *
 * FileDialog
 *
 */
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import { Modal, Card, CardContent, CardActions, Grid, Typography, Button, TextField } from '@mui/material';
import { BASE_URL } from 'constants/config';

import classes from './styles.module.css';

interface Props {
  data?: FileUpload;
  open: boolean;
  setOpen: Function;
  handleSubmit: Function;
}

const validationSchema = Yup.object().shape({
  filename: Yup.string().required('Trường này không được để trống !'),
});

export default function FileDialog({ open, setOpen, data, handleSubmit }: Props) {
  //====================================== Callback ======================================
  const onSubmit = async values => {
    if (data) {
      handleSubmit({
        ...data,
        ...{
          filename: values.filename,
          file: values.file,
        },
      });
    } else {
      handleSubmit({
        filename: values.filename,
        file: values.file,
      });
    }
  };
  //====================================== Render ======================================
  return (
    <Modal onClose={() => setOpen(false)} open={open}>
      <Formik
        initialValues={{
          filename: data ? data.filename : '',
          name: data ? data.filename : '',
          file: null,
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form autoComplete="off">
            <Card className={classes.root}>
              <CardContent className={classes.content}>
                <Typography align="center" gutterBottom variant="h4">
                  {data ? 'Chỉnh sửa tài liệu' : 'Thêm tài liệu'}
                </Typography>
                <Grid className={classes.container} container spacing={3}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      error={!!errors.filename && !!touched.filename}
                      helperText={errors.filename}
                      name="filename"
                      label="Tên File"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {data && (
                      <Typography gutterBottom variant="h4">
                        File đã tải lên:{' '}
                        <a
                          href={`${BASE_URL}${data.url}`}
                          target="_blank"
                          rel="noreferrer"
                        >{`${BASE_URL}${data.url}`}</a>
                      </Typography>
                    )}
                    {values.name && values.file && (
                      <Typography gutterBottom variant="h4">
                        File vừa tải lên: {values.name}
                      </Typography>
                    )}
                    <label htmlFor="icon-button-file">
                      <input
                        accept=".pdf"
                        id="icon-button-file"
                        type="file"
                        style={{ display: 'none' }}
                        onChange={(event: any) => {
                          setFieldValue('file', event.currentTarget.files[0]);
                          setFieldValue('name', event.currentTarget.files[0].name);
                        }}
                      />
                      <Button variant="contained" component="span">
                        Upload
                      </Button>
                    </label>
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
