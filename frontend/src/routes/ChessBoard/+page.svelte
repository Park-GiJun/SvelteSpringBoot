<script>
	import { onMount } from 'svelte';
	import { nickName } from '../Chess/NickName.js';

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

	let units = [
		new ChessUnit('Center','Black', 'King', `
<svg height="100" viewBox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg">
	<rect fill="black" height="30" width="10" x="45" y="10" />
	<rect fill="black" height="50" width="30" x="35" y="40" />
	<circle cx="50" cy="70" fill="black" r="5" />
</svg>`, { x: 4, y: 0 }),
		new ChessUnit('Center','Black', 'Queen', `
<svg height="100" viewBox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg">
	<circle cx="50" cy="20" fill="black" r="10" />
	<path d="M 40,30 A 10,10 0 0,0 60,30 Q 60,50 50,60 Q 40,50 40,30" fill="black" />
	<rect fill="black" height="30" width="30" x="35" y="60" />
</svg>`, { x: 3, y: 0 })
	];

	function drawChessboard() {
		const canvas = document.getElementById('chessboard');
		if (canvas.getContext) {
			const ctx = canvas.getContext('2d');
			let width = canvas.width;
			let tileSize = width / 8;

			for (let row = 0; row < 8; row++) {
				for (let col = 0; col < 8; col++) {
					ctx.fillStyle = (row + col) % 2 === 0 ? 'WHITE' : 'GRAY';
					ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
				}
			}

			units.forEach(unit => {
				const url = URL.createObjectURL(unit.getSvgBlob());
				const image = new Image();
				image.onload = function() {
					ctx.drawImage(image, unit.position.x * tileSize, unit.position.y * tileSize, tileSize, tileSize);
					URL.revokeObjectURL(url);
				};
				image.src = url;
			});
		}
	}

	onMount(drawChessboard);
</script>

<p>{$nickName}</p>
<canvas height="600" id="chessboard" width="600"></canvas>
