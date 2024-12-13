<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet<[]> } = $props();
</script>

<div
	class="grid aspect-[68/105] h-auto w-[95%] grid-cols-5 grid-rows-[repeat(15,_minmax(0,_1fr))] bg-green-300 p-4 sm:h-[95%] sm:w-auto"
>
	<div class="col-span-full col-start-1 row-start-1 flex size-full">
		<span class="h-2 w-full bg-white sm:h-4"></span>
	</div>
	<div class="col-span-full col-start-1 row-start-[15] flex size-full items-end">
		<span class="h-2 w-full bg-white sm:h-4"></span>
	</div>
	<div class="col-start-1 row-span-full row-start-1 flex size-full items-end">
		<span class="h-full w-2 bg-white sm:w-4"></span>
	</div>
	<div class="col-start-5 row-span-full row-start-1 flex size-full justify-end">
		<span class="h-full w-2 bg-white sm:w-4"></span>
	</div>
	<div class="col-start-2 row-span-2 row-start-1 flex size-full justify-start">
		<span class="h-full w-2 bg-white sm:w-4"></span>
	</div>
	<div class="col-start-4 row-span-2 row-start-1 flex size-full justify-end">
		<span class="h-full w-2 bg-white sm:w-4"></span>
	</div>
	<div class="col-span-3 col-start-2 row-start-3 flex size-full">
		<span class="h-2 w-full bg-white sm:h-4"></span>
	</div>
	<div class="col-span-full col-start-1 row-start-8 flex size-full items-center">
		<span class="h-2 w-full bg-white sm:h-4"></span>
	</div>
	<div
		class="col-span-3 col-start-2 row-span-3 row-start-7 flex size-full items-center justify-center px-1"
	>
		<span class="aspect-square h-full rounded-full border-8 border-white sm:border-[16px]"></span>
	</div>
	<div class="col-start-2 row-span-2 row-start-[14] flex size-full justify-start">
		<span class="h-full w-2 bg-white sm:w-4"></span>
	</div>
	<div class="col-start-4 row-span-2 row-start-[14] flex size-full justify-end">
		<span class="h-full w-2 bg-white sm:w-4"></span>
	</div>
	<div class="col-span-3 col-start-2 row-start-[13] flex size-full items-end">
		<span class="h-2 w-full bg-white sm:h-4"></span>
	</div>
	{@render children?.()}
</div>
