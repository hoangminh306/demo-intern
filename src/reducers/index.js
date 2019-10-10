import { combineReducers } from "redux";
import {postReducers} from "./post.reducer";


const rootReducer = combineReducers({
    postReducers
})

export default rootReducer;