import * as React from 'react';
import Mycomponent from './components/mycomponent';

export default class App extends React.Component {
    displayName = App.name

    render() {
        return (
            <div>
                <Mycomponent x={5} />
            </div>
        );
    }
}
