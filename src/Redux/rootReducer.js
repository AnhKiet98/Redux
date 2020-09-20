import { combineReducers } from 'redux'
import { GioHangReducer } from './GioHangReducer'
import {gameXucXacReducer} from './GameXucXacreducer'
import {gameTuXiReducer} from './GameTuXiReducer'
export const rootReduder = combineReducers({
    GioHangReducer: GioHangReducer,
    gameXucXacReducer:gameXucXacReducer,
    gameTuXiReducer:gameTuXiReducer
})