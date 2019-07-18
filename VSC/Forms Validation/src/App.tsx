
                


import * as React from 'react';
import { Provider } from 'react-redux';

import Counter from './components/counter/Counter';
import store from './store/Store';



class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
      <div>
          <Counter/>
      </div>
      </Provider>
    );
  }
}

export default App;