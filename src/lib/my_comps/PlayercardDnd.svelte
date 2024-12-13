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

<button
	onclick={() => {
		//open = true;
		console.log('edit player');
	}}
	bind:this={element}
	class={'size-full rounded-md bg-yellow-500 ' + (dragging ? ' opacity-30' : '')}
	>{player.name}</button
>
