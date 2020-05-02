import React from 'react'
import { IBlock } from '../interfaces/IBlock';
import { Form, FormGroup, Label, Input } from 'reactstrap';

type OwnProps = {
	block: IBlock
}

export const BlockForm = ({block: {hash, seed, timestamp}}: OwnProps) => {
	const date = new Date(timestamp * 1000)
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	const hour = date.getHours()
	const min = date.getMinutes()

	return <Form className="m-5">
		<FormGroup>
			<Label for="hash">hash</Label>
			<Input type="text" name="hash" id="hash" defaultValue={hash} disabled/>
		</FormGroup>
		<FormGroup>
			<Label for="seed">seed</Label>
			<Input type="text" name="seed" id="seed" defaultValue={seed} disabled/>
		</FormGroup>
		<FormGroup>
			<Label for="date">day of creation</Label>
			<Input type="date" name="date" id="date" defaultValue={`${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`} disabled/>
		</FormGroup>
		<FormGroup>
			<Label for="time">time of creation</Label>
			<Input type="time" name="time" id="time" defaultValue={`${hour< 10 ? '0' + hour : hour}:${min< 10 ? '0' + min : min}`} disabled/>
		</FormGroup>
	</Form>
}
