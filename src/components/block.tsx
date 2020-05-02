import React from 'react'
import { IBlock } from '../interfaces/IBlock';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { dateToDateValue, timeToTimeValue } from '../helpers/dateToDateValue';

type OwnProps = {
	block: IBlock
}

export const BlockForm = ({block: {hash, seed, timestamp}}: OwnProps) => <Form className="m-5 flex-grow-1">
	<FormGroup>
		<Label for="hash">hash</Label>
		<Input type="text" name="hash" id="hash" defaultValue={hash} disabled/>
	</FormGroup>
	<FormGroup>
		<Label for="seed">seed</Label>
		<Input type="text" name="seed" id="seed" defaultValue={seed} disabled/>
	</FormGroup>
	<Row>
		<Col>
			<FormGroup>
				<Label for="date">day of creation</Label>
				<Input type="date" name="date" id="date" defaultValue={dateToDateValue(timestamp)} disabled/>
			</FormGroup>
		</Col>
		<Col>
			<FormGroup>
				<Label for="time">time of creation</Label>
				<Input type="time" name="time" id="time" defaultValue={timeToTimeValue(timestamp)} disabled/>
			</FormGroup>
		</Col>
	</Row>
</Form>
