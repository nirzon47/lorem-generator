const generator = (limit) => {
	const words = [
		'lorem',
		'ipsum',
		'dolor',
		'sit',
		'amet',
		'consectetur',
		'adipiscing',
		'elit',
		'sed',
		'do',
		'eiusmod',
		'tempor',
		'incididunt',
		'ut',
		'labore',
		'et',
		'dolore',
		'magna',
		'aliqua',
		'ut',
		'enim',
		'ad',
		'minim',
		'veniam',
		'quis',
		'nostrud',
		'exercitation',
		'ullamco',
		'laboris',
		'nisi',
		'ut',
		'aliquip',
		'ex',
		'ea',
		'commodo',
		'consequat',
		'duis',
		'aute',
		'irure',
		'dolor',
		'in',
		'reprehenderit',
		'in',
		'voluptate',
		'velit',
		'esse',
		'cillum',
		'dolore',
		'eu',
		'fugiat',
		'nulla',
		'pariatur',
		'excepteur',
		'sint',
		'occaecat',
		'cupidatat',
		'non',
		'proident',
		'sunt',
		'in',
		'culpa',
		'qui',
		'officia',
		'deserunt',
		'mollit',
		'anim',
		'id',
		'est',
		'laborum',
	]

	const sentence = []

	for (let i = 0; i < limit; i++) {
		for (let j = 0; j < 40; j++) {
			if (i === 0) {
				sentence.push(
					'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
				)
				break
			}

			sentence.push(words[Math.floor(Math.random() * words.length)] + ' ')
		}
		sentence.push('\n \n')
	}

	return sentence.join('')
}

console.log(generator(10))

export default generator
