<script>
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import Label from '$lib/components/ui/label/label.svelte';
	import { generateTeams } from '$lib/my_utils';
	import { playerState } from '$lib/states.svelte';
	import Wrench from 'lucide-svelte/icons/wrench';
	import Sofa from 'lucide-svelte/icons/sofa';

	function equilibraSquadre() {
		/* console.log($state.snapshot(playerState.value.activePlayers));
		console.log(generateTeams(playerState.value.activePlayers)); */

		const newPlayers = generateTeams(playerState.value.activePlayers);
		if (newPlayers) {
			playerState.updateActiveplayers(newPlayers);
		}
	}

	let disabled = $derived(
		playerState.value.activePlayers.length != playerState.value.squadDimension * 2
	);

	let squadDimension = $state(playerState.value.squadDimension.toString());

	$effect(() => {
		playerState.updateSquadDimension(parseInt(squadDimension));
	});
</script>

<div class="flex h-16 min-h-16 w-full items-center justify-evenly bg-gray-800 text-white">
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			<button class="flex flex-col items-center gap-1">
				<Wrench size="30" />
				<Label>Opzioni</Label>
			</button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content>
			<DropdownMenu.Group>
				<DropdownMenu.GroupHeading>Opzioni</DropdownMenu.GroupHeading>
				<DropdownMenu.Separator />
				<DropdownMenu.Item {disabled} onclick={equilibraSquadre}
					>Squadre automatiche</DropdownMenu.Item
				>
				<DropdownMenu.Sub>
					<DropdownMenu.SubTrigger>Dimensioni squadre</DropdownMenu.SubTrigger>
					<DropdownMenu.SubContent>
						<DropdownMenu.RadioGroup bind:value={squadDimension}>
							<DropdownMenu.RadioItem value="5">5 giocatori</DropdownMenu.RadioItem>
							<DropdownMenu.RadioItem value="6">6 giocatori</DropdownMenu.RadioItem>
							<DropdownMenu.RadioItem disabled value="7">7 giocatori</DropdownMenu.RadioItem>
						</DropdownMenu.RadioGroup>
					</DropdownMenu.SubContent>
				</DropdownMenu.Sub>
				<DropdownMenu.Item
					class="bg-red-500 text-white"
					onclick={() => playerState.resetActivePlayers()}>Elimina squadre</DropdownMenu.Item
				>
			</DropdownMenu.Group>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
	<button class="flex flex-col items-center gap-1 opacity-50" disabled>
		<Sofa size="30" />
		<Label>Panchina</Label>
	</button>
</div>
