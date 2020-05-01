import React from 'react'
import { IBlock } from '../interfaces/IBlock';
import { Table } from 'reactstrap';

type OwnProps = {
	blocks: IBlock[]
}

export const BlocksList = ({blocks}: OwnProps) => <Table>
	<thead>
		<tr>
			<th>#</th>
			<th>Hash</th>
		</tr>
	</thead>
	<tbody>
		{blocks.map(({ hash }: IBlock, index: number) => <tr key={hash}>
			<th scope="row">{index}</th>
			<td>{hash}</td>
		</tr>)}
	</tbody>
</Table>

