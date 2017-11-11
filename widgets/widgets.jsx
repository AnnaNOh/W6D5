import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tab from './frontend/tab';

const tabs = [{title: "1", content: "I'm first"}, {title: "2", content: "I'm second"}, {title: "3", content: "I'm third"}];



class App extends React.Component {
  render()  {
    return(
      <div>
        <Clock />
        <Tab  panes={tabs}/>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", ()=> {
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);


});
