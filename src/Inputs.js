const Inputs = () => {
	const increaseValue = () => {
		const inputButtonElement = document.getElementById('number-input')

		if (inputButtonElement.value >= 100) {
			return
		}

		inputButtonElement.value = Number(inputButtonElement.value) + 1
	}
	const decreaseValue = () => {
		const inputButtonElement = document.getElementById('number-input')

		if (inputButtonElement.value <= 1) {
			return
		}

		inputButtonElement.value = Number(inputButtonElement.value) - 1
	}
	const checkInput = () => {
		const inputButtonElement = document.getElementById('number-input')
		if (inputButtonElement.value > 100) {
			inputButtonElement.value = 100
		}
		if (inputButtonElement.value < 1) {
			inputButtonElement.value = 1
		}
	}

	return (
		<div className='flex gap-4 items-center mb-4'>
			<button
				className='bg-red-400 w-8 rounded-md hover:bg-red-500 duration-150 p-1'
				onClick={decreaseValue}
			>
				-
			</button>
			<input
				type='number'
				inputMode='numeric'
				min='1'
				className='w-16 rounded-md outline p-1 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
				defaultValue={1}
				id='number-input'
				onInput={checkInput}
			/>
			<button
				className='bg-green-400 w-8 rounded-md hover:bg-green-500 duration-150 p-1'
				onClick={increaseValue}
			>
				+
			</button>
		</div>
	)
}

export default Inputs
