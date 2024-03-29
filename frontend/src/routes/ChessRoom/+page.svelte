<script>
	import { nickName } from '../Chess/NickName.js';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let rooms =[];

	let nickNameValue;

	nickName.subscribe(value => nickNameValue = value);

	onMount(async () => {
		const response = await fetch('/api/roomLists');
		rooms =[]
		rooms = await response.json();
	});


	function enterRoom(roomId) {
		goto(`/ChessBoard?roomId=${roomId}`);
	}

	function createRoom() {
		fetch(`/api/createRoom?nickName=${nickNameValue}`, {
			method: 'GET'
		})
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok.');
				}
				return response.json();
			})
			.then(data => {
				rooms = data;
			})
	}

</script>

<h2>Room</h2>
<p>Hello, {$nickName}</p>
<a href="/ChessBoard">체스</a>
<div class="roomsDiv">
	{#if rooms.length > 0}
		{#each rooms as room}
			<div id="{room.id}" class="roomDiv">
				<p>{room.whitePlayer}</p>
				<p>{room.blackPlayer}</p>
				<button on:click={()=> enterRoom(room.id)}>{room.id}입장</button>
			</div>
		{/each}
	{:else }
		<p>정보가 없습니다.</p>
	{/if}
</div>
<button on:click={createRoom}>방 만들기</button>



<style>
    .roomsDiv {
        display: grid;
        grid-template-columns: repeat(5, minmax(100px, 1fr));
        grid-gap: 10px;
				margin-bottom: 10px;
    }

    .roomDiv {
        border: 1px solid black;
        border-radius: 5px;
				text-align: center;
    }

		.roomDiv button {
        width: 100%;
    }
</style>

