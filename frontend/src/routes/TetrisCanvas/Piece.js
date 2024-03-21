const COLS = 11;
const ROWS = 25;

class Piece {
	x;
	y;
	color;
	shape;
	ctx;
	ctx2;
	BLOCKS = [[[0, 2, 0, 0], [0, 2, 0, 0], [0, 2, 0, 0], [0, 2, 0, 0]], [[0, 2, 0], [2, 2, 2], [0, 0, 0]], [[0, 2, 0], [0, 2, 0], [0, 2, 2]], [[0, 2, 0], [0, 2, 0], [2, 2, 0]], [[2, 2], [2, 2]], [[2, 2, 0], [0, 2, 2], [0, 0, 0]], [[0, 2, 2], [2, 2, 0], [0, 0, 0]]];

	COLORS = ['cyan', 'blue', 'orange', 'yellow', 'green', 'purple', 'red'];

	nextPiece = null;

	constructor(ctx, ctx2) {
		this.ctx = ctx;
		this.ctx2 = ctx2;
		this.spawn();
	}

	randomizeType(noOfTypes) {
		return Math.floor(Math.random() * noOfTypes);
	}

	spawn() {
		const typeId = this.randomizeType((this.COLORS.length));
		this.color = (this.COLORS)[typeId];
		this.shape = (this.BLOCKS)[typeId];

		this.x = 4;
		this.y = 0;
	}

	spawnNextBlock() {
		const typeId = this.randomizeType((this.COLORS.length));
		this.color = (this.COLORS)[typeId];
		this.shape = (this.BLOCKS)[typeId];

		this.x = 4;
		this.y = 1;
	}

	drawNextBlock(context) {
		context.clearRect(0, 0, context.canvas.width, context.canvas.height);
		context.fillStyle = this.color;
		this.shape.forEach((row, y) => {
			row.forEach((value, x) => {
				if (value > 0) {
					context.fillRect(x, y, 1, 1);
				}
			});
		});
	}


	draw() {
		this.ctx.fillStyle = this.color;
		this.shape.forEach((row, y) => {
			row.forEach((value, x) => {
				if (value > 0) {
					this.ctx.fillRect(this.x + x, this.y + y, 1, 1);

					this.ctx.strokeStyle = 'BLACK';
					this.ctx.lineWidth = 0.009;
					this.ctx.zIndex = 10;

					for (let gx = 0; gx < 1; gx += 1) {
						for (let gy = 0; gy < 1; gy += 1) {
							this.ctx.strokeRect(this.x + x + gx, this.y + y + gy, 1, 1);
						}
					}
				}
			});
		});
	}

	collision(board) {
		for (let y = 0; y < this.shape.length; y++) {
			for (let x = 0; x < this.shape[y].length; x++) {
				if (this.shape[y][x] > 0) {
					let newX = this.x + x;
					let newY = this.y + y;

					if (newX < 0 || newX >= COLS || newY >= ROWS) {
						return true;
					}

					if (newY < ROWS) {
						let cell = board.grid[newY][newX];
						if (cell !== 0 && (typeof cell === 'object' ? cell.value : cell) > 0) {
							return true;
						}
					}
				}
			}
		}
		return false;
	}

	moveLeft(board) {
		this.x--;
		if (this.collision(board)) {
			this.x++;
		}
	}

	moveRight(board) {
		this.x++;
		if (this.collision(board)) {
			this.x--;
		}
	}

	moveDown(board) {
		this.y++;
		if (this.collision(board)) {
			this.y--;
			return true;
		}
		return false;
	}

	moveBottom(board) {
		while (!this.collision(board)) {
			this.y++;
		}
		this.y--;
		return true;
	}

	rotate(board) {
		let newShape = this.shape.map(row => [...row]);
		let n = newShape.length;
		for (let y = 0; y < n; y++) {
			for (let x = 0; x < y; x++) {
				[newShape[x][y], newShape[y][x]] = [newShape[y][x], newShape[x][y]];
			}
		}
		newShape.forEach(row => row.reverse());

		let originalX = this.x;
		let originalY = this.y;
		this.shape = newShape;

		if (this.collision(board)) {
			let kicked = false;
			for (let i = -1; i <= 1; i++) {
				this.x += i;
				if (!this.collision(board)) {
					kicked = true;
					break;
				}
				this.x = originalX;
			}
			if (!kicked) {
				this.shape = this.shape.map(row => [...row]).reverse().map(row => row.reverse());
				for (let y = 0; y < n; y++) {
					for (let x = 0; x < n / 2; x++) {
						[this.shape[y][x], this.shape[y][n - 1 - x]] = [this.shape[y][n - 1 - x], this.shape[y][x]];
					}
				}
				this.x = originalX;
				this.y = originalY;
			}
		}
	}

	reverseRotate(board) {
		let newShape = this.shape.map(row => [...row]);
		let n = newShape.length;
		newShape.forEach(row => row.reverse());
		for (let y = 0; y < n; y++) {
			for (let x = 0; x < y; x++) {
				[newShape[x][y], newShape[y][x]] = [newShape[y][x], newShape[x][y]];
			}
		}

		let originalX = this.x;
		let originalY = this.y;
		this.shape = newShape;

		if (this.collision(board)) {
			let kicked = false;
			for (let i = -1; i <= 1; i++) {
				this.x += i;
				if (!this.collision(board)) {
					kicked = true;
					break;
				}
				this.x = originalX;
			}
			if (!kicked) {
				this.shape.forEach(row => row.reverse());
				for (let y = 0; y < n; y++) {
					for (let x = 0; x < y; x++) {
						[this.shape[x][y], this.shape[y][x]] = [this.shape[y][x], this.shape[x][y]];
					}
				}
				this.shape.forEach(row => row.reverse());

				this.x = originalX;
				this.y = originalY;
			}
		}
	}

	lock(board) {
		this.shape.forEach((row, y) => {
			row.forEach((value, x) => {
				if (value > 0) {
					board.grid[this.y + y][this.x + x] = { value: value, color: this.color };
				}
			});
		});
	}
}

export { Piece };

