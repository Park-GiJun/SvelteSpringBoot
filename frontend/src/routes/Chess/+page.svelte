<script>
	import {nickName} from './NickName.js';
	import { goto } from '$app/navigation';

	let userInput = '';

	async function startGame() {
		nickName.set(userInput);
		console.log($nickName);
		await goto('/ChessRoom');
	}
</script>


<h2>Chess</h2>
<p>Set NickName</p>
<input bind:value={userInput} id="userNickname" type="text">
<button on:click={startGame}>시작하기</button>
