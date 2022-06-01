import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BloodRequest from './components/BloodRequest/BloodRequest';
import Dashboard from './components/Dashboard/Dashboard';
import DashboardHome from './components/DashboardHome/DashboardHome';
import Donor from './components/Donor/Donor';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import ManageDonors from './components/ManageDonors/ManageDonors';
import Register from './components/Register/Register';
import Requests from './components/Requests/Requests';
import Result from './components/Result/Result';
import DonorProvider from './context/DonorProvider';

function App() {
  return (
    <div className="App">
      <DonorProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<Donor />} />
            <Route path="donors/:group" element={<Result />} />
            <Route path="/dashboard" element={<Dashboard />} >
              <Route path='' element={<DashboardHome />} />
              <Route path='requests' element={<Requests />} />
              <Route path='manageDonors' element={<ManageDonors />} />
              <Route path='makeAdmin' element={<MakeAdmin />} />
              <Route path='bloodRequest' element={<BloodRequest />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DonorProvider>
    </div>
  );
}

export default App;
