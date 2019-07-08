import * as React from 'react';
import { Button,Form } from 'react-bootstrap';
import {connect} from 'react-redux';

import './Mycomponent.css';


interface IProps{
  count    : number,
  increment: any,
  decrement: any,
}

interface IState{
  count:number,
}

const Mycomponent = (props:IProps) => (
<div>
            <Form>
              <Form.Group controlId="gLastName">
                  <Button variant="primary" onClick={props.increment} >-</Button>
                  <Form.Label style={{width:100,textAlign:"center"}}>{props.count}</Form.Label>
                  <Button variant="primary" onClick={props.decrement} >+</Button>
              </Form.Group>
            </Form>
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
