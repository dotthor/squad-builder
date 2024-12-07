<script lang="ts">
	import { playersV2 } from '$lib/states.svelte';
	import { Swappable } from '@shopify/draggable';
	import { onMount } from 'svelte';
	import Futcardsmall from './futcardsmall.svelte';

	//let { formation } = $props();

	onMount(() => {
		/* const swappable = new Swappable(document.querySelectorAll('#swappable'), {
			draggable: '.draggable-item'
		}); */
	});

	const positions = [
		'bottom-[5%] left-[38%]',
		'bottom-[25%] left-[38%]',
		'bottom-[50%] left-[10%]',
		'bottom-[50%] right-[10%]',
		'left-[38%] top-[10%]'
	];
</script>

<div id="swappable" class="relative h-full w-full border">
	{#each playersV2.value as player, i (player.id)}
		<div class={`absolute ${positions[i]}`}>
			<Futcardsmall stats={player.stats} nome={player.name} />
		</div>
	{/each}
</div>
