import user from './user'
import instruments from './instruments'
import notifications from './notifications'
import positions from './positions'
import targets from './targets'
import search from './search'
import { combineReducers } from 'redux'

export default combineReducers({
    user,
    instruments,
    notifications,
    positions,
    targets,
    search
});