import React, { FunctionComponent } from 'react'
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'

type OwnProps = {
	children: JSX.Element
}

export const Navigation:FunctionComponent<OwnProps> = ({children}) => <>
	<Navbar>
		<NavbarBrand>RandLabs Test</NavbarBrand>
		<Nav className="mr-auto" navbar>
			<NavItem>
				<Link to="/">Home</Link>
			</NavItem>
		</Nav>
	</Navbar>
	<div className="d-flex bd-highlight flex-row justify-content-center">
		{children}
	</div>
</>
