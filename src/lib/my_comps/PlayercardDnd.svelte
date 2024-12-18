<script lang="ts">
	import type { Player } from '$lib/constants';
	import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

	let { player }: { player: Player } = $props();

	let element: HTMLSpanElement;

	let dragging = $state(false);

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
	class={'size-full rounded-md bg-yellow-500 ' + (dragging ? ' opacity-30' : '')}
>
	{player.name}
	{#if player.stats}
		<div class="flex gap-1">
			att:{player.stats.att}
			def:{player.stats.def}
			tec:{player.stats.tec}
		</div>
	{/if}
</div>
