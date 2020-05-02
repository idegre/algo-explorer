import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../combineReducers';
import { Spinner } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { getBlock } from '../actions/getBlock';
import { BlockForm } from '../components/block';

export const Block = () => {
	const dispatch = useDispatch()
	const { blockNumber }: { blockNumber: string } = useParams()
	const individualBlock = useSelector(({ individualBlocks }: RootState) => individualBlocks.blocks[blockNumber])
	useEffect(() => {
		if(!individualBlock){
			dispatch(getBlock(blockNumber))
		}
	}, [])
	return !!individualBlock?.isFetching ? <Spinner class="d-flex justify-content-center"/> : (!!individualBlock?.error || !individualBlock?.data) ? <div>there was a problem</div> : <BlockForm block={individualBlock.data} />
}
