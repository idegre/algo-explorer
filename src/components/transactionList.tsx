import React from 'react'
import { Table } from 'reactstrap';
import { ITransaction } from '../interfaces/ITransaction';

type OwnProps = {
	transactions: ITransaction[]
}

export const TransactionList = ({transactions}: OwnProps) => <Table>
	<thead>
		<tr>
			<th>#</th>
			<th>from</th>
			<th>to</th>
			<th>amount</th>
			<th>type</th>
		</tr>
	</thead>
	<tbody>
		{transactions.map(({ from, to, amount, type, timestamp }: ITransaction, index: number) => <tr key={from + to + timestamp}>
			<th scope="row">{index}</th>
			<td>{from}</td>
			<td>{to}</td>
			<td>{amount}</td>
			<td>{type}</td>
		</tr>)}
	</tbody>
</Table>

