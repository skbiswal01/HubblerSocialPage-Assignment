
import './App.css';
import LeftSideBar from './components/LeftSideBar';
import NavBar from './components/NavBar';
import RightSideBar from './components/RightSideBar';
import Feed from './components/Feed';
function App() {
  return (
    <div className="App">
       <LeftSideBar/>
       <NavBar/>
       <Feed/>
       <RightSideBar/>
    </div>
  );
}

export default App;
