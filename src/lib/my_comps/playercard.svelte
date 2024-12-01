<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select/index.js';

	let { playersNumber, playerId }: { playersNumber: number; playerId: number } = $props();

	let playerStats = $state({
		name: '',
		attValue: '-',
		defValue: '-',
		tecValue: '-'
	});

	try {
		const storedPlayerStats = localStorage.getItem(`player_${playerId}`);
		if (storedPlayerStats) {
			playerStats = JSON.parse(storedPlayerStats);
		}
	} catch (error) {}

	function updatePlayer() {
		if (playerStats.name === '') {
			playerStats.name = 'Player ' + playerId;
		}
		localStorage.setItem(`player_${playerId}`, JSON.stringify(playerStats));
	}
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
						bind:value={playerStats.name}
					/>
				</div>
				<div class="flex w-full max-w-sm flex-col gap-1.5">
					<Label for="att">Attacco</Label>
					<Select.Root
						onValueChange={updatePlayer}
						type="single"
						name="favoriteFruit"
						bind:value={playerStats.attValue}
					>
						<Select.Trigger>
							{playerStats.attValue}
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
					<Select.Root
						onValueChange={updatePlayer}
						type="single"
						name="favoriteFruit"
						bind:value={playerStats.defValue}
					>
						<Select.Trigger>
							{playerStats.defValue}
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
					<Select.Root
						onValueChange={updatePlayer}
						type="single"
						name="favoriteFruit"
						bind:value={playerStats.tecValue}
					>
						<Select.Trigger>
							{playerStats.tecValue}
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
