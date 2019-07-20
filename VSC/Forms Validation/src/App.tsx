
                


import * as React from 'react';
import YForm from './components/mform/mform';
import { XForm } from './components/mformik/MyForm';




class App extends React.Component {
  public render() {
    return (
      <div>
          <XForm/>
          <YForm id=""/>
      </div>      
    );
  }
}

export default App;