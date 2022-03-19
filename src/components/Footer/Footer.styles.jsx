import styled from 'styled-components'

export const Wrapper = styled.footer`
	width: 100%;
	margin-top: 5rem;
	padding: 2rem 0;
	z-index: -1;
`

export const Text = styled.p`
	color: var(--light-black);
	font-weight: 700;
	text-align: center;
	z-index: -1;
	font-size: 15px;
	letter-spacing: -0.01em;

	a {
		text-decoration: none;
		transition: all 0.15s ease-in-out;
		color: var(--purple);
	}

	a:hover {
		color: var(--darker-purple);
	}
`
