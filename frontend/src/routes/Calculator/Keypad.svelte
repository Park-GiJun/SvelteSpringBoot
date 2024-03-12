<script>
	import { onDestroy, onMount } from 'svelte';
	import { count } from './input.js';
	import { get } from 'svelte/store';
	import { answer } from './answer.js';

	const numbers = Array.from({length: 9}, (_, i) => i + 1);

	let display = answer;
	function addNum(value) {
		count.update(n => n + value);
	}
	function backSpace() {
		const line = get(count);

		if (line.charAt(line.length - 1) === " ") {
			count.set(line.toString().slice(0, -2));
		} else {
			count.set(line.toString().slice(0, -1));
		}
	}

	function reset(){
		count.set("");
		answer.set('');
	}

	function calculate(){
		const storeValue = get(count);

		let result = storeValue.split(' ');
		console.log(result);

		let answer = 0;
		for (let i = 0; i < result.length; i++) {
			if (result[i] === '*') {
				answer = parseFloat(result[i - 1]) * parseFloat(result[i + 1]);
				result.splice(i - 1, 3, answer.toString());
				i = 0;
			} else if (result[i] === '/') {
				answer = parseFloat(result[i - 1]) / parseFloat(result[i + 1]);
				result.splice(i - 1, 3, answer.toString());
				i = 0;
			}
		}
		while (result.length > 1) {
			for (let i = 0; i < result.length; i++) {
				if (result[i] === '+') {
					answer = parseFloat(result[i - 1]) + parseFloat(result[i + 1]);
					result.splice(i - 1, 3, answer.toString());
					break;
				} else if (result[i] === '-') {
					answer = parseFloat(result[i - 1]) - parseFloat(result[i + 1]);
					result.splice(i - 1, 3, answer.toString());
					break;
				}
			}
		}
		if (answer.toString().length > 16) {
			answer = answer.toString().substring(0, 15);
			display.set(answer.toString());
		} else {
			display.set(answer.toString());
		}
	}

	function handleKeydown(event) {
		const key = event.key;
		console.log("key : " + key);
		const count_value = get(count);

		switch (key) {
			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
				addNum(parseInt(key, 10));
				break;
			case '.':
				const check = count_value.charAt(count_value.length - 1);
				console.log('check : ' + check);
				if (check === ' ' || count_value === '') {
					addNum("0.");
				} else if (check === '.') {
					addNum("");
				} else {
					addNum(".");
				}
				break;
			case 'Backspace':
				backSpace();
				break;
			case 'Enter':
			case '=':
				calculate();
				break;
			case 'Delete':
				reset();
				break;
			default:
				console.log("Invalid key");
				break;
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
	});

	onDestroy(() => {
		window.removeEventListener('keydown', handleKeydown);
	});
</script>

<div class="keypad">
	{#each numbers as number}
			<button on:click={() => addNum(number)}>{number}</button>
	{/each}
	<button on:click={() => addNum(".")}>.</button>
	<button on:click={() => addNum(0)}>0</button>
	<button on:click={reset}>C</button>
	<button class="equalBtn" on:click={calculate}>=</button>
</div>


<style>
    .keypad {
        display: grid;
        grid-template-columns: repeat(3, 6em);
        grid-template-rows: repeat(4, 6em);
        grid-gap: 0.5em;
    }

    button {
        margin: 5px;
				width: 6em;
				height: 6em;
    }

    .equalBtn{
				margin: 5px;
				width: 25.5em;
				height: 6em;
		}
</style>
