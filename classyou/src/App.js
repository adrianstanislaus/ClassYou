import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import AdminDashboard from './pages/adminDashboard';
import ClassAdd from './pages/classAdd';
import ClassDetail from './pages/classDetail';
import ClassEdit from './pages/classEdit';
import LandingPage from './pages/landingpage';


function App() {
  return (
  <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="admin/dashboard" element={<AdminDashboard />} />
    <Route exact path="admin/class/create" element={<ClassAdd/>} />
    <Route path="admin/class/:id/editinfo" element={<ClassEdit/>} />
    <Route path="admin/class/:id/editmodules" element={<ClassEdit/>} />
    <Route path="admin/class/:id" element={<ClassDetail/>} />
  </Routes>
  );
}

export default App;
