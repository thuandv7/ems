import { ELOGIN } from "../redux/actions/actionType";
import {
    receivedLogin    
} from "../redux/actions";
  import {API} from './api';
  export const AuthMiddleware = store => next => action => {
    next(action);
    switch (action.type) {
      case ELOGIN:
      const username = action.username;
      const password = action.password;
      console.log(action);
        fetch(`${API}DesktopModules/QuanTri/MobileServices.ashx?function=checklogin&username=${username}&password=${password}`)
          .then(response => response.json())
          .then(rs => next(receivedLogin(rs)))
          .catch(error => next(receivedLogin(null)));
        break;
      default:
        break;
    }
  };