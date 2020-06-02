import Head from 'next/head';
import styled from 'styled-components';
import logo from '../static/img/logo.png';

const Nav = styled.nav`
	display: flex;
	padding: 10px 15px;
`;

export default function Home() {
	return (
		<Nav>
			<div>
				<img src={logo} />
				<ul>
					<li>Menu</li>
				</ul>
			</div>
		</Nav>
	);
}
