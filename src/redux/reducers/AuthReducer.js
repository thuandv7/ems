import { NavigationActions } from 'react-navigation';
import { AppNav } from '../../routers';

const initialAuthState = {
    isLogged: false
};

const AuthReducer = (state = initialAuthState, action) => {
  switch(action.type){
      case 'HIHI':  
        return {...state, isLogged: true};
    //   default:
    //     return AppNav.router.getStateForAction(action, state);
      //  return AppNav.router.getStateForAction(AppNav.router.getActionForPathAndParams('Home'));
  }
  return state;
}

export default AuthReducer;