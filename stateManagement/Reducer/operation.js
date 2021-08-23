
const initialState = 0;

const mathOperation=(state=initialState,action)=>{
    switch(action.type){
        case "INC" :
            return state+action.paylod;
        case "DEC" :
            return state-1;
        default :
            return state;

    }
    
}

export default mathOperation;