import { combineReducers } from "redux";
import filmReducer from "containers/Home/ListMoviePage/reducer";
import { detailReducer } from "containers/Home/DetailMovie/reducer";
import { authReducer } from "containers/Admin/AuthPage/reducers";
import { addUserReducer } from "containers/Admin/AddUserPage/reducers";
const rootReducer = combineReducers({
  filmReducer,
  detailReducer,
  authReducer,
  addUserReducer,
});
export default rootReducer;
