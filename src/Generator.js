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
		const paragraph = []
		for (let j = 0; j < 40; j++) {
			if (i === 0) {
				paragraph.push(
					'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
				)
				break
			}

			paragraph.push(words[Math.floor(Math.random() * words.length)] + ' ')
		}
		paragraph.push('\n\n')
		sentence.push(paragraph)
	}

	return sentence
}

export default generator
