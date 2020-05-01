import { ThunkAction } from "redux-thunk"
import { RootState } from "../combineReducers"
import Axios, { AxiosError } from "axios"
import { IBlock } from "../interfaces/IBlock"
import { LASTEST_BLOCKS_REQUEST, LASTEST_BLOCKS_SUCCESS, LASTEST_BLOCKS_FAILURE } from "../actionTypes"

const fetchLastestBlocksRequest = () => ({
	type: LASTEST_BLOCKS_REQUEST
})

const fetchLastestBlocksSuccess = (data: IBlock[]) => ({
	type: LASTEST_BLOCKS_SUCCESS,
	payload: data
})

const fetchLastestBlocksFailure = (e: AxiosError) => ({
	type: LASTEST_BLOCKS_FAILURE,
	payload: e
})

export const getLastestBlocks = ():ThunkAction<Promise<IBlock[]>, RootState, void, Actions> =>
	(dispatch, getState) => new Promise(async (resolve, reject) => {
		const { amount } = getState().lastestBlocks
		try {
			dispatch(fetchLastestBlocksRequest())
			const { data } = await Axios.get<IBlock[]>(`/block/latest/${amount}`)
			dispatch(fetchLastestBlocksSuccess(data))
			resolve(data)
		} catch (e) {
			dispatch(fetchLastestBlocksFailure(e))
			reject(e)
		}
})

export type Actions = ReturnType<typeof fetchLastestBlocksRequest>
	| ReturnType<typeof fetchLastestBlocksSuccess>
	| ReturnType<typeof fetchLastestBlocksFailure>
