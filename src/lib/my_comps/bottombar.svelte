<script>
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import Label from '$lib/components/ui/label/label.svelte';
	import { generateTeams } from '$lib/my_utils';
	import { playerState } from '$lib/states.svelte';
	import Wrench from 'lucide-svelte/icons/wrench';

	function equilibraSquadre() {
		/* console.log($state.snapshot(playerState.value.activePlayers));
		console.log(generateTeams(playerState.value.activePlayers)); */

		const newPlayers = generateTeams(playerState.value.activePlayers);
		if (newPlayers) {
			playerState.updateActiveplayers(newPlayers);
		}
	}

	let disabled = $derived(playerState.value.activePlayers.length != 10);
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		<div class="flex h-16 w-full items-center justify-center bg-gray-800 text-white">
			<button class="flex flex-col items-center gap-1">
				<Wrench size="30" />
				<Label>Opzioni</Label>
			</button>
		</div>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Group>
			<DropdownMenu.GroupHeading>Opzioni</DropdownMenu.GroupHeading>
			<DropdownMenu.Separator />
			<DropdownMenu.Item {disabled} onclick={equilibraSquadre}
				>Squadre automatiche</DropdownMenu.Item
			>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
