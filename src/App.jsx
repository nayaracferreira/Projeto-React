import logo from './images/logo.svg';

//Importando os styles
import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/main.css"

function App() {
  return (
    //Copiamos do body do projeto clonado Tera
    //ctrl shift+l - Para selecionar o nome e mudar vérios com o mesmo nome
    // Essa parte deve ser componentizada
    <div className="home center">
      <div className="home__logo">
        {/* coloque a imagem importada */}
        <img src={logo} className="responsive" alt="" />
      </div>
      <select className="home__select-users">
        <option>User 1</option>
        <option>User 2</option>
        <option>User 3</option>
      </select>
      <button className="button-primary">Entrar</button>
    </div>
  );
}

export default App;
