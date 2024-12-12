<script lang="ts">
	import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

	let element: HTMLDivElement;

	let isDraggedOver = $state(false);

	$effect(() => {
		return dropTargetForElements({
			element,
			getData: () => ({
				location
			}),
			onDragEnter: ({ source }) => {
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
