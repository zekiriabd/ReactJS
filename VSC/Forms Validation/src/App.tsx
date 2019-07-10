
                


import * as React from 'react';
import { Provider } from 'react-redux';

import Counter from './components/counter/Counter';
import YForm from './components/mform/mform';
import * as UserEdit from './components/mformik/MyForm';
import store from './store/Store';



class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
      <div>
          <YForm id=""/>
          <UserEdit.XForm/>
          <Counter/>
      </div>
      </Provider>
    );
  }
}

export default App;