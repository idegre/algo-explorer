import { Actions as lastestBlocksActions } from './actions/getBlocks'
import { Actions as lastestTransactionsActions } from './actions/getTransactions'

export type RootActions = lastestBlocksActions | lastestTransactionsActions
