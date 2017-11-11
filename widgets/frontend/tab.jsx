import React from 'react';
import ReactDOM from 'react-dom';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0
    };
  }

  render(){
    return(
      <div>
        <ul>
          {this.props.panes.map(
            (el, idx) => ( <h1>{ el.title }</h1> )
          )}
        </ul>
        <article>{ this.props.panes[this.state.selectedTab].content }</article>
      </div>

    );

  }

}


export default Tab;
