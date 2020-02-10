import React, {PureComponent} from 'react';

import Bean from '../assets/beans/bean1.png';

class Cell extends PureComponent {

  state={
    beanPlaced: false,
  }

  handleClick = (event) => {
    this.setState({beanPlaced: !this.state.beanPlaced})
  }


  render(){
    const {id} = this.props;
    const {beanPlaced} = this.state;
    return(
      <div className="cell-container" onClick={this.handleClick}>
        <img className="cell-img" src={id.src} alt={id.name} />
        <img src={Bean} alt='bean'
          style={{
            position: 'absolute',
            height: '50px',
            marginLeft: '15px',
            marginTop: '-100px',
            display: (beanPlaced)?'block':'none'
          }}/>
      </div>
    );
  }
}

export default Cell;
