import React from 'react'
import { Button } from 'reactstrap'
import { History } from 'history';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

type Props = RouteComponentProps

const handleLink = (h: History, direction: string) => () => h.push(direction)

const HomeComponent = ({history}: Props) => <Container className={"p-4"}>
	<Col>
		<Row className={"m-1"}>
			<Button onClick={handleLink(history, '/blocks')}>Lastest blocks</Button>
		</Row>
		<Row className={"m-1"}>
			<Button onClick={handleLink(history, '/transactions')}>Lastest transactions</Button>
		</Row>
	</Col>
</Container>

export const Home = withRouter(HomeComponent)

