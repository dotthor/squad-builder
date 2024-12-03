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

<div class="bg-red-100">
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
</div>
