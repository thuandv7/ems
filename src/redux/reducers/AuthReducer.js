import { NavigationActions } from 'react-navigation';
import { AppNav } from '../../routers';
import { LOGIN_RECEIVED } from '../actions/actionType';

const initialAuthState = {
    data: null
};

const AuthReducer = (state = initialAuthState, action) => {
  switch(action.type){
      case LOGIN_RECEIVED:  
        return {...state, data: action.data};
    //   default:
    //     return AppNav.router.getStateForAction(action, state);
      //  return AppNav.router.getStateForAction(AppNav.router.getActionForPathAndParams('Home'));
  }
  return state;
}

export default AuthReducer;