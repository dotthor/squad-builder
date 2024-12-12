<script lang="ts">
	import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

	let element: HTMLImageElement;

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
				/* type,
				location */
			})
		});
	});
</script>
