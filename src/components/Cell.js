import React, {PureComponent} from 'react';


class Cell extends PureComponent {
  render(){
    const {id} = this.props;
    return(
      <div className="cell-container">
        <img className="cell-img" src={id.src} alt={id.name} />
      </div>
    );
  }
}

export default Cell;
