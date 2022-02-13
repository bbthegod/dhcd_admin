/*
 *
 * PaperList
 *
 */
import { useState, useEffect } from 'react';

import { Typography, Divider, Paper, TextField } from '@mui/material';

import classes from './styles.module.css';

interface Props {}

export default function PaperList(props: Props) {
  //====================================== State ======================================
  const [interviewer, setInterviewer] = useState(localStorage.getItem('interviewer'));
  //====================================== Hook ======================================
  useEffect(() => {
    if (localStorage.getItem('interviewer')) setInterviewer(localStorage.getItem('interviewer'));
  }, []);
  //====================================== Render ======================================
  return (
    <Paper>
      <Typography variant="h4" className={classes.header}>
        CÂU HỎI PHỎNG VẤN
      </Typography>
      <Divider variant="middle" />
      <Paper className={classes.content}>
        <TextField
          className={classes.input}
          label="Người phỏng vấn"
          variant="outlined"
          value={interviewer || localStorage.getItem('interviewer')}
          onChange={e => {
            localStorage.setItem('interviewer', e.target.value);
            setInterviewer(e.target.value);
          }}
        />
        <Typography variant="h4" gutterBottom>
          A. Động cơ xét tuyển thành viên và quan tâm đến công việc
        </Typography>
        <Typography variant="h5">1. Vì sao anh chị nộp đơn tham gia vào kì thi tuyển thành viên của đội?</Typography>
        <Typography variant="h5">2. Anh chị có nhận xét gì về đội?</Typography>
        <Typography variant="h5">3. Điều gì thích thú trong đội mà anh chị đang muốn tuyển ?</Typography>
        <Typography variant="h5">
          4. Điều gì khiến anh chị cảm thấy được kích thích nhất trong tham gia vào đội?
        </Typography>
        <Typography variant="h5">5. Theo anh chị khi tham gia vào đội có yêu cầu đòi hỏi gì?</Typography>
        <Typography variant="h5">
          6. Anh chị dự định sẽ tổ chức việc học tập, lao động khi tham gia đội như thế nào?
        </Typography>
        <Typography variant="h5">
          7. Anh chị sẵn sàng làm những việc tình nguyện, không lương vì đội không? Vì sao?
        </Typography>
        {/* ================= */}
        <Typography variant="h4" gutterBottom>
          B. Đào tạo và giáo dục
        </Typography>
        <Typography variant="h5">1. Anh chị thích hay không thích môn nào nhất? Tại sao?</Typography>
        <Typography variant="h5">
          2. Đánh giá chung của anh chị về hoạt động đào tạo chuyên ngành, các nhóm, tự học, chia sẻ?
        </Typography>
        <Typography variant="h5">3. Anh chị trang trải học phí của mình bằng cách nào?</Typography>
        <Typography variant="h5">4. Anh chị ôn thi đại học bằng cách nào?</Typography>
        {/* ================= */}
        <Typography variant="h4" gutterBottom>
          C. Kiến thức kinh nghiệm trong công việc
        </Typography>
        <Typography variant="h5">
          1. Hãy kể cho chúng tôi nghe về những nơi, tổ chức đội các anh chị đã làm việc, tên công việc, thời gian, nội
          dung, chức vụ
        </Typography>
        <Typography variant="h5">
          2. Anh chị đạt được những giải thưởng nào liên quan đến công việc tại tổ chức, CLB đó?
        </Typography>
        <Typography variant="h5">3. Anh chị có thể làm những công việc nào ở đội chúng tôi?</Typography>
        <Typography variant="h5">4. Những kinh nghiệm cũ giúp gì cho công việc mới tại đội mới?</Typography>
        <Typography variant="h5">5. Hãy kể về những thành công lớn nhất trong công việc của anh chị?</Typography>
        <Typography variant="h5">
          6. Anh chị có thường xuyên hoàn thành công việc với chất lượng và thời gian đúng hạn không?
        </Typography>
        <Typography variant="h5">
          7. Anh chị dự đính sẽ làm những việc gì trong những ngày đầu tiên làm thành viên đội?
        </Typography>
        <Typography variant="h5">
          8. *Ngoài ra* hỏi tiêu chuẩn cho công việc là gì? Tiêu chuẩn nào là quan trọng nhất. Làm thế nào để thực hiện
          một công việc cụ thể? Xử lý một tình huống cụ thể?
        </Typography>
        {/* ================= */}
        <Typography variant="h4" gutterBottom>
          D. Khả năng hoà đồng và giao tiếp
        </Typography>
        <Typography variant="h5">1. Hãy kể về lớp trưởng, bí thư và những người bạn của anh chị?</Typography>
        <Typography variant="h5">
          2. Anh chị thấy rằng làm việc một mình hay theo nhóm sẽ thích hợp, hiệu quả hơn?
        </Typography>
        <Typography variant="h5">3. Anh chị giải quyết xunng đột như thế nào?</Typography>
        <Typography variant="h5">
          4. Quan hệ của anh chị và những người hàng xóm, bạn cùng phòng như thế nào?
        </Typography>
        <Typography variant="h5">5. Anh chị có thể cảm thấy khó khăn khi tiếp xúc với người mới quen không?</Typography>
        <Typography variant="h5">6. 1 tình huống cụ thể</Typography>
        {/* ================= */}
        <Typography variant="h4" gutterBottom>
          E. Tự nhận xét bản thân, ý thức trách nhiệm và cầu tiến
        </Typography>
        <Typography variant="h5">1. Anh chị vui lòng nhận xét về bản thân của anh chị?</Typography>
        <Typography variant="h5">
          2. Những ưu thế của anh chị so với ứng viên khác? Đâu là điểm mạnh và điểm yếu của anh chị?
        </Typography>
        <Typography variant="h5">3. Những điều anh chị muốn kể cho chúng tôi biết về anh chị?</Typography>
        <Typography variant="h5">4. Bạn bè đánh giá anh chị như thế nào?</Typography>
        <Typography variant="h5">5. Dự định của anh chị trong tương lai?</Typography>
        <Typography variant="h5">6. Ước muốn lớn nhât trong nghề nghiệp học tập của anh chị là gì?</Typography>
        <Typography variant="h5">7. Điều gì ảnh hướng lớn đến sự tiến bộ nghề nghiệp, học tập của anh chị?</Typography>
        <Typography variant="h5">8. Theo anh chị nhà quản trị, chủ nhiệm, leader cần những phẩm chất gì?</Typography>
        <Typography variant="h5">
          9. Nếu được trúng tuyển vào đội anh chị có mong đợi hoặc đề nghị gì với ban chủ nhiệm đội?
        </Typography>
        {/* ================= */}
        <Typography variant="h4" gutterBottom>
          F. Quan điểm sở thích chung
        </Typography>
        <Typography variant="h5">1. Điều gì làm anh chị khó chịu nhất trong cuộc sống hiện nay?</Typography>
        <Typography variant="h5">2. Những thói quen và sở thích của anh chị là gì?</Typography>
        <Typography variant="h5">
          3. Nếu anh chị tuyển thành viên khoá sau, anh chị thấy ứng viên phải có tiêu chuẩn gì?
        </Typography>
        <Typography variant="h5">
          4. Anh chị kích thích, động viên thành viên dưới quyền, thành viên cùng tuổi như thế nào?
        </Typography>
        <Typography variant="h5">5. Hãy kể về một thất bại và cách anh chị vượt qua thất bại đó.</Typography>
        <Typography variant="h5">6. Điều gì thường làm anh chị phải lưỡng lự nhất?</Typography>
        <Typography variant="h5">
          7. Bài học kinh nghiệm quý báu nhất mà anh chị đã học được trong thời gian qua?
        </Typography>
        <Typography variant="h5">
          8. Anh chị có nhận xét gì về tình hình kinh tế, chính trị, xã hội hiện này?
        </Typography>
      </Paper>
    </Paper>
  );
}
