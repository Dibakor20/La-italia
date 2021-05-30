import Dishes from '../Data/Dishes'
import Comments from '../Data/Comments'

const initialState = {
    dishes: Dishes,
    comments: Comments,
}

export const Reducer = (state = initialState, action) =>{
    console.log("action:", action )
   if(action.type === 'ADD_COMMENT') {
       let comment = action.payload;
       comment.id = state.comments.length
       comment.date = new Date().toDateString()
        
       return {
           ...state,
           comments: state.comments.concat(comment)

       }
   }
    return state;
}