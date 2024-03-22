class ChessUnit {
	constructor(side, color, grade, svg, position) {
		this.side = side;
		this.color = color;
		this.grade = grade;
		this.svg = svg;
		this.position = position;
	}

	getSvgBlob() {
		return new Blob([this.svg], { type: 'image/svg+xml;charset=utf-8' });
	}
}

export { ChessUnit };