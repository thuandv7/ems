import {
    NavigationActions
} from 'react-navigation';
import {
    AppNav
} from '../../routers';
import {
    STATION_RECEIVED,
    STATION_EXPAND
} from '../actions/actionType';

const initialState = {
    stations: []
};

const StationReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATION_RECEIVED:
            var status = true;
            for (i = 0; i < action.data.length; i++) {
                action.data[i]['isOpen'] = status;
                if (status) {
                    status = false;
                }
            }
            return { ...state,
                stations: action.data
            };

        case STATION_EXPAND:
            var stations = state.stations;
            
            for (i = 0; i < state.stations.length; i++) {
                var status = false;
                if (i === action.index) {
                    status = !action.isOpen;
                }
                state.stations[i].isOpen = status;
            }
            return { ...state,
                stations: state.stations
            };
            //   default:
            //     return AppNav.router.getStateForAction(action, state);
            //  return AppNav.router.getStateForAction(AppNav.router.getActionForPathAndParams('Home'));
    }
    return state;
}

export default StationReducer;