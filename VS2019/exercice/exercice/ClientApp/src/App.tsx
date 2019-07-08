import * as React from 'react';
import Mycomponent from './components/mycomponent';

class App extends React.Component {
    public render() {
        return (
            <div>
                <Mycomponent x={5} />
            </div>
        );
    }
}

export default App;
