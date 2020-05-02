import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../combineReducers';
import { Spinner } from 'reactstrap';
import { getLastestTransactions } from '../actions/getTransactions';
import {TransactionList} from '../components/transactionList'

export const Transactions = () => {
	const dispatch = useDispatch()
	const {isFetching, transactions, error} = useSelector(({lastestTransactions}: RootState) => lastestTransactions)
	useEffect(() => {
		const refreshInterval = setInterval(() => dispatch(getLastestTransactions()), 3000)
		return () => clearInterval(refreshInterval)
	}, [])

	return isFetching && (transactions === null) ? <Spinner class="d-flex justify-content-center"/> : !!error ? <div>there was a problem</div> : transactions && <TransactionList transactions={transactions} />
}
