import React, { PureComponent } from 'react';
import './titulo_style.css';

class Titulo extends PureComponent {
  render() {
    return (
      <div>
        <h1 color='black' className="rotation1">
            <span>Proyectos Realizados</span>
            <span className="palabrasRotar">
                <b className="is-visible"> Desarrollo Web</b>
            </span>
        </h1>
      </div>
    );
  }
}

export default Titulo;