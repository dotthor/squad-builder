<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		orientation = 'horizontal'
	}: { children?: Snippet<[]>; orientation?: 'vertical' | 'horizontal' } = $props();
</script>

{#if orientation == 'vertical'}
	<div
		class="grid aspect-video size-full grid-cols-5 grid-rows-[repeat(15,_minmax(0,_1fr))] bg-green-300 p-2"
	>
		<div class="col-span-full col-start-1 row-start-1 flex size-full">
			<span class="h-2 w-full bg-red-500 sm:h-4"></span>
		</div>
		<div class="col-span-full col-start-1 row-start-[15] flex size-full items-end">
			<span class="h-2 w-full bg-pink-500 sm:h-4"></span>
		</div>
		<div class="col-start-1 row-span-full row-start-1 flex size-full items-end">
			<span class="h-full w-2 bg-blue-500 sm:w-4"></span>
		</div>
		<div class="col-start-5 row-span-full row-start-1 flex size-full justify-end">
			<span class="h-full w-2 bg-yellow-500 sm:w-4"></span>
		</div>
		<div class="col-start-2 row-span-2 row-start-1 flex size-full justify-start">
			<span class="h-full w-2 bg-slate-500 sm:w-4"></span>
		</div>
		<div class="col-start-4 row-span-2 row-start-1 flex size-full justify-end">
			<span class="h-full w-2 bg-purple-500 sm:w-4"></span>
		</div>
		<div class="col-span-3 col-start-2 row-start-3 flex size-full">
			<span class="h-2 w-full bg-green-500 sm:h-4"></span>
		</div>
		<div class="col-span-full col-start-1 row-start-8 flex size-full items-center">
			<span class="h-2 w-full bg-orange-500 sm:h-4"></span>
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
{:else}
	<div
		class="grid h-full w-[200vw] grid-cols-[repeat(15,_minmax(0,_1fr))] grid-rows-5 bg-green-300 p-0"
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
		<div class="col-start-[15] row-span-full row-start-1 flex size-full justify-end">
			<span class="h-full w-2 bg-white sm:w-4"></span>
		</div>
		<div class="col-span-2 col-start-1 row-start-2 flex size-full justify-start">
			<span class="h-2 w-full bg-white sm:h-4"></span>
		</div>
		<div class="col-span-2 col-start-1 row-start-4 flex size-full items-end">
			<span class="h-2 w-full bg-white sm:h-4"></span>
		</div>
		<div class="col-start-3 row-span-3 row-start-2 flex size-full justify-start">
			<span class="h-full w-2 bg-white sm:w-4"></span>
		</div>
		<div class="col-start-8 row-span-full row-start-1 flex size-full justify-center">
			<span class="h-full w-2 bg-white sm:w-4"></span>
		</div>
		<div
			class="col-span-3 col-start-7 row-span-3 row-start-2 flex size-full items-center justify-center px-1"
		>
			<span class="aspect-square w-full rounded-full border-8 border-white sm:border-[16px]"></span>
		</div>
		<div class="col-span-2 col-start-[14] row-start-2 flex size-full justify-start">
			<span class="h-2 w-full bg-white sm:h-4"></span>
		</div>
		<div class="col-span-2 col-start-[14] row-start-4 flex size-full items-end">
			<span class="h-2 w-full bg-white sm:h-4"></span>
		</div>
		<div class="col-start-[13] row-span-3 row-start-2 flex size-full justify-end">
			<span class="h-full w-2 bg-white sm:w-4"></span>
		</div>
		{@render children?.()}
	</div>
{/if}
