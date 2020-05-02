import { combineReducers } from "redux"
import { reducer as lastestBlocks, State as lastestBlocksState } from './reducers/lastestBlocks'
import { reducer as lastestTransactions, State as lastestTransactionsState } from './reducers/lastestTransactions'
import { reducer as individualBlocks, State as individualBlocksState } from './reducers/block'

export type RootState = {
	lastestBlocks: lastestBlocksState
	lastestTransactions: lastestTransactionsState,
	individualBlocks: individualBlocksState
}
export const rootReducer = combineReducers({
	lastestBlocks,
	lastestTransactions,
	individualBlocks
})
