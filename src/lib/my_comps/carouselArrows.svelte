<script lang="ts">
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';
	import type { WithoutChildren } from 'bits-ui';
	import { getEmblaContext } from '../components/ui/carousel/context.js';
	import { cn } from '$lib/utils.js';
	import { Button, type Props } from '$lib/components/ui/button/index.js';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';

	let {
		ref = $bindable(null),
		class: className,
		variant = 'outline',
		size = 'icon',
		...restProps
	}: WithoutChildren<Props> = $props();

	const emblaCtx = getEmblaContext('<Carousel.Arrows/>');
</script>

<!-- <div class="flex justify-between p-2"> -->
<!-- <div>
		<Button
			{variant}
			{size}
			class={cn(
				'size-8 touch-manipulation rounded-full',

				className
			)}
			disabled={!emblaCtx.canScrollPrev}
			onclick={emblaCtx.scrollPrev}
			onkeydown={emblaCtx.handleKeyDown}
			{...restProps}
			bind:ref
		>
			<ArrowLeft class="size-4" />
			<span class="sr-only">Previous slide</span>
		</Button>

		<Button
			{variant}
			{size}
			class={cn(
				'size-8 touch-manipulation rounded-full',

				className
			)}
			disabled={!emblaCtx.canScrollNext}
			onclick={emblaCtx.scrollNext}
			onkeydown={emblaCtx.handleKeyDown}
			bind:ref
			{...restProps}
		>
			<ArrowRight class="size-4" />
			<span class="sr-only">Next slide</span>
		</Button>
	</div> -->
<div class="grid grid-flow-col grid-rows-2 items-center gap-2 p-2">
	{#each Array(12) as _, i (i)}
		<button
			onclick={() => {
				emblaCtx.scrollTo(i);
			}}
			class="flex size-6 items-center justify-center rounded-full border border-black bg-transparent p-2"
			>{i + 1}</button
		>
	{/each}
</div>
<!-- </div> -->
