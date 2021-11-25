import './App.css';
import ClassCuricullum from './components/class_curicullum';
import ClassHeader from './components/class_header';
import Header from "./components/header"
import ModuleItem from './components/module_item';
import ModuleList from './components/module_list';

function App() {
  return (
    <>
      <Header/>
      <ClassHeader/>
      <ClassCuricullum>
        <ModuleList>
          <ModuleItem/>
          <ModuleItem/>
          <ModuleItem/>
          <ModuleItem/>
        </ModuleList>
      </ClassCuricullum>
    </>
      
  );
}

export default App;
