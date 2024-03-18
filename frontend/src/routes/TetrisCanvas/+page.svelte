<script>
    import {onMount} from 'svelte';
    import {Piece} from './Piece.js';
    import {score} from './Score.js';
    import {level} from './Level.js';

    let canvas;
    const COLS = 11;
    const ROWS = 20;
    const BLOCK_SIZE = 35;

    let score_value;
    let level_value;
    let timeInterval = 1000;

    let clear_lines = 0;

    let leaderBoardList = [];

    let interval;

    let nickname = '';
    let showModal = false;

    score.subscribe(value => score_value = value);
    level.subscribe(value => level_value = value);


    function updateScore(value) {
        score.update(n => n + value);
    }

    function updateLevel(removedLines) {
        clear_lines += removedLines;
        while (clear_lines >= 10) {
            clear_lines -= 10;
            level.update(n => n + 1);
        }
    }





    class Board {
        grid;

        constructor() {
            this.reset();
        }

        reset() {
            this.grid = this.getEmptyBoard();
        }

        removeLines() {
            let linesToRemove = [];
            for (let y = 0; y < ROWS; y++) {
                let isRowFull = this.grid[y].every(value => value.value > 0);
                if (isRowFull) {
                    linesToRemove.push(y);
                }
            }
            linesToRemove.forEach(line => {
                this.grid.splice(line, 1);
                this.grid.unshift(Array(COLS).fill(0));
            });
            let removedLines = linesToRemove.length;
            clear_lines += removedLines;
            if (clear_lines >= 10) {
                console.log("clearLine >= 10");
                updateLevel();
            }
            console.log(level_value + " " + clear_lines);
            return linesToRemove.length * linesToRemove.length * 100;
        }


        getEmptyBoard() {
            return Array.from(
                {length: ROWS}, () => Array(COLS).fill(0)
            );
        }
    }

    let board = new Board();


    function reloadPage() {
        window.location.reload();
    }

    function sendScore(nickname, score) {
        fetch('/api/score', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({nickname: nickname, score: score})
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('점수 제출 실패');
                }
                return response.json();
            })
            .then(data => {
                console.log('점수 제출 성공:', data);
                reloadPage();
            });
    }

    function gameOver() {
        clearInterval(interval);
        showModal = true;

    }

    function submitScore() {
        if (!nickname.trim()) {
            alert('닉네임을 입력해야 점수를 제출할 수 있습니다.');
            return;
        }
        sendScore(nickname, score_value);
        showModal = false;
        nickname = '';
    }


    function stopGame() {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        board.reset();
        if (interval) {
            clearInterval(interval);
        }
        score.set(0);
        level.set(1);
    }

    function play() {
        board.reset();
        score.set(0);
        level.set(1);
        const ctx = canvas.getContext('2d');
        ctx.canvas.width = COLS * BLOCK_SIZE;
        ctx.canvas.height = ROWS * BLOCK_SIZE;
        ctx.scale(BLOCK_SIZE, BLOCK_SIZE);


        let piece = new Piece(ctx);
        if (piece.collision(board)) {
            gameOver();
            return;
        }
        piece.draw();

        function draw() {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            piece.draw();
            drawBoard();
            for (let i = 0; i < 10; i++) {
                if (board.grid[0][i] === 2) {
                    alert('게임오버');
                }
            }

        }

        function drawBoard() {
            board.grid.forEach((row, y) => {
                row.forEach((cell, x) => {
                    if (typeof cell === 'object' && cell.value > 0) {
                        ctx.fillStyle = cell.color;
                        ctx.fillRect(x, y, 1, 1);
                    }
                });
            });
        }

        function update() {
            if (piece.moveDown(board)) {
                piece.lock(board);
                if (board.grid[0].some(cell => cell !== 0)) {
                    gameOver();
                    return;
                }
                piece = new Piece(ctx);
            }
            if (piece.moveDown(board)) {
                piece.lock(board);
                piece = new Piece(ctx);
            }
            const removedLines = board.removeLines();
            if (removedLines > 0) {
            }
            updateScore(removedLines);
            draw();
        }

        function updateGameSpeed() {
            level.subscribe(value => {
                level_value = value;
                timeInterval = Math.max(200, 1000 - (level_value * 100));
                if (interval) clearInterval(interval);
                interval = setInterval(update, timeInterval);
            });
        }


        updateGameSpeed();


        level.subscribe(value => {
            level_value = value;
            updateGameSpeed();
        });

        document.addEventListener('keydown', function (e) {
            switch (e.key) {
                case 'ArrowLeft':
                    piece.moveLeft(board);
                    break;
                case 'ArrowRight':
                    piece.moveRight(board);
                    break;
                case 'ArrowDown':
                    update();
                    break;
                case 'ArrowUp':
                    piece.rotate(board);
                    break;
                case 'Shift':
                    piece.moveBottom(board);
                    update();
                    break;
                case 'Control':
                    piece.reverseRotate(board);
                    break;
                default:
                    break;
            }
            draw();
        });

        if (interval) {
            clearInterval(interval);
        }
        interval = setInterval(update, timeInterval);
    }



    onMount(() => {
        const ctx = canvas.getContext('2d');
        ctx.canvas.width = COLS * BLOCK_SIZE;
        ctx.canvas.height = ROWS * BLOCK_SIZE;
        ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
    })

    onMount(async () => {
        try {
            const response = await fetch('/api/leaderBoard', {method: 'POST'});
            if (!response.ok) {
                throw new Error('리더보드 호출 실패');
            }
            const data = await response.json();
            leaderBoardList = data;
            console.log('리더보드 호출 성공:', data);
        } catch (error) {
            console.error('리더보드 호출 중 오류 발생:', error);
        }
    });
