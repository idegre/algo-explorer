import { AxiosError } from 'axios'
import { RootActions } from '../combineActions'
import { LASTEST_TRANSACTIONS_REQUEST, LASTEST_TRANSACTIONS_FAILURE, LASTEST_TRANSACTIONS_SUCCESS } from '../actionTypes'
import { ITransaction } from '../interfaces/ITransaction'

const initialState = {
	amount: 10,
	isFetching: false,
	transactions: null,
	error: null
}

export type State = {
	amount: number,
	isFetching: boolean,
	transactions: ITransaction[] | null,
	error: AxiosError | null
}

export const reducer = (state: State = initialState, action: RootActions) => {
	switch (action.type) {
		case LASTEST_TRANSACTIONS_REQUEST:
			return {
				...state,
				isFetching: true
			}
		case LASTEST_TRANSACTIONS_SUCCESS:
			return {
				...state,
				isFetching: false,
				transactions: action.payload
			}
		case LASTEST_TRANSACTIONS_FAILURE:
			return {
				...state,
				isFetching: false,
				transactions: null,
				error: action.payload
			}
		default:
			return {
				...state
			}
	}
}
