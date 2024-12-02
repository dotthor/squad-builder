<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select/index.js';
	import { Switch } from '$lib/components/ui/switch';
	import { players } from '$lib/states.svelte';
	import { useDebounce } from 'runed';

	const maxRating = 10;

	let { playerId }: { playerId: number } = $props();

	let player = $state(
		players.value.find((p) => p.id == `player_${playerId}`) || {
			id: `player_${playerId}`,
			name: '',
			attValue: '-',
			defValue: '-',
			tecValue: '-',
			keeper: false
		}
	);

	/* try {
		const storedPlayerStats = localStorage.getItem(`player_${playerId}`);
		if (storedPlayerStats) {
			playerStats = JSON.parse(storedPlayerStats);
		}
	} catch (error) {} */

	/* function updatePlayer() {
		if (playerStats.name === '') {
			playerStats.name = 'Player ' + playerId;
		}
		localStorage.setItem(`player_${playerId}`, JSON.stringify(playerStats));
	} */

	const updatePlayer = useDebounce(
		() => {
			if (player.name === '') {
				player.name = 'Player ' + playerId;
			}
			players.updatePlayer(player);
			//localStorage.setItem(`player_${playerId}`, JSON.stringify(playerStats));
		},
		() => 500
	);
</script>

<Carousel.Item>
	<div class="p-1">
		<Card.Root>
			<Card.Content class="flex aspect-square flex-col items-center justify-center space-y-2 p-6">
				<div class="flex w-full max-w-sm flex-col gap-1.5">
					<Label for="nome">Nome</Label>
					<Input
						onkeyup={updatePlayer}
						type="text"
						placeholder="Lionel"
						class="max-w-xs text-base"
						bind:value={player.name}
					/>
				</div>
				<div class="flex w-full max-w-sm flex-col gap-1.5">
					<Label for="att">Attacco</Label>
					<Select.Root
						onValueChange={updatePlayer}
						type="single"
						name="favoriteFruit"
						bind:value={player.attValue}
					>
						<Select.Trigger>
							{player.attValue}
						</Select.Trigger>
						<Select.Content>
							<Select.Group>
								{#each Array(maxRating) as _, i (i)}
									<Select.Item value={(i + 1).toString()}>{i + 1}</Select.Item>
								{/each}
							</Select.Group>
						</Select.Content>
					</Select.Root>
				</div>
				<div class="flex w-full max-w-sm flex-col gap-1.5">
					<Label for="def">Difesa</Label>
					<Select.Root
						onValueChange={updatePlayer}
						type="single"
						name="favoriteFruit"
						bind:value={player.defValue}
					>
						<Select.Trigger>
							{player.defValue}
						</Select.Trigger>
						<Select.Content>
							<Select.Group>
								{#each Array(maxRating) as _, i (i)}
									<Select.Item value={(i + 1).toString()}>{i + 1}</Select.Item>
								{/each}
							</Select.Group>
						</Select.Content>
					</Select.Root>
				</div>
				<div class="flex w-full max-w-sm flex-col gap-1.5">
					<Label for="tec">Tecnica</Label>
					<Select.Root
						onValueChange={updatePlayer}
						type="single"
						name="favoriteFruit"
						bind:value={player.tecValue}
					>
						<Select.Trigger>
							{player.tecValue}
						</Select.Trigger>
						<Select.Content>
							<Select.Group>
								{#each Array(maxRating) as _, i (i)}
									<Select.Item value={(i + 1).toString()}>{i + 1}</Select.Item>
								{/each}
							</Select.Group>
						</Select.Content>
					</Select.Root>
				</div>
				<div class="flex w-full max-w-sm flex-col gap-1.5">
					<Label for="keeper">Purti</Label>

					<Switch onCheckedChange={updatePlayer} bind:checked={player.keeper} id="keeper" />
				</div>
				<!-- <div class="flex w-full items-center space-x-2">
					<Label for="keeper">Purti</Label>
				</div> -->
			</Card.Content>
		</Card.Root>
	</div>
</Carousel.Item>
