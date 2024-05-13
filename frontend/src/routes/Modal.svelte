<script>
	import Spinner from './Spinner.svelte';
	export let visible = false;
</script>

{#if visible}
	<div class="modal">
		<div class="modal-content">
			<Spinner />
		</div>
	</div>
{/if}

<style>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-content {
        padding: 20px;
        background: white;
        border-radius: 5px;
    }
</style>
