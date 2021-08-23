import mathOperation from "./operation"
import uuid from 'react-native-uuid';


const initialState={
    todo:[]
}


const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_TODO" :
            return {...state,todo:[...state.todo,{name:action.paylod,id:uuid.v4()}]}
        case "DELETE":
            let id = action.paylod
            return {...state,todo:state.todo.filter(todo=>todo.id !== id)}
        default :
            return state
    }

}

export default todoReducer;