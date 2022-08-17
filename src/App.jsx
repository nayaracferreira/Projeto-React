//Importando a Router-DOM
import {
  BrowserRouter,  
  Routes,
  Route
} from "react-router-dom";

import Home from "./components/pages/Home";

//Importando os styles
import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/main.css"


function App() {
  return (
    <BrowserRouter>
     <Routes>
      {/* Quando vier uma rota, renderize o elemento{} */}
      <Route path="/" element={<Home/>} />
     </Routes>
    </BrowserRouter>
  ); 
}

export default App;
