import React from 'react'

// Styles
import { Wrapper, Content, Template } from './MemeTemplates.styles'

const MemeTemplates = ({ allMemes, setMeme }) => {
	const memes = allMemes.map(meme => {
		return (
			<React.Fragment key={meme.id}>
				<Template key={meme.id} boxCount={meme.box_count} onClick={() => setMeme(meme)}>
					<div className='imgWrapper'>
						<img src={meme.url} alt={meme.name} />
					</div>
					<div className='memeName'>
						<h4>{meme.name}</h4>
					</div>
				</Template>
			</React.Fragment>
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
