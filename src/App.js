import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import Login from './components/LoginHeader';
import MainFeeds from './components/MainFeeds';
import MainLogin from './components/MainLogin'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/account/login'>
            <Login />
            <LoginForm />
          </Route>
          <Route exact path='/'>
            <Login />
            <MainLogin />
            <Footer />
          </Route>
          <Route path='/feeds'>
            <MainFeeds />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
