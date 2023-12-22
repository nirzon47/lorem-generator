const Button = ({ name, twclass, onClick }) => {
	return (
		<button
			className={`rounded-md duration-150 py-1 px-2 mb-2 font-bold ${twclass} text-white`}
			onClick={onClick}
		>
			{name}
		</button>
	)
}
export default Button
