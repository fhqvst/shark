import account from './account'
import instruments from './instruments'
import notifications from './notifications'
import positions from './positions'
import targets from './targets'
import { combineReducers } from 'redux'

export default combineReducers({
    account,
    instruments,
    notifications,
    positions,
    targets
});