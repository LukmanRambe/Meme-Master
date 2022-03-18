import React from 'react'

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

// Styles
import { Wrapper } from './ScrollToTop.styles'

const ScrollToTop = () => {
	const backToTop = () => {
		window.scrollTo({
			top: 0,
			left: 0
		})
	}

	return (
		<Wrapper onClick={backToTop}>
			<FontAwesomeIcon icon={faArrowCircleUp} className='arrow-up' />
		</Wrapper>
	)
}

export default ScrollToTop
