import styled from 'styled-components'

export const Wrapper = styled.main`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Content = styled.section`
	width: 100%;
	padding: 1.5rem 8rem 2rem;

	h4 {
		text-align: center;
		font-size: 18px;
		color: var(--purple);
		font-weight: 700;
		margin-bottom: 1rem;
	}

	@media screen and (max-width: 768px) {
		padding: 2rem;

		h4 {
			font-size: 16px;
		}
	}
`

export const Form = styled.form`
	width: 100%;
`

export const Inputs = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 3rem;

	input {
		width: 100%;
		height: 40px;
		padding: 15px;
		font-size: 14px;
		font-weight: 400;
		color: var(--black);
		line-height: 15px;
		border: none;
		border-radius: 7px;
		outline: 2px solid var(--black);

		:focus {
			outline: 2px solid var(--purple);
		}
	}

	@media screen and (max-width: 900px) {
		flex-direction: column;
		gap: 1rem;
	}
`

export const MemeWrapper = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
	margin-bottom: 2rem;
`

export const MemeImage = styled.img`
	width: 100%;
	height: 100%;
	padding: 1rem;
	max-width: 500px;
	max-height: 460px;
	object-fit: contain;
	border-radius: 7px;
	border: 2px dashed var(--purple);
`

export const ButtonsWrapper = styled.div`
	display: flex;
	gap: 20px;
	width: 100%;

	@media screen and (max-width: 900px) {
		flex-direction: column;
		gap: 0px;
	}
`

export const Button = styled.button`
	width: 100%;
	height: 50px;
	outline: 1px solid transparent;
	border: 1px solid transparent;
	padding: 1rem;
	font-size: 18px;
	font-weight: 700;
	margin-top: 25px;
	color: var(--white);
	line-height: 19px;
	text-align: center;
	border-radius: 7px;
	letter-spacing: -0.01em;
	background: linear-gradient(to right, #672280 1.18%, #a626d3 100%);

	:hover {
		cursor: pointer;
		transition: all 5s ease-in-out;
		background: linear-gradient(to right, #672280 0.5%, #a626d3 50%);
	}

	:focus {
		border: 1px solid var(--purple);
		outline: 1px solid var(--purple);
	}

	@media screen and (max-width: 1100px) {
		font-size: 16px;
	}

	@media screen and (max-width: 900px) {
		font-size: 14px;
	}

	@media screen and (max-width: 700px) {
		font-size: 12px;
	}
`
