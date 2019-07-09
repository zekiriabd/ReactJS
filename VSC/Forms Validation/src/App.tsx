import * as React from 'react';
import {Provider} from 'react-redux';
import Counter from './components/Counter';
import * as UserEdit from './components/MyForm';
import store from './store/Store';


class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
      <div>
          <Counter/>
          <UserEdit.XForm/>
      </div>
      </Provider>
    );
  }
}

export default App;
