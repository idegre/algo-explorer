import { combineReducers } from "redux"
import { reducer as lastestBlocks, State as lastestBlocksState } from './reducers/lastestBlocks'
import { reducer as lastestTransactions, State as lastestTransactionsState } from './reducers/lastestTransactions'

export type RootState = {
	lastestBlocks: lastestBlocksState
	lastestTransactions: lastestTransactionsState
}
export const rootReducer = combineReducers({
	lastestBlocks,
	lastestTransactions
})
