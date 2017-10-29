import { NavigationActions } from 'react-navigation';
import { AppNav } from '../../routers';

const initialNavState = {
    index: 0,
    routes: [
        { key: 'Login', routeName: 'Login' },
    ],
};

const NavReducer = (state = initialNavState, action) => {
  switch(action.type){
      case 'HOME':  
        return AppNav.router.getStateForAction(NavigationActions.navigate({ routeName: 'Home' }), state);
      default:
        return AppNav.router.getStateForAction(action, state);
      //  return AppNav.router.getStateForAction(AppNav.router.getActionForPathAndParams('Home'));
  }
  return state;
}

export default NavReducer;