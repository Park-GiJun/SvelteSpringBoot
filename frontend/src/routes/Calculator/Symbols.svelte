<script>
import {count} from './input.js';
import {onDestroy, onMount} from "svelte";

	function addArithmetic(value) {
		count.update(n => n + ' ' + value + ' ');
	}

	const symbols = ['+', '-', '*', '/']

	function handleKeydown(event) {
		const key = event.key;
		if (symbols.includes(key)) {
			addArithmetic(key);
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
	});

	onDestroy(() => {
		window.removeEventListener('keydown', handleKeydown);
	});
</script>

<div class="symbols">
	{#each symbols as symbol}
			<button on:click={() => addArithmetic(symbol)}>{symbol}</button>
	{/each}
</div>



<style>
    .symbols {
        display: grid;
        grid-template-columns: repeat(1, 6em);
        grid-template-rows: repeat(3, 6em);
        grid-gap: 0.5em;
    }

    button {
        margin: 5px;
        width: 6em;
        height: 6em;
    }
</style>