<script lang="ts">
	import { type CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select/index.js';

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

	let attValue = $state('-');
	let defValue = $state('-');
	let tecValue = $state('-');
</script>

<div class="flex h-dvh flex-col items-center justify-center">
	<Carousel.Root class="w-4/6 max-w-xs" setApi={(emblaApi) => (api = emblaApi)}>
		<Carousel.Content>
			{#each Array(playersNumber) as _, i (i)}
				<Carousel.Item>
					<div class="p-1">
						<Card.Root>
							<Card.Content
								class="flex aspect-square flex-col items-center justify-center space-y-2 p-6"
							>
								<div class="flex w-full max-w-sm flex-col gap-1.5">
									<Label for="nome">Nome</Label>
									<Input type="text" placeholder="Lionel" class="max-w-xs text-base" />
								</div>
								<div class="flex w-full max-w-sm flex-col gap-1.5">
									<Label for="att">Attacco</Label>
									<Select.Root type="single" name="favoriteFruit" bind:value={attValue}>
										<Select.Trigger>
											{attValue}
										</Select.Trigger>
										<Select.Content>
											<Select.Group>
												{#each Array(playersNumber) as _, i (i)}
													<Select.Item value={(i + 1).toString()}>{i + 1}</Select.Item>
												{/each}
											</Select.Group>
										</Select.Content>
									</Select.Root>
								</div>
								<div class="flex w-full max-w-sm flex-col gap-1.5">
									<Label for="def">Difesa</Label>
									<Select.Root type="single" name="favoriteFruit" bind:value={defValue}>
										<Select.Trigger>
											{defValue}
										</Select.Trigger>
										<Select.Content>
											<Select.Group>
												{#each Array(playersNumber) as _, i (i)}
													<Select.Item value={(i + 1).toString()}>{i + 1}</Select.Item>
												{/each}
											</Select.Group>
										</Select.Content>
									</Select.Root>
								</div>
								<div class="flex w-full max-w-sm flex-col gap-1.5">
									<Label for="tec">Tecnica</Label>
									<Select.Root type="single" name="favoriteFruit" bind:value={tecValue}>
										<Select.Trigger>
											{tecValue}
										</Select.Trigger>
										<Select.Content>
											<Select.Group>
												{#each Array(playersNumber) as _, i (i)}
													<Select.Item value={(i + 1).toString()}>{i + 1}</Select.Item>
												{/each}
											</Select.Group>
										</Select.Content>
									</Select.Root>
								</div>
							</Card.Content>
						</Card.Root>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
	<div class="py-2 text-center text-xl">Player {current} di {count}</div>
</div>
