<script lang="ts">
	import type { Coordinate } from '$lib/constants';
	import { playerState } from '$lib/states.svelte';
	import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
	import Trash from 'lucide-svelte/icons/trash-2';
	import type { Snippet } from 'svelte';

	let element: HTMLDivElement;

	let isDraggedOver = $state(false);

	$effect(() => {
		return dropTargetForElements({
			element,
			getData: () => ({
				/* pSlot */
			}),
			onDragEnter: ({ source }) => {
				//se si vuole controllare se il player ha i requisiti per essere inserito in quella posizione
				isDraggedOver = true;
			},
			onDragLeave: () => {
				isDraggedOver = false;
			},
			onDrop: ({ source }) => {
				isDraggedOver = false;
				playerState.deletePlayer(source.data.player);
			},
			canDrop: ({ source }) => {
				return true;
			}
		});
	});
</script>

<div
	bind:this={element}
	class={'absolute bottom-20 left-5 flex size-20 items-center justify-center ' +
		(isDraggedOver ? 'scale-150 animate-pulse' : '')}
>
	<Trash size="70" color="red" />
</div>
