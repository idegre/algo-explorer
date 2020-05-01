import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLastestBlocks } from '../actions/getBlocks';
import { RootState } from '../combineReducers';
import { Spinner } from 'reactstrap';
import { BlocksList } from '../components/blocksList';

export const Blocks = () => {
	const dispatch = useDispatch()
	const {isFetching, blocks, error} = useSelector(({lastestBlocks}: RootState) => lastestBlocks)
	useEffect(() => {
		const refreshInterval = setInterval(() => dispatch(getLastestBlocks()), 3000)
		return () => clearInterval(refreshInterval)
	}, [])

	return isFetching && (blocks === null) ? <Spinner /> : !!error ? <div>there was a problem</div> : blocks && <BlocksList blocks={blocks} />
}
