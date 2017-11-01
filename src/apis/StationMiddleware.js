import { ESTATION_LOAD } from "../redux/actions/actionType";
import {
    actionStationReceived    
} from "../redux/actions";
  import { API, SERVICES } from './api';

  export const StationMiddleware = store => next => action => {
    next(action);
    switch (action.type) {
      case ESTATION_LOAD:
      const username = action.username;
      const password = action.password;
      console.log(action);
        fetch(`${API}${SERVICES}/thuandv/en/DiemDo`)
          .then(response => response.json())
          .then(rs => {
            var ls = [];
            if (rs!=null && rs.data != null) {
              ls = rs.data;
            }
            next(actionStationReceived(ls));
          })
          .catch(error => next(actionStationReceived([])));
        break;
      default:
        break;
    }
  };