import React from 'react'

// React Router
import { Link } from 'react-router-dom'

// Styles
import { Wrapper, Content, Template } from './MemeTemplates.styles'

const MemeTemplates = ({ allMemes, setMeme }) => {
	const memes = allMemes.map(meme => {
		return (
			<Template key={meme.id}>
				<Link to={`/meme/${meme.id}`} onClick={() => setMeme(meme)}>
					<div className='imgWrapper'>
						<img src={meme.url} alt={meme.name} />
					</div>
					<div className='memeName'>
						<h4>{meme.name}</h4>
					</div>
				</Link>
			</Template>
		)
	})

	return (
		<Wrapper>
			<h1>Pick Your Meme Template</h1>
			<Content>{memes}</Content>
		</Wrapper>
	)
}

export default MemeTemplates
