import { NavigationActions }    from 'react-navigation';
import { AppNav }               from '../../routers';
import { STATION_RECEIVED }     from '../actions/actionType';

const initialState = {
    stations: null
};

const StationReducer = (state = initialState, action) => {
  switch(action.type){
      case STATION_RECEIVED:  
        return {...state, stations: action.data};
    //   default:
    //     return AppNav.router.getStateForAction(action, state);
      //  return AppNav.router.getStateForAction(AppNav.router.getActionForPathAndParams('Home'));
  }
  return state;
}

export default StationReducer;