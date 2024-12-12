<script lang="ts">
	import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';

	$effect(() => {
		return monitorForElements({
			onDrop({ source, location }) {}
		});
	});
</script>

<div
	class="borderinn grid aspect-[9/16] w-[80%] grid-cols-5 grid-rows-[repeat(15,_minmax(0,_1fr))] border border-blue-500 bg-teal-200 sm:w-96"
>
	<div class="col-start-3 row-start-6 flex size-full items-center justify-center">
		<svg class="size-6" viewBox="0 0 40 40" preserveAspectRatio="none" width="100%" height="100%"
			><rect
				fill="#357edd"
				x="5"
				y="5"
				transform="rotate(45, 20, 20)"
				width="30"
				height="30"
				rx="4"
				ry="4"
			></rect></svg
		>
	</div>
</div>
