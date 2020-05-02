import { ThunkAction } from "redux-thunk"
import { RootState } from "../combineReducers"
import Axios, { AxiosError } from "axios"
import { LASTEST_TRANSACTIONS_REQUEST, LASTEST_TRANSACTIONS_SUCCESS, LASTEST_TRANSACTIONS_FAILURE } from "../actionTypes"
import { ITransaction } from "../interfaces/ITransaction"

const fetchLastestTransactionsRequest = () => ({
	type: LASTEST_TRANSACTIONS_REQUEST
})

const fetchLastestTransactionsSuccess = (data: ITransaction[]) => ({
	type: LASTEST_TRANSACTIONS_SUCCESS,
	payload: data
})

const fetchLastestTransactionsFailure = (e: AxiosError) => ({
	type: LASTEST_TRANSACTIONS_FAILURE,
	payload: e
})

export const getLastestTransactions = ():ThunkAction<Promise<ITransaction[]>, RootState, void, Actions> =>
	(dispatch, getState) => new Promise(async (resolve, reject) => {
		const { amount } = getState().lastestTransactions
		try {
			dispatch(fetchLastestTransactionsRequest())
			const { data } = await Axios.get<ITransaction[]>(`/transaction/latest/${amount}`)
			dispatch(fetchLastestTransactionsSuccess(data))
			resolve(data)
		} catch (e) {
			dispatch(fetchLastestTransactionsFailure(e))
			reject(e)
		}
})

export type Actions = ReturnType<typeof fetchLastestTransactionsRequest>
	| ReturnType<typeof fetchLastestTransactionsSuccess>
	| ReturnType<typeof fetchLastestTransactionsFailure>
