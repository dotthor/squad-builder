<script lang="ts">
	import { playersV2, teams } from '$lib/states.svelte';
	import { Swappable } from '@shopify/draggable';
	import { onMount } from 'svelte';
	import Futcardsmall from './futcardsmall.svelte';

	let { team }: { team: 'team_a' | 'team_b' } = $props();

	const positions = [
		'bottom-[5%] left-[38%]',
		'bottom-[25%] left-[38%]',
		'bottom-[50%] left-[10%]',
		'bottom-[50%] right-[10%]',
		'left-[38%] top-[10%]'
	];
</script>

<div
	id="swappable"
	class="relative h-full w-full bg-[url('/imgs/pitch2.png')] bg-center bg-no-repeat"
>
	{#each teams.value[team] as player, i (player.id)}
		<div class={`absolute ${positions[i]}`}>
			<Futcardsmall stats={player.stats} nome={player.name} id={player.id} {team} />
		</div>
	{/each}
</div>
