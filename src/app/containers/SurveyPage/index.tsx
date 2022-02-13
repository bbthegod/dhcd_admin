/*
 *
 * SurveyPage
 *
 */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './slice';
import { selectSurveyPage } from './slice/selectors';

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
    <Paper>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          {chart1 && (
            <Chart data={chart1}>
              <Legend />
              <PieSeries valueField="count" argumentField="label" />
              <Title text="Đồng chí đã từng rơi vào tình trạng phải lục tìm hết đống hồ sơ, tài liệu nhưng vẫn không tìm thấy một công văn, một tờ trình đã từng thực hiện?" />
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
              <Title text="Theo đồng chí từ khi áp dụng E-office (văn phòng điện tử) thời lượng từ khi bắt đầu xây dựng đến khi ban hành được một văn bản được rút ngắn bao nhiêu?" />
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
              <Title text="Theo đồng chí trong năm 2021 lượng giấy tờ in ấn các đồng chí tiêu thụ giảm đi bao nhiêu?" />
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
              <Title text="Theo đồng chí trong thời gian tới cần phát triển, bổ sung các tiện ích nào để phục vụ đắc lực công tác chuyên môn của mình (đại biểu có thể lựa chọn nhiều đáp án)" />
              <EventTracker />
              <Tooltip />
            </Chart>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}
