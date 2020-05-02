import React from 'react'
import { IBlock } from '../interfaces/IBlock';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { dateToDateValue, timeToTimeValue } from '../helpers/dateToDateValue';

type OwnProps = {
	block: IBlock
}

export const BlockForm = ({block: {hash, seed, timestamp}}: OwnProps) => <Form className="m-5">
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
		<Input type="date" name="date" id="date" defaultValue={dateToDateValue(timestamp)} disabled/>
	</FormGroup>
	<FormGroup>
		<Label for="time">time of creation</Label>
		<Input type="time" name="time" id="time" defaultValue={timeToTimeValue(timestamp)} disabled/>
	</FormGroup>
</Form>
