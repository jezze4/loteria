import React from 'react';

import Card from './components/Card';

import './styles/Cell.scss';
import './styles/Card.scss';

function App() {
  let set = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  return (
    <div>
      <Card
        set={set}
      />
    </div>
  );
}

export default App;
