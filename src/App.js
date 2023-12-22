import Inputs from './Inputs'

const App = () => {
	return (
		<div className='min-h-screen w-screen bg-green-50 p-12'>
			<h1 className='text-3xl font-bold mb-8 text-center'>Lorem Generator</h1>
			<div className='flex gap-4 items-center flex-col'>
				<p className='text-lg'>Enter the number of paragraphs you want</p>
				<Inputs />
				<button className='bg-blue-400 rounded-md hover:bg-blue-500 duration-150 py-1 px-2 mb-8 font-bold'>
					Generate
				</button>
			</div>
		</div>
	)
}
export default App
