import Inputs from './Inputs'
import generator from './Generator'

import { useState } from 'react'
import Button from './Button'

const App = () => {
	const [loremText, setLoremText] = useState('')
	const generateLorem = () => {
		const sentence = generator(document.getElementById('number-input').value)

		setLoremText(sentence)
	}

	const copyToClipboard = () => {
		navigator.clipboard.writeText(document.getElementById('lorem').textContent)
		alert('Copied to clipboard!')
	}

	return (
		<div className='min-h-screen w-screen bg-green-50 p-12'>
			<h1 className='text-3xl font-bold mb-8 text-center'>Lorem Generator</h1>
			<div className='flex gap-4 items-center flex-col justify-center'>
				<p className='text-lg text-center'>
					Enter the number of paragraphs you want
				</p>
				<Inputs />
				<div className='flex gap-4 mb-8'>
					<Button
						name='Generate'
						twclass='bg-blue-400 hover:bg-blue-500'
						onClick={generateLorem}
					/>
					<Button
						name='Copy to Clipboard'
						twclass='bg-pink-400 hover:bg-pink-500'
						onClick={copyToClipboard}
					/>
				</div>
			</div>
			<div
				className='text-lg w-11/12 md:w-4/6 lg:w-1/2 mx-auto whitespace-pre-wrap'
				id='lorem'
			>
				{loremText}
			</div>
		</div>
	)
}
export default App
