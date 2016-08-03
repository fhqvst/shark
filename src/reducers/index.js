import user from './user'
import instruments from './instruments'
import notifications from './notifications'
import positions from './positions'
import search from './search'
import tabs from './tabs'
import { combineReducers } from 'redux'

export default combineReducers({
    user,
    instruments,
    notifications,
    positions,
    search,
    tabs
});