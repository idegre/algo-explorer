import { Actions as lastestBlocksActions } from './actions/getBlocks'
import { Actions as lastestTransactionsActions } from './actions/getTransactions'
import { Actions as BlockActions } from './actions/getBlock'

export type RootActions = lastestBlocksActions | lastestTransactionsActions | BlockActions
