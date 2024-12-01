<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { type CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Playercard from '../lib/my_comps/playercard.svelte';

	const playersNumber = 10;

	let api = $state<CarouselAPI>();
	let current = $state(0);
	const count = $derived(api ? api.scrollSnapList().length : 0);

	$effect(() => {
		if (api) {
			current = api.selectedScrollSnap() + 1;
			api.on('select', () => {
				current = api!.selectedScrollSnap() + 1;
			});
		}
	});
</script>

<div class="flex h-dvh flex-col items-center justify-center">
	<Carousel.Root class="w-4/6 max-w-xs" setApi={(emblaApi) => (api = emblaApi)}>
		<Carousel.Content>
			{#each Array(playersNumber) as _, i (i)}
				<Playercard {playersNumber} playerId={i + 1}></Playercard>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
	<div class="py-2 text-center text-xl">Player {current} di {count}</div>
	<Button class="mt-10 text-lg" size="lg">Genera squadra</Button>
</div>
