import styled from 'styled-components'

export const Wrapper = styled.button`
	position: fixed;
	bottom: 0;
	right: 0;
	border: none;
	background: none;

	.arrow-up {
		color: var(--purple);
		background: var(--white);
		border: 2px solid transparent;
		font-size: 45px;
		bottom: 1.5rem;
		right: 2rem;
		border-radius: 100%;
		position: absolute;

		:hover {
			cursor: pointer;
			color: var(--purple);
			border: 2px solid var(--white);
			transition: all 0.15s ease-in-out;
			animation: MoveUpDown 1s linear infinite;
		}

		@keyframes MoveUpDown {
			0%,
			100% {
				bottom: 1.5rem;
			}
			50% {
				bottom: 2rem;
			}
		}
	}
`
