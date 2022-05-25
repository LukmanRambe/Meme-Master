import React, { useEffect, useState } from 'react'

// React Router
import { useNavigate, useParams } from 'react-router-dom'

// Styles
import {
	Wrapper,
	Content,
	Form,
	Button,
	Inputs,
	MemeWrapper,
	MemeImage,
	ButtonsWrapper
} from './Meme.styles'

const Meme = ({ meme, setMeme }) => {
	const { id } = useParams()
	const [memeData, setMemeData] = useState({
		template_id: id,
		username: 'Rambe',
		password: 'MemeGenerated',
		values: []
	})
	const navigate = useNavigate()

	let url = `https://api.imgflip.com/caption_image?template_id=${memeData.template_id}&username=${memeData.username}&password=${memeData.password}`
	memeData.values.map(
		(items, index) => (url += `&boxes[${index}][text]=${items.text}`)
	)

	const generateMeme = async e => {
		e.preventDefault()

		try {
			const res = await fetch(url, { method: 'POST' })
			const json = await res.json()

			setMeme({ ...meme, url: json.data.url })
		} catch (e) {
			alert('Fill out the captions input')
		}
	}

	const inputs = [...Array(meme.box_count)].map((item, index) => {
		const handleChange = e => {
			let newValues = memeData.values
			newValues[index] = { text: e.target.value }
			setMemeData(prevState => {
				return {
					...prevState,
					values: newValues
				}
			})
		}

		return (
			<input
				key={index}
				name={`input${index}`}
				placeholder={`Caption ${index + 1}`}
				onChange={handleChange}
				value={memeData.values.text}
			/>
		)
	})

	const downloadImage = async imageSrc => {
		const image = await fetch(imageSrc)
		const imageBlob = await image.blob()
		const imageUrl = URL.createObjectURL(imageBlob)

		const link = document.createElement('a')
		link.href = imageUrl
		link.download = meme.name
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}

	const backToHome = () => {
		setMeme(null)
		navigate('/')
	}

	return (
		<Wrapper>
			<Content>
				<h4>{meme.name}</h4>
				<MemeWrapper>
					<MemeImage src={meme.url} />
				</MemeWrapper>
				<Form onSubmit={e => e.preventDefault()}>
					<Inputs className='inputs'>{inputs}</Inputs>
					<ButtonsWrapper>
						<Button type='button' onClick={backToHome}>
							Get a new meme template
						</Button>
						<Button type='submit' onClick={generateMeme}>
							Generate Meme
						</Button>
						<Button type='submit' onClick={() => downloadImage(meme.url)}>
							Download Meme
						</Button>
					</ButtonsWrapper>
				</Form>
			</Content>
		</Wrapper>
	)
}

export default Meme
