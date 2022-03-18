import styled from 'styled-components'

export const Wrapper = styled.header`
	width: 100%;
	user-select: none;
	height: 70px;
	background: linear-gradient(to right, #672280 1.18%, #a626d3 100%);
`

export const Content = styled.nav`
	display: flex;
	justify-content: start;
	align-items: center;
	transform: translate(0, 50%);

	padding: 0 8rem;

	h1 {
		color: var(--white);
		font-size: 25px;
		line-height: 25px;
		letter-spacing: -0.1em;
	}

	@media screen and (max-width: 768px) {
		padding: 0 3rem;

		h1 {
			font-size: 20px;
		}
	}
`

export const Logo = styled.img`
	width: 45px;
	height: 35px;
	margin-right: 8px;
	-webkit-user-drag: none;
	user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
`
