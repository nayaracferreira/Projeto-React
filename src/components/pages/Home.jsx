//Componente funcional dê um rfc e veja a mágica
import React from 'react';

//Como Homes está em outro diretório, devemos subir dois diretórios
import logo from '../../images/logo.svg';

export default function Home() {
  return (
  //Extraimos essa parte que estava dentro retunr do APP.jsx
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
  )
}

