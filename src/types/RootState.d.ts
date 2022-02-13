import { LoginPageState } from 'app/containers/LoginPage/slice/types';
import { UserPageState } from 'app/containers/UserPage/slice/types';
import { QuestionPageState } from 'app/containers/QuestionPage/slice/types';
import { LeaderboardState } from 'app/containers/Leaderboard/slice/types';
import { UserDetailState } from 'app/containers/UserDetail/slice/types';
import { QuestionDetailState } from 'app/containers/QuestionDetail/slice/types';
import { InterviewState } from 'app/containers/Interview/slice/types';
import { DashboardState } from 'app/containers/Dashboard/slice/types';
import { FilePageState } from 'app/containers/FilePage/slice/types';
import { FileDetailState } from 'app/containers/FileDetail/slice/types';
import { ControlPageState } from 'app/containers/ControlPage/slice/types';
import { SurveyPageState } from 'app/containers/SurveyPage/slice/types';
// GENERATE NEW CONTAINER STATE ABOVE, DO NOT DELETE IT

interface RootState {
  loginPage?: LoginPageState;
  userPage?: UserPageState;
  questionPage?: QuestionPageState;
  leaderboard?: LeaderboardState;
  userDetail?: UserDetailState;
  questionDetail?: QuestionDetailState;
  interview?: InterviewState;
  dashboard?: DashboardState;
  filePage?: FilePageState;
  fileDetail?: FileDetailState;
  controlPage?: ControlPageState;
  surveyPage?: SurveyPageState;
  // GENERATE NEW REDUCER KEY ABOVE, DO NOT DELETE IT
}
