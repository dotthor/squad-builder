<script lang="ts">
	import { onMount } from 'svelte';
	import {
		draggable,
		dropTargetForElements
	} from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

	let ref = null;
	let ref2 = null;
	onMount(() => {
		dropTargetForElements({ element: ref2 });
		return draggable({ element: ref });
	});
</script>

<div class="size-96 bg-red-400" bind:this={ref2}>
	<div class="size-40 bg-blue-400" bind:this={ref}></div>
</div>
