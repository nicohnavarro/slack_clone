
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      {/* React-Router -> Chat screen */}
    </div>
  );
}

export default App;
