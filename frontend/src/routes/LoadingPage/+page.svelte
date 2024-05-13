<script>
	import Modal from '../Modal.svelte';
	import { onMount } from 'svelte';
	let showModal = false;

	onMount(async () => {
		showModal = true;
		await fetchData();
		showModal = false;
	});

	async function fetchData() {
		await new Promise(resolve => setTimeout(resolve, 2000));
	}
</script>

<button on:click={() => showModal = !showModal}>
	Toggle Loading
</button>

<Modal visible={showModal} />
