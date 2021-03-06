/*
 *
 * SurveyPage
 *
 */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './slice';
import { selectSurveyPage } from './slice/selectors';
import Header from 'app/components/Header';
import classes from './styles.module.css';

import { Paper, Grid } from '@mui/material';
import { Chart, PieSeries, Title, Legend, Tooltip } from '@devexpress/dx-react-chart-material-ui';
import { EventTracker } from '@devexpress/dx-react-chart';

interface Props {}

export default function SurveyPage(props: Props) {
  const [chart1, setChart1] = useState<any>();
  const [chart2, setChart2] = useState<any>();
  const [chart3, setChart3] = useState<any>();
  const [chart4, setChart4] = useState<any>();
  const dispatch = useDispatch();
  const { users } = useSelector(selectSurveyPage);
  useEffect(() => {
    dispatch(actions.get());
  }, [dispatch]);
  useEffect(() => {
    if (users) {
      let c1 = [
        { label: 'A', count: 0 },
        { label: 'B', count: 0 },
      ];
      let c2 = [
        { label: 'A', count: 0 },
        { label: 'B', count: 0 },
        { label: 'C', count: 0 },
        { label: 'D', count: 0 },
      ];
      let c3 = [
        { label: 'A', count: 0 },
        { label: 'B', count: 0 },
        { label: 'C', count: 0 },
        { label: 'D', count: 0 },
      ];
      let c4 = [
        { label: 'A', count: 0 },
        { label: 'B', count: 0 },
        { label: 'C', count: 0 },
        { label: 'D', count: 0 },
      ];
      users.forEach(user => {
        if (user.survey.length > 0) {
          if (user.survey[0][0]) {
            c1[0].count++;
          }
          if (user.survey[0][1]) {
            c1[1].count++;
          }

          if (user.survey[1][0]) {
            c2[0].count++;
          }
          if (user.survey[1][1]) {
            c2[1].count++;
          }
          if (user.survey[1][2]) {
            c2[2].count++;
          }
          if (user.survey[1][3]) {
            c2[3].count++;
          }

          if (user.survey[2][0]) {
            c3[0].count++;
          }
          if (user.survey[2][1]) {
            c3[1].count++;
          }
          if (user.survey[2][2]) {
            c3[2].count++;
          }
          if (user.survey[2][3]) {
            c3[3].count++;
          }

          if (user.survey[3][0]) {
            c4[0].count++;
          }
          if (user.survey[3][1]) {
            c4[1].count++;
          }
          if (user.survey[3][2]) {
            c4[2].count++;
          }
          if (user.survey[3][3]) {
            c4[3].count++;
          }
        }
      });
      setChart1(c1);
      setChart2(c2);
      setChart3(c3);
      setChart4(c4);
    }
  }, [users]);
  return (
    <>
      <Header title="Th???ng K?? Kh???o S??t" subtitle="" />
      <div className={classes.table}>
        <Paper>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              {chart1 && (
                <Chart data={chart1}>
                  <Legend />
                  <PieSeries valueField="count" argumentField="label" />
                  <Title text="?????ng ch?? ???? t???ng r??i v??o t??nh tr???ng ph???i l???c t??m h???t ?????ng h??? s??, t??i li???u nh??ng v???n kh??ng t??m th???y m???t c??ng v??n, m???t t??? tr??nh ???? t???ng th???c hi???n?" />
                  <EventTracker />
                  <Tooltip />
                </Chart>
              )}
            </Grid>
            <Grid item xs={3}>
              {chart2 && (
                <Chart data={chart2}>
                  <Legend />
                  <PieSeries valueField="count" argumentField="label" />
                  <Title text="Theo ?????ng ch?? t??? khi ??p d???ng E-office (v??n ph??ng ??i???n t???) th???i l?????ng t??? khi b???t ?????u x??y d???ng ?????n khi ban h??nh ???????c m???t v??n b???n ???????c r??t ng???n bao nhi??u?" />
                  <EventTracker />
                  <Tooltip />
                </Chart>
              )}
            </Grid>
            <Grid item xs={3}>
              {chart3 && (
                <Chart data={chart3}>
                  <Legend />
                  <PieSeries valueField="count" argumentField="label" />
                  <Title text="Theo ?????ng ch?? trong n??m 2021 l?????ng gi???y t??? in ???n c??c ?????ng ch?? ti??u th??? gi???m ??i bao nhi??u?" />
                  <EventTracker />
                  <Tooltip />
                </Chart>
              )}
            </Grid>
            <Grid item xs={3}>
              {chart4 && (
                <Chart data={chart4}>
                  <Legend />
                  <PieSeries valueField="count" argumentField="label" />
                  <Title text="Theo ?????ng ch?? trong th???i gian t???i c???n ph??t tri???n, b??? sung c??c ti???n ??ch n??o ????? ph???c v??? ?????c l???c c??ng t??c chuy??n m??n c???a m??nh (?????i bi???u c?? th??? l???a ch???n nhi???u ????p ??n)" />
                  <EventTracker />
                  <Tooltip />
                </Chart>
              )}
            </Grid>
          </Grid>
        </Paper>
      </div>
    </>
  );
}
