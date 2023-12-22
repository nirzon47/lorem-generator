import Inputs from './Inputs'
import generator from './Generator'
import { useState } from 'react'

const App = () => {
	const [loremText, setLoremText] = useState('')
	const generateLorem = () => {
		const sentence = generator(document.getElementById('number-input').value)

		setLoremText(sentence)
	}

	return (
		<div className='min-h-screen w-screen bg-green-50 p-12'>
			<h1 className='text-3xl font-bold mb-8 text-center'>Lorem Generator</h1>
			<div className='flex gap-4 items-center flex-col'>
				<p className='text-lg'>Enter the number of paragraphs you want</p>
				<Inputs />
				<button
					className='bg-blue-400 rounded-md hover:bg-blue-500 duration-150 py-1 px-2 mb-8 font-bold'
					onClick={generateLorem}
				>
					Generate
				</button>
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
