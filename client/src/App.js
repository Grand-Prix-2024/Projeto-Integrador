
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from 'react-router-dom';
import Cadastro from './views/Cadastro/Cadastro';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Cadastro' element={<Cadastro/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
