/*
 *
 * QuestionDialog
 *
 */
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import { Modal, Card, CardContent, CardActions, Grid, Typography, Button, TextField, MenuItem } from '@mui/material';
import classes from './styles.module.css';

interface Props {
  data?: any;
  open: boolean;
  setOpen: Function;
  handleSubmit: Function;
}

const validationSchema = Yup.object().shape({
  content: Yup.string().required('Trường này không được để trống !'),
  answer1: Yup.string().required('Trường này không được để trống !'),
  answer2: Yup.string().required('Trường này không được để trống !'),
  answer3: Yup.string().required('Trường này không được để trống !'),
  answer4: Yup.string().required('Trường này không được để trống !'),
  correctAnswer: Yup.string().required('Trường này không được để trống !'),
});

export default function QuestionDialog({ open, setOpen, data, handleSubmit }: Props) {
  //====================================== Callback ======================================
  const onSubmit = (values, actions) => {
    if (data) {
      handleSubmit({
        ...data,
        ...{ content: values.content },
        ...{ correctAnswer: +values.correctAnswer },
        ...{
          options: [
            { numbering: 1, answer: values.answer1 },
            { numbering: 2, answer: values.answer2 },
            { numbering: 3, answer: values.answer3 },
            { numbering: 4, answer: values.answer4 },
          ],
        },
      });
    } else {
      handleSubmit({
        ...{ content: values.content },
        ...{ correctAnswer: +values.correctAnswer },
        ...{
          options: [
            { numbering: 1, answer: values.answer1 },
            { numbering: 2, answer: values.answer2 },
            { numbering: 3, answer: values.answer3 },
            { numbering: 4, answer: values.answer4 },
          ],
        },
      });
    }
    setOpen(false);
  };
  //====================================== Render ======================================
  return (
    <Modal onClose={() => setOpen(false)} open={open}>
      <Formik
        initialValues={{
          content: data ? data.content : '',
          answer1: data ? data.options[0].answer : '',
          answer2: data ? data.options[1].answer : '',
          answer3: data ? data.options[2].answer : '',
          answer4: data ? data.options[3].answer : '',
          correctAnswer: data ? data.correctAnswer : '',
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, values }) => (
          <Form>
            <Card className={classes.root}>
              <CardContent className={classes.content}>
                <Typography align="center" gutterBottom variant="h4">
                  {data ? 'Chỉnh sửa câu hỏi' : 'Thêm câu hỏi'}
                </Typography>
                <Grid className={classes.container} container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <Field
                      as={TextField}
                      error={!!errors.content && !!touched.content}
                      helperText={errors.content}
                      name="content"
                      label="Nội Dung"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Field
                      as={TextField}
                      error={!!errors.correctAnswer && !!touched.correctAnswer}
                      helperText={errors.correctAnswer}
                      name="correctAnswer"
                      label="Câu trả lời đúng"
                      variant="outlined"
                      fullWidth
                      select
                    >
                      <MenuItem value={1}>{values.answer1}</MenuItem>
                      <MenuItem value={2}>{values.answer2}</MenuItem>
                      <MenuItem value={3}>{values.answer3}</MenuItem>
                      <MenuItem value={4}>{values.answer4}</MenuItem>
                    </Field>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Field
                      as={TextField}
                      error={!!errors.answer1 && !!touched.answer1}
                      helperText={errors.answer1}
                      name="answer1"
                      label="Câu Trả Lời 1"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Field
                      as={TextField}
                      error={!!errors.answer2 && !!touched.answer2}
                      helperText={errors.answer2}
                      name="answer2"
                      label="Câu Trả Lời 2"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Field
                      as={TextField}
                      error={!!errors.answer3 && !!touched.answer3}
                      helperText={errors.answer3}
                      name="answer3"
                      label="Câu Trả Lời 3"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Field
                      as={TextField}
                      error={!!errors.answer4 && !!touched.answer4}
                      helperText={errors.answer4}
                      name="answer4"
                      label="Câu Trả Lời 4"
                      variant="outlined"
                      fullWidth
                    />
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
