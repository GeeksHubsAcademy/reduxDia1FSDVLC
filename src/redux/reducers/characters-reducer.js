import {ADD_CHARACTERS} from '../types';

const initialState = {
    characters: []
};

const charactersReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CHARACTERS :
            return action.payload;
        
        
        default : 
            return state
    }
}

export default charactersReducer;