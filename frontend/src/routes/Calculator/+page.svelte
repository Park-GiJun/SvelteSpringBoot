<script>
	import Keypad from './Keypad.svelte';
	import Symbols from './Symbols.svelte';
	import {count} from './input.js';
	import {answer} from './answer.js';

	let count_value;
	let answer_value;

	count.subscribe((value => {
		count_value  = value;
	}));

	answer.subscribe((value => {
		answer_value = value;
	}))
</script>
<input class="inputText" type="text" readonly value="{count_value}"/>
<input class="inputText" type="text" readonly value="{answer_value}">
<div class="pads">
	<Keypad />
	<Symbols/>
</div>


<style>
    .pads {
        display: grid;
        grid-template-columns: repeat(2, 6em);
        grid-gap: 13.5em;
    }

		.inputText {
				width: 13em;
				height: 3em;
		}
</style>
