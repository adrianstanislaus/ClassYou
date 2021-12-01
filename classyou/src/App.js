import './App.css';
import { Routes, Route,} from "react-router-dom";
import AdminDashboard from './pages/adminDashboard';
import ClassAdd from './pages/classAdd';
import ClassDetail from './pages/classDetail';
import ClassEdit from './pages/classEdit';
import LandingPage from './pages/landingpage';
import ClassModuleEdit from './pages/classCuricullumEdit';
import SearchPage from './pages/search';
import ClassDetailAnonymous from './pages/classDetailUser';
import Authenticate from './components/authentication';
import Explore from './pages/explore';



function App() {
  return (
  <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/explore" element={<Explore/>} />
    <Route path="/search" element={<SearchPage/>} />
    <Route path="/class/:id" element={<ClassDetailAnonymous/>} />
    <Route path="/admin/dashboard" element={<Authenticate><AdminDashboard /></Authenticate>} />
    <Route exact path="/admin/class/create" element={<Authenticate><ClassAdd/></Authenticate>} />
    <Route path="/admin/class/:id/editinfo" element={<Authenticate><ClassEdit/></Authenticate>} />
    <Route path="/admin/class/:id/editmodules" element={<Authenticate><ClassModuleEdit/></Authenticate>} />
    <Route path="/admin/class/:id" element={<Authenticate><ClassDetail/></Authenticate>} />
  </Routes>
  );
}

export default App;
