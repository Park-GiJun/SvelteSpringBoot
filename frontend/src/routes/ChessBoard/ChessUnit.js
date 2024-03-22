class ChessUnit {
	constructor(color, grade, svg, position) {
		this.color = color;
		this.grade = grade;
		this.svg = svg;
		this.position = position;
	}

	getSvgBlob() {
		return new Blob([this.svg], { type: 'image/svg+xml;charset=utf-8' });
	}

	units = [
		new ChessUnit('Black', 'King', `
<svg height="100" viewBox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg">
	<rect fill="black" height="30" width="10" x="45" y="10" />
	<rect fill="black" height="50" width="30" x="35" y="40" />
	<circle cx="50" cy="70" fill="black" r="5" />
</svg>`, { x: 4, y: 0 })
	];
}

export { ChessUnit };