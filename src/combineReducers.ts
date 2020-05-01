import { combineReducers } from "redux"
import { reducer as lastestBlocks, State as lastestBlocksState } from './reducers/lastestBlocks'

export type RootState = {
	lastestBlocks: lastestBlocksState
}
export const rootReducer = combineReducers({
	lastestBlocks
})
