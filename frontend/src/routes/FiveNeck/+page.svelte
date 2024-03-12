<script>
	let cols = Array.from({ length: 8 }, (_, i) => i);
	let rows = Array.from({ length: 8 }, (_, i) => i);

	function colorChange(x, y) {

	}
</script>

<table class="table">
	{#each rows as row}
		<tr>
			{#each cols as col}
				<td on:click={() => colorChange({row},{col})}></td>
			{/each}
		</tr>
	{/each}
</table>

<style>
    .table tr, td {
        border: 1px solid black;
        border-collapse: collapse;
        margin: 0;
        padding: 5px;
        width: 50px;
        height: 50px;
        background: bisque;
    }
</style>
