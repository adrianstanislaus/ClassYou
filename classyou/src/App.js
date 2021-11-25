import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import AdminDashboard from './pages/adminDashboard';
import ClassAdd from './pages/classAdd';
import ClassDetail from './pages/classDetail';
import ClassEdit from './pages/classEdit';


function App() {
  return (
  <Routes>
    <Route path="admin/dashboard" element={<AdminDashboard />} />
    <Route path="admin/add" element={<ClassAdd/>} />
    <Route path="admin/class/:id/edit" element={<ClassEdit/>} />
    <Route path="admin/class/:id" element={<ClassDetail/>} />
  </Routes>
  );
}

export default App;
