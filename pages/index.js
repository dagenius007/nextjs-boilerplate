import { Grid } from '../components/Styles';
import styled from 'styled-components';
import 'swiper/swiper.scss';
import Swiper from 'react-id-swiper';

const Nav = styled.nav`
	display: flex;
	padding: 10px 15px;
`;

export default function Home() {
	const params = {
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	};

	return (
		<>
			<input />
			<Grid columns={['3fr', '1fr']}>
				<Swiper {...params}>
					<div>Slide #1</div>
					<div>Slide #2</div>
					<div>Slide #3</div>
					<div>Slide #4</div>
					<div>Slide #5</div>
				</Swiper>
				<div>blog</div>
			</Grid>
		</>
	);
}
