import { AxiosError } from 'axios'
import { RootActions } from '../combineActions'
import { IBlock } from '../interfaces/IBlock'
import { LASTEST_BLOCKS_REQUEST, LASTEST_BLOCKS_FAILURE, LASTEST_BLOCKS_SUCCESS } from '../actionTypes'

const initialState = {
	amount: 10,
	isFetching: false,
	blocks: null,
	error: null
}

export type State = {
	amount: number,
	isFetching: boolean,
	blocks: IBlock[] | null,
	error: AxiosError | null
}

export const reducer = (state: State = initialState, action: RootActions) => {
	switch (action.type) {
		case LASTEST_BLOCKS_REQUEST:
			return {
				...state,
				isFetching: true
			}
		case LASTEST_BLOCKS_SUCCESS:
			return {
				...state,
				isFetching: false,
				blocks: action.payload
			}
		case LASTEST_BLOCKS_FAILURE:
			return {
				...state,
				isFetching: false,
				blocks: null,
				error: action.payload
			}
		default:
			return {
				...state
			}
	}
}
