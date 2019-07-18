import * as React from 'react';

class App extends React.Component {
  public state = {
    Name:"zekiri abdelali MVP",
    Now : new Date(),
    RealNb: 9.9885,
  }

  public render() {
    return (
      <div>
        <p>LowerCase = { this.state.Name.toLowerCase() }</p>  
        <p>UpperCase = { this.state.Name.toUpperCase() }</p>  
        <p>First UpperCase = { this.state.Name.charAt(0).toUpperCase() + this.state.Name.slice(1) }</p>  
        <p style={{ textTransform:"capitalize"}}>{ this.state.Name }</p>
        <p>{ this.state.Now.toString() }</p>
        <p>{this.state.Now.toLocaleDateString('fr')}</p>
        <p>{this.state.Now.toLocaleDateString('fr', { year: 'numeric', month: 'short', day: 'numeric' })}</p>       
        <p>{this.state.Now.toLocaleDateString("fr", {  day:'2-digit', month:'2-digit', year: 'numeric'})}</p>
        <p>{ this.state.RealNb }</p>
        <p>{ this.state.RealNb.toFixed(1) }</p>
        <p>{ this.state.RealNb.toFixed(2) }</p> 
      </div>
    );
  }
}

export default App;
