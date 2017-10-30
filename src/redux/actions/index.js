import { GOLOGIN, GOHOME, ELOGIN, LOGIN_RECEIVED, STATION_RECEIVED, ESTATION_LOAD} from './actionType';


export const goLogin = { type: GOLOGIN };
export const goHome = { type: GOHOME };
export const actionLogin = (urs, pwd) => { return {type: ELOGIN, username: urs, password: pwd}};
export const receivedLogin = (data) => { return {type: LOGIN_RECEIVED, data: data}};
export const actionLoadStation = {type: ESTATION_LOAD};
export const actionStationReceived = (data) => { return {type: STATION_RECEIVED, data: data}};
