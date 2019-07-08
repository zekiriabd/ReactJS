import * as React from 'react';
import {Provider} from 'react-redux';
import Mycomponent from './components/mycomponent';
import store from './store/store';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
      <div>
            <Mycomponent/>
      </div>
      </Provider>
    );
  }
}

export default App;