</script>


<div class="board">
    <div class="play-division">
        <canvas bind:this={canvas} class="play-board"></canvas>
    </div>
    <div class="right-division">
        <button on:click={play}>Start</button>
        <button on:click={stopGame}>Stop</button>
        <p>점수: {score_value}</p>
        <p>레벨: {level_value}</p>
        <p>
            ← → : 좌우 이동
            <br/>
            ↑ : 시계 회전
            <br/>
            Ctrl : 반시계 회전
            <br/>
            Shift : 떨어뜨리기
        </p>
    </div>
    <div class="leaderboard-container">
        <table class="leaderboard">
            <thead>
            <tr>
                <th>순위</th>
                <th>닉네임</th>
                <th>점수</th>
            </tr>
            </thead>
            <tbody>
            {#each leaderBoardList as {nickname, score}, index}
                <tr>
                    <td>{index + 1}</td>
                    <td>{nickname}</td>
                    <td>{score}</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
</div>

{#if showModal}
    <div class="modal">
        <input bind:value={nickname} placeholder="닉네임 입력"/>
        <button on:click={submitScore}>점수 제출</button>
    </div>
{/if}

<style>
    .board {
        display: flex;
        justify-content: center;
        gap: 20px;
        padding: 20px;
        align-items: start;
    }

    .play-division, .right-division {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .play-board {
        border: solid 2px #444;
        background-color: #f0f0f0;
    }

    button {
        padding: 10px 20px;
        font-size: 16px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background-color: #007bff;
        color: white;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #0056b3;
    }

    p {
        margin: 0;
        padding: 10px;
        background-color: #f8f9fa;
        border: 1px solid #ddd;
        border-radius: 5px;
    }

    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        z-index: 1000;
    }

    .leaderboard {
        margin-top: 20px;
        border-collapse: collapse;
        width: 100%;
    }

    .leaderboard th, .leaderboard td {
        border: 1px solid #ddd;
        padding: 8px;
    }

    .leaderboard th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #04AA6D;
        color: white;
    }

    .leaderboard tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    .leaderboard tr:hover {
        background-color: #ddd;
    }

</style>

