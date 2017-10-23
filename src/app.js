import React, { Component } from 'react';
import ContentToggle from './content-toggle';

import asada from './tacos/asada.png';
import carnitas from './tacos/carnitas.png';
import pollo from './tacos/pollo.png';

class App extends Component {
  state = {
    tacos: [
      { name: 'Asada', src: asada },
      { name: 'Carnitas', src: carnitas },
      { name: 'Pollo', src: pollo },
    ],
  };
  render() {
    return (
      <div>
        {this.state.tacos.map(taco => (
          <ContentToggle key={taco.name} summary={taco.name}>
            <img className="taco" src={taco.src} alt={`${taco.name} taco`} />
          </ContentToggle>
        ))}
      </div>
    );
  }
}

export default App;
