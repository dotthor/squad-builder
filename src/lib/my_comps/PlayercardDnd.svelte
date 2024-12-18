<script lang="ts">
	import type { Player } from '$lib/constants';
	import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
	import Radialprogressbar from './radialprogressbar.svelte';
	import { getRandomFootballerPic, mapToRange } from '$lib/my_utils';

	let { player }: { player: Player } = $props();

	let element: HTMLSpanElement;

	let dragging = $state(false);

	let src = getRandomFootballerPic();
	let rarity = $derived(calculateRarity());

	function calculateRarity() {
		const overall = mapToRange(player.stats.att[0], player.stats.def[0], player.stats.tec[0]);
		if (overall < 65) return 'bronze';
		else if (overall < 75) return 'silver';
		else return 'gold';
	}

	$effect(() => {
		return draggable({
			element,
			onDragStart: () => {
				dragging = true;
			},
			onDrop: () => {
				dragging = false;
			},
			getInitialData: () => ({
				player
				/* type,
				location */
			})
		});
	});
</script>

<div
	bind:this={element}
	class={'flex size-full flex-col items-center justify-end bg-contain bg-center bg-no-repeat ' +
		(dragging ? ' opacity-30' : '')}
	style:background-image={"url('/imgs/bg_card_" + rarity + ".png')"}
>
	<img class="h-[60%]" {src} alt="player" />
	<span class="h-[37%]">{player.name}</span>
	<!-- {player.name}
	{#if player.stats}
		<div class="flex gap-1">
			att:{player.stats.att}
			def:{player.stats.def}
			tec:{player.stats.tec}
		</div>
	{/if} -->
</div>
