
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat'

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <div className='app__body'>
          <Sidebar />
          <Switch>
            <Route path='/room/:roomId'>
              <Chat/>
            </Route>
            <Route path='/'>
              <h1>Welcome</h1>
            </Route>
          </Switch>
        </div>
        {/* React-Router -> Chat screen */}
      </Router>

    </div>
  );
}

export default App;
