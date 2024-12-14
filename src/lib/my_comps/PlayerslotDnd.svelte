<script lang="ts">
	import type { Coordinate } from '$lib/constants';
	import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
	import type { Snippet } from 'svelte';

	let { pSlot, children }: { pSlot: any; children?: Snippet<[]> } = $props();

	let element: HTMLDivElement;

	let isDraggedOver = $state(false);

	$effect(() => {
		return dropTargetForElements({
			element,
			getData: () => ({
				pSlot
			}),
			onDragEnter: ({ source }) => {
				//se si vuole controllare se il player ha i requisiti per essere inserito in quella posizione
				isDraggedOver = true;
			},
			onDragLeave: () => {
				isDraggedOver = false;
			},
			onDrop: () => {
				isDraggedOver = false;
			},
			canDrop: ({ source }) => {
				return true;
			}
		});
	});
</script>

<div
	bind:this={element}
	class="relative col-span-2 flex size-full items-center justify-center"
	style={`grid-column-start: ${pSlot.location.x}; grid-row-start: ${pSlot.location.y};`}
>
	<span class="absolute left-0 top-0">{pSlot.position}</span>
	<span
		class={'flex size-full h-[90%] w-[85%] items-center justify-center rounded-lg bg-slate-600 ' +
			(isDraggedOver ? 'animate-pulse' : '')}
	>
		{@render children?.()}
	</span>
</div>
