import { ThunkAction } from "redux-thunk"
import { RootState } from "../combineReducers"
import Axios, { AxiosError } from "axios"
import { IBlock } from "../interfaces/IBlock"
import { LASTEST_BLOCK_REQUEST, LASTEST_BLOCK_SUCCESS, LASTEST_BLOCK_FAILURE } from "../actionTypes"

const fetchLastestBlockRequest = (hash: string) => ({
	type: LASTEST_BLOCK_REQUEST,
	payload: {
		hash
	}
})

const fetchLastestBlockSuccess = (hash: string, data: IBlock) => ({
	type: LASTEST_BLOCK_SUCCESS,
	payload: {
		hash,
		data
	}
})

const fetchLastestBlockFailure = (hash: string, error: AxiosError) => ({
	type: LASTEST_BLOCK_FAILURE,
	payload: {
		hash,
		error
	}
})

export const getBlock = (hash: string):ThunkAction<Promise<IBlock>, RootState, void, Actions> =>
	(dispatch) => new Promise(async (resolve, reject) => {
		try {
			dispatch(fetchLastestBlockRequest(hash))
			const { data } = await Axios.get<IBlock>(`/block/${hash}`)
			dispatch(fetchLastestBlockSuccess(hash, data))
			resolve(data)
		} catch (e) {
			dispatch(fetchLastestBlockFailure(hash, e))
			reject(e)
		}
})

export type Actions = ReturnType<typeof fetchLastestBlockRequest>
	| ReturnType<typeof fetchLastestBlockSuccess>
	| ReturnType<typeof fetchLastestBlockFailure>
