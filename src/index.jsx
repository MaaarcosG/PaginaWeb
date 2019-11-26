import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Titulo from './Titulo';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Estudiante de Ingenieria en Ciencia de la Computación, principiante en Desarrollo Web',
    };
  }
  /**
  handleEvent = (event) => {
    if(event.type === "mousedown"){
      this.setState({message: "Tecnologías Web "});
    }else{
      this.setState({message: "Estudiante de Ingenieria en Ciencia de la Computación,
      principiante en Desarrollo Web"});
    }
  } */

  render() {
    return (
      <div className="index">
        <Titulo />
        <p>{this.state.message}</p>
        <div>
          <h2>HTML Only - Historia</h2>
          <img alt="1" src="http://www.msdeus.site/17909/Project-No-2/dist/imagenes/Historia.png" />
          <div>
            <a href="http://www.msdeus.site/17909/Lab-No-3/Main.html">
              <button type="button"> Ver Historia </button>
            </a>
          </div>
        </div>
        <div>
          <h2>CSS Only - draw</h2>
          <img alt="2" className="cambiarTamaño" src="http://www.msdeus.site/17909/Project-No-2/dist/imagenes/CSS.png" />
          <div>
            <a href="http://www.msdeus.site/17909/Lab-No-4/iron-man.html">
              <button type="button"> Ver Dibujo</button>
            </a>
          </div>
        </div>
        <div>
          <h2>JS - Chat del Servidor</h2>
          <img alt="3" src="http://www.msdeus.site/17909/Project-No-2/dist/imagenes/chat.png" />
          <div>
            <a href="http://www.msdeus.site/17909/Lab-No-5/Chat.html">
              <button type="button"> Comenzar a Chatear </button>
            </a>
          </div>
        </div>
        <div>
          <h2>React - Memoria</h2>
          <img alt="4" className="cambiarTamaño" src="http://www.msdeus.site/17909/Project-No-2/dist/imagenes/memoria.png" />
          <div>
            <a href="https://github.com/MaaarcosG/Lab06_React">
              <button type="button"> Ver Codigo Fuente </button>
            </a>
            <a href="http://www.msdeus.site/17909/Lab-No-6/Memoria.html">
              <button type="button"> Jugar a la Memoria </button>
            </a>
          </div>
        </div>
        <div>
          <h2>React - Calculadora</h2>
          <img alt="5" className="cambiarTamaño" src="http://www.msdeus.site/17909/Project-No-2/dist/imagenes/calculadora.png" />
          <div>
            <a href="https://github.com/MaaarcosG/Lab08">
              <button type="button"> Ver Codigo Fuente </button>
            </a>
            <a href="http://www.msdeus.site/17909/Lab-No-8/dist/index.html">
              <button type="button"> Realizar Calculos </button>
            </a>
          </div>
        </div>
        <div>
          <h2>Proyecto No. 1 - Pagina Web Simple</h2>
          <img alt="6" src="http://www.msdeus.site/17909/Project-No-2/dist/imagenes/pagina.png" />
          <div>
            <a href="https://github.com/MaaarcosG/WebSite_Project/tree/master/Proyecto">
              <button type="button"> Ver Codigo Fuente </button>
            </a>
            <a href="http://www.msdeus.site/17909/Project-No-1/index.html">
              <button type="button"> Inspeccionar Pagina </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
