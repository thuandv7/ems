import { NavigationActions } from 'react-navigation';
import { AppNav } from '../../routers';
import { GOHOME } from '../actions/actionType';

const initialNavState = {
    index: 0,
    routes: [
        { key: 'Login', routeName: 'Login' },
    ],
};

const NavReducer = (state = initialNavState, action) => {
  switch(action.type){
      case GOHOME:  
        return AppNav.router.getStateForAction(NavigationActions.navigate({ routeName: 'Home' }), state);
      default:
        return AppNav.router.getStateForAction(action, state);
      //  return AppNav.router.getStateForAction(AppNav.router.getActionForPathAndParams('Home'));
  }
  return state;
}

export default NavReducer;