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

	getMovablePositions(allUnits) {
		switch (this.grade) {
			case 'Queen':
				return this.getMovablePositionsForQueen(allUnits);
			case 'King':
				return this.getMovablePositionsForKing(allUnits);
			case 'Bishop':
				return this.getMovablePositionsForBishop(allUnits);
			case 'Rook':
				return this.getMovablePositionsForRook(allUnits);
			case 'Knight':
				return this.getMovablePositionsForKnight(allUnits);
			case 'Pawn':
				return this.getMovablePositionsForPawn(allUnits);
			default:
				return [];
		}
	}

	getMovablePositionsForQueen(allUnits) {
		return this.getMovablePositionsInDirections(allUnits, this.directionsForQueenAndKing());
	}

	getMovablePositionsForKing(allUnits) {
		return this.getMovablePositionsInDirections(allUnits, this.directionsForQueenAndKing(), 1);
	}

	getMovablePositionsForBishop(allUnits) {
		return this.getMovablePositionsInDirections(allUnits, this.directionsForBishop());
	}

	getMovablePositionsForRook(allUnits) {
		return this.getMovablePositionsInDirections(allUnits, this.directionsForRook());
	}

	getMovablePositionsForKnight(allUnits) {
		return this.getMovablePositionsInDirections(allUnits, this.directionsForKnight(), 1);
	}

	getMovablePositionsForPawn(allUnits) {
		let positions = [];
		let direction = this.color === 'Black' ? 1 : -1;
		let startRow = this.color === 'Black' ? 1 : 6;

		let firstMovePosition = { x: this.position.x, y: this.position.y + direction };
		if (this.isPositionValidAndUnoccupied(firstMovePosition.x, firstMovePosition.y, allUnits)) {
			positions.push(firstMovePosition);

			if (this.position.y === startRow) {
				let secondMovePosition = { x: this.position.x, y: this.position.y + (2 * direction) };
				if (this.isPositionValidAndUnoccupied(secondMovePosition.x, secondMovePosition.y, allUnits)) {
					positions.push(secondMovePosition);
				}
			}
		}
		return positions;
	}


	getMovablePositionsInDirections(allUnits, directions, maxSteps = 8) {
		let positions = [];
		directions.forEach(direction => {
			for (let step = 1; step <= maxSteps; step++) {
				let newX = this.position.x + direction.dx * step;
				let newY = this.position.y + direction.dy * step;
				if (!this.isPositionValidAndUnoccupied(newX, newY, allUnits)) break;
				positions.push({ x: newX, y: newY });
			}
		});
		return positions;
	}

	isPositionValidAndUnoccupied(x, y, allUnits) {
		return x >= 0 && x < 8 && y >= 0 && y < 8 && !allUnits.some(unit => unit.position.x === x && unit.position.y === y);
	}

	directionsForQueenAndKing() {
		return [{ dx: 1, dy: 0 }, { dx: -1, dy: 0 }, { dx: 0, dy: 1 }, { dx: 0, dy: -1 }, { dx: 1, dy: 1 }, {
			dx: 1,
			dy: -1
		}, { dx: -1, dy: 1 }, { dx: -1, dy: -1 }];
	}

	directionsForBishop() {
		return [{ dx: 1, dy: 1 }, { dx: 1, dy: -1 }, { dx: -1, dy: 1 }, { dx: -1, dy: -1 }];
	}

	directionsForRook() {
		return [{ dx: 1, dy: 0 }, { dx: -1, dy: 0 }, { dx: 0, dy: 1 }, { dx: 0, dy: -1 }];
	}

	directionsForKnight() {
		return [{ dx: 1, dy: 2 }, { dx: -1, dy: 2 }, { dx: 1, dy: -2 }, { dx: -1, dy: -2 }, { dx: -2, dy: 1 }, {
			dx: -2,
			dy: -1
		}, { dx: 2, dy: 1 }, { dx: 2, dy: -1 }];
	}
}
export { ChessUnit };
