<script>

 async function getSign(){
	 console.log('접근11');
	const response = await fetch('/test/getSign');
	const data = await response.json();
	console.log(data);
}
</script>
<button on:click={getSign}>확인</button>