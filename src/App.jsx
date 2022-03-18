import React, { useEffect, useState } from 'react'

// Components
import Navbar from './components/Navbar'
import MemeTemplates from './components/MemeTemplates'
import Meme from './components/Meme'
import ScrollToTop from './components/ScrollToTop'

// Styles
import GlobalStyle from './GlobalStyle'

const App = () => {
	const [allMemes, setAllMemes] = useState([])
	const [meme, setMeme] = useState(null)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		getMemes('https://api.imgflip.com/get_memes')
		window.addEventListener('scroll', toggleVisible)
	}, [])

	const getMemes = async url => {
		try {
			const res = await fetch(url)
			const json = await res.json()
			const memesData = json.data.memes

			setAllMemes(memesData)
		} catch (e) {
			console.error(e)
		}
	}

	const toggleVisible = () => {
		if (window.pageYOffset > 450) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	return (
		<>
			<Navbar />
			{meme === null ? (
				<MemeTemplates allMemes={allMemes} setMeme={setMeme} />
			) : (
				<Meme meme={meme} setMeme={setMeme} />
			)}
			{isVisible && <ScrollToTop />}
			<GlobalStyle />
		</>
	)
}

export default App
