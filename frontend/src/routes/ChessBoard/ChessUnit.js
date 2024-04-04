class ChessUnit {
	constructor(side, color, grade, svg, position) {
		this.side = side;
		this.color = color;
		this.grade = grade;
		this.svg = svg;
		this.position = position;
	}

	deadUnits = null;
	getSvgBlob() {
		return new Blob([this.svg], { type: 'image/svg+xml;charset=utf-8' });
	}

	getMovablePositions(myUnits) {
		switch (this.grade) {
			case 'Queen':
				return this.getMovablePositionsForQueen(myUnits);
			case 'King':
				return this.getMovablePositionsForKing(myUnits);
			case 'Bishop':
				return this.getMovablePositionsForBishop(myUnits);
			case 'Rook':
				return this.getMovablePositionsForRook(myUnits);
			case 'Knight':
				return this.getMovablePositionsForKnight(myUnits);
			case 'Pawn':
				return this.getMovablePositionsForPawn(myUnits);
			default:
				return [];
		}
	}

	getKillablePositions(myUnits, oppositeUnits) {
		let killablePositions = [];
		this.getMovablePositions(myUnits).forEach(pos => {
			if (oppositeUnits.some(unit => unit.position.x === pos.x && unit.position.y === pos.y)) {
				killablePositions.push(pos);
			}
		});

		if (this.grade === 'Pawn') {
			let direction = this.color === 'Black' ? 1 : -1;
			let diagonalPositions = [
				{ x: this.position.x + 1, y: this.position.y + direction },
				{ x: this.position.x - 1, y: this.position.y + direction }
			];

			diagonalPositions.forEach(diagonalPos => {
				if (oppositeUnits.some(unit => unit.position.x === diagonalPos.x && unit.position.y === diagonalPos.y)) {
					killablePositions.push(diagonalPos);
				}
			});
		}
		return killablePositions;
	}


	getMovablePositionsForQueen(myUnits) {
		return this.getMovablePositionsInDirections(myUnits, this.directionsForQueenAndKing());
	}
	getMovablePositionsForKing(myUnits) {
		return this.getMovablePositionsInDirections(myUnits, this.directionsForQueenAndKing(), 1);
	}

	getMovablePositionsForBishop(myUnits) {
		return this.getMovablePositionsInDirections(myUnits, this.directionsForBishop());
	}

	getMovablePositionsForRook(myUnits) {
		return this.getMovablePositionsInDirections(myUnits, this.directionsForRook());
	}

	getMovablePositionsForKnight(myUnits) {
		return this.getMovablePositionsInDirections(myUnits, this.directionsForKnight(), 1);
	}

	getMovablePositionsForPawn(myUnits) {
		let positions = [];
		let direction = this.color === 'Black' ? 1 : -1;
		let startRow = this.color === 'Black' ? 1 : 6;

		let firstMovePosition = { x: this.position.x, y: this.position.y + direction };
		if (this.isPositionValidAndUnoccupied(firstMovePosition.x, firstMovePosition.y, myUnits)) {
			positions.push(firstMovePosition);

			if (this.position.y === startRow) {
				let secondMovePosition = { x: this.position.x, y: this.position.y + (2 * direction) };
				if (this.isPositionValidAndUnoccupied(secondMovePosition.x, secondMovePosition.y, myUnits)) {
					positions.push(secondMovePosition);
				}
			}
		}
		return positions;
	}


	getMovablePositionsInDirections(myUnits, directions, maxSteps = 8) {
		let positions = [];
		directions.forEach(direction => {
			for (let step = 1; step <= maxSteps; step++) {
				let newX = this.position.x + direction.dx * step;
				let newY = this.position.y + direction.dy * step;
				if (!this.isPositionValidAndUnoccupied(newX, newY, myUnits)) {
					break;
				}
				positions.push({ x: newX, y: newY });
			}
		});
		return positions;
	}

	isPositionValidAndUnoccupied(x, y, myUnits) {
		return x >= 0 && x < 8 && y >= 0 && y < 8 && !myUnits.some(unit => unit.position.x === x && unit.position.y === y);
	}

	directionsForQueenAndKing() {
		return [{ dx: 1, dy: 0 }, { dx: -1, dy: 0 }, { dx: 0, dy: 1 }, { dx: 0, dy: -1 }, { dx: 1, dy: 1 }, {
			dx: 1, dy: -1
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
			dx: -2, dy: -1
		}, { dx: 2, dy: 1 }, { dx: 2, dy: -1 }];
	}
}

export { ChessUnit };
