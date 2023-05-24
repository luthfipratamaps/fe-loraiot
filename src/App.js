import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MonthlyDataPage from './pages/MonthlyDataPage';
import DataPage from './pages/DataPage';
import Footer from './components/Footer';
import './css/App.css';
import logoLeft from './images/logo-left.png';
import logoRight from './images/logo-right.png';

function App() {

  return (
    <Router>
      <div className="App">
        <div className="jumbotron-container">
          <img src={logoLeft} alt="Organization logo" className="jumbotron-logo jumbotron-logo-left" />
          <div className="jumbotron">
            <h1>Greenhouse Monitoring System</h1>
            <p>Development phase</p>
          </div>
          <img src={logoRight} alt="Organization logo" className="jumbotron-logo jumbotron-logo-right" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/monthly-data">Monthly Data</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          <Route exact path="/" element={<DataPage />} />
          <Route path="/monthly-data" element={<MonthlyDataPage />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
