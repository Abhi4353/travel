import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Numbers from './pages/Numbers';
function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/numbers" element={<Numbers/>}/>

      </Routes>
     </Router>
    </>
  );
}

export default App;
