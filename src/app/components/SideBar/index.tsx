/*
 *
 * SideBar
 *
 */
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import HelpIcon from '@mui/icons-material/Help';
import { Drawer } from '@mui/material';

import SidebarNav from 'app/components/SidebarNav';
import classes from './styles.module.css';

interface Props {}

const pages = [
  { title: 'Bảng Xếp Hạng', href: '/leaderboard', icon: <AssessmentIcon /> },
  { title: 'Thống Kê Khảo Sát', href: '/survey', icon: <AssessmentIcon /> },
  { title: 'Người Dùng', href: '/user', icon: <PeopleIcon /> },
  { title: 'Câu Hỏi', href: '/question', icon: <HelpIcon /> },
  { title: 'Tài Liệu', href: '/file', icon: <AssignmentIcon /> },
  { title: 'Điều Khiển', href: '/control', icon: <SettingsIcon /> },
];

export default function SideBar(props: Props) {
  return (
    <Drawer anchor="left" classes={{ paper: classes.drawer }} open variant="persistent">
      <div className={classes.root}>
        <SidebarNav pages={pages} />
      </div>
    </Drawer>
  );
}
