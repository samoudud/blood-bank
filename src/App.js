import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Donor from './components/Donor/Donor';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/donor" element={<Donor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
