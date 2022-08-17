//Importando a Router-DOM
import {  BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Users from "./components/pages/Users";
import UserBlog from "./components/pages/UserBlog";
import UserPost from "./components/pages/UserPost";
import CreatePost from "./components/pages/CreatePost";

//Importando os styles
import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/main.css"

function App() {
  return (
    <BrowserRouter>
     <Routes>
      {/* Quando vier uma rota, renderize o elemento{} */}
      <Route path="/" element={<Home/>} />,
      <Route path="/users" element={<Users/>} />
      {/* Rotas com padrão dinâmico informamos o nome do parâmetro que iremos usar EX:userId */}
      <Route path="/users/:userId" element={<UserBlog/>} />
      <Route path="/users/:userId/posts/:postId" element={<UserPost/>} />
      <Route path="/users/:userId/posts/new" element={<CreatePost/>} />
     </Routes>
    </BrowserRouter>
  ); 
}

export default App;
