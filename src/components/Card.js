import React, {PureComponent} from 'react';
import Cell from './Cell';
import {List} from './List';

class Card extends PureComponent {
  render(){
    const {set} = this.props;
    return(
      <div className="card-container">
        <div className="card-row">
          <Cell id={List[set[0]]} />
          <Cell id={List[set[1]]} />
          <Cell id={List[set[2]]} />
          <Cell id={List[set[3]]} />
        </div>
        <div className="card-row">
          <Cell id={List[set[4]]} />
          <Cell id={List[set[5]]} />
          <Cell id={List[set[6]]} />
          <Cell id={List[set[7]]} />
        </div>
        <div className="card-row">
          <Cell id={List[set[8]]} />
          <Cell id={List[set[9]]} />
          <Cell id={List[set[10]]} />
          <Cell id={List[set[11]]} />
        </div>
        <div className="card-row">
          <Cell id={List[set[12]]} />
          <Cell id={List[set[13]]} />
          <Cell id={List[set[14]]} />
          <Cell id={List[set[15]]} />
        </div>
      </div>
    );
  }
}

export default Card;
