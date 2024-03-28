<script>
	import { nickName } from '../Chess/NickName.js';
	import { onMount } from 'svelte';

	let rooms;
	onMount(async () => {
		const response = await fetch('/api/getChessRoomList');
		rooms = await response.json();
	});


	function enterRoom(roomId) {
		fetch('/api/enterRoom/{$roomId}', {
			method: 'GET'
		});
	}

	function createRoom(){
		fetch('api/createRoom',{
			method:'GET'
		})
	}
</script>

<h2>Room</h2>
<p>Hello, {$nickName}</p>
<a href="/ChessBoard">체스</a>
<!--{#if rooms.length < 1 || rooms === null}-->
<!--	<p>정보가 없습니다.</p>-->
<!--{:else }-->
<!--	{#each rooms as room}-->
<!--		<div id="{room.id}">-->
<!--			<p>{room.whitePlayer}</p>-->
<!--			<p>{room.blackPlayer}</p>-->
<!--			<button>입장</button>-->
<!--		</div>-->
<!--	{/each}-->
<!--{/if}-->

<div class="roomsDiv">
	<div class="roomDiv">
		<p>Black : aaa</p>
		<p>White : bbb</p>
		<button>입장</button>
	</div>
	<div class="roomDiv">
		<p>Black : aaa</p>
		<p>White : bbb</p>
		<button>입장</button>
	</div>
	<div class="roomDiv">
		<p>Black : aaa</p>
		<p>White : bbb</p>
		<button>입장</button>
	</div>
</div>

<button>방 만들기</button>



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

