import {createStore} from 'redux';

interface IState{
    count:number
}

interface IAction{
    type:string
}



const reducers = (state:IState , action:IAction) => {
    let newState = state || iniState;
    switch(action.type){
        case 'INC' : newState = {count:state.count + 1}; break;
        case 'DEC' : newState = {count:state.count - 1}; break;
        default    : newState =  state;
      }
    return newState;
}



const iniState = {
    count:0
}

export default createStore(reducers,iniState);