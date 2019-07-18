import * as React from 'react';
import {connect} from 'react-redux';

interface IProps{
  count    : number,
  increment: any,
  decrement: any,
}
   
interface IState{
  count:number
}

const Mycomponent = (props:IProps) => (
  <div>
    <button onClick={props.decrement}>Decrement</button>
    <p>Current count: <strong>{props.count}</strong></p>
    <button onClick={props.increment}>Increment</button>
  </div>
);





const mapStateToProps = (state:IState) =>{
  return {
    count:state.count
  }
}

const mapDispatchtoProps = (dispatch:any) => {
return {
  decrement : ()=> dispatch({type:'DEC'}),
  increment : ()=> dispatch({type:'INC'}), 
}
}

export default connect(mapStateToProps,mapDispatchtoProps)(Mycomponent);