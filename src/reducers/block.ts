import { AxiosError } from 'axios'
import { RootActions } from '../combineActions'
import { IBlock } from '../interfaces/IBlock'
import { LASTEST_BLOCK_REQUEST, LASTEST_BLOCK_FAILURE, LASTEST_BLOCK_SUCCESS } from '../actionTypes'

const initialState = {
	blocks: {}
}

export type State = {
	blocks: {
		[hash: string]: {
			isFetching: boolean,
			error: AxiosError | null,
			data: IBlock | null,
		}
	}
}

export const reducer = (state: State = initialState, action: RootActions) => {
	switch (action.type) {
		case LASTEST_BLOCK_REQUEST:
			return {
				...state,
				blocks: {
					...state.blocks,
					[action.payload.hash]: {
						isFetching: true,
						data: null,
						error: null
					}
				}
			}
		case LASTEST_BLOCK_SUCCESS:
			return {
				...state,
				blocks: {
					...state.blocks,
					[action.payload.hash]: {
						isFetching: false,
						data: action.payload.data,
						error: null
					}
				}
			}
		case LASTEST_BLOCK_FAILURE:
			return {
				...state,
				blocks: {
					...state.blocks,
					[action.payload.hash]: {
						isFetching: false,
						data: null,
						error: action.payload.error
					}
				}
			}
		default:
			return {
				...state
			}
	}
}
