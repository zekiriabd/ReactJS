import {createStore} from 'redux';

interface IState{
    count:number
}
interface IAction{
    type:string
}

const iniState = {
    count:10
}

const reducers = (state:IState , action:IAction) => {
    let newState: IState ;
    switch(action.type){
        case 'INC' : newState = {count:state.count + 1}; break;
        case 'DEC' : newState = {count:state.count - 1}; break;
        default    : newState =  state;
      }
    return newState;
}


export default createStore(reducers,iniState);