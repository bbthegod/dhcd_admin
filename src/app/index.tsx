import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import '../assets/styles/style.css';

import NotFoundPage from 'app/components/NotFoundPage/loadable';
import PrivateRoute from 'app/components/PrivateRoute/loadable';
import AuthStorage from 'app/components/AuthStorage/loadable';
// import Dashboard from 'app/components/Dashboard/loadable';
//= ======================================================================
import LoginPage from 'app/containers/LoginPage/loadable';
import UserDetail from 'app/containers/UserDetail/loadable';
import UserPage from 'app/containers/UserPage/loadable';
import QuestionPage from 'app/containers/QuestionPage/loadable';
import QuestionDetail from 'app/containers/QuestionDetail/loadable';
import Leaderboard from 'app/containers/Leaderboard/loadable';
import FilePage from 'app/containers/FilePage/loadable';
import FileDetail from 'app/containers/FileDetail/loadable';
import ControlPage from './containers/ControlPage/loadable';
import SurveyPage from './containers/SurveyPage/loadable';
import theme from 'assets/theme/index';

export default function App() {
  return (
    <div style={{ backgroundColor: '#ECEFF1', minHeight: '100vh' }}>
      <BrowserRouter>
        <AuthStorage>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route path="/login" component={LoginPage} />
              <PrivateRoute exact path="/" component={UserPage} />
              <PrivateRoute path="/user/:id" component={UserDetail} />
              <PrivateRoute path="/user" component={UserPage} />
              <PrivateRoute path="/question/:id" component={QuestionDetail} />
              <PrivateRoute path="/question" component={QuestionPage} />
              <PrivateRoute path="/leaderboard" component={Leaderboard} />
              <PrivateRoute path="/file/:id" component={FileDetail} />
              <PrivateRoute path="/file" component={FilePage} />
              <PrivateRoute path="/control" component={ControlPage} />
              <PrivateRoute path="/survey" component={SurveyPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </ThemeProvider>
        </AuthStorage>
      </BrowserRouter>
    </div>
  );
}
