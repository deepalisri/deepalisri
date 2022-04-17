import './App.css';
import Header from './Components/Header';
import Homepage from './Components/Homepage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import { ROUTE_HOME, ROUTE_APPLICANTS, ROUTE_LOGIN, ROUTE_JOBS } from "./Components/constants"
import JobPosted from './Components/JobsPosted';
import Applicants from './Components/Applicants';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='main-container-wrapper'>
          <Header />
          <div className='main-container'>
            <Routes>
              <Route path={ROUTE_HOME} element={<Homepage />}></Route>
              <Route path={ROUTE_LOGIN} element={<Login />}></Route>
              <Route path={ROUTE_JOBS} element={<JobPosted />}></Route>
              <Route path={ROUTE_APPLICANTS} element={<Applicants />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
