<script lang="ts">
	import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
	import PlayerslotDnd from './PlayerslotDnd.svelte';
	import PlayercardDnd from './PlayercardDnd.svelte';
	import Pitch from './pitch.svelte';
	import Plus from 'lucide-svelte/icons/plus';
	import PlayerDialog from './playerDialog.svelte';
	import { coords_5_a_side, type Coordinate, type Player } from '$lib/constants';
	import { playerState } from '$lib/states.svelte';
	import PlayerSheet from './playerSheet.svelte';

	let dialogData: {
		slotPosition: number;
		slotTeam: 'team_a' | 'team_b';
	} = $state({
		slotPosition: 1,
		slotTeam: 'team_a'
	});

	let slots = [];
	for (let i = 1; i <= 10; i++) {
		slots.push({
			position: i,
			team: i <= 5 ? 'team_a' : 'team_b',
			location: {
				x: coords_5_a_side['diamond'][i].x,
				y: coords_5_a_side['diamond'][i].y
			}
		});
	}

	let open = $state(false);
	let editingPosition = $state(0);
	let activePlayers = $state(playerState.value.activePlayers);

	$effect(() => {
		return monitorForElements({
			onDrop({ source, location }) {
				const destination = location.current.dropTargets[0];
				if (!destination) {
					// if dropped outside of any drop targets
					return;
				}
				const destinationLocation = destination.data.pSlot.position;
				const destinationTeam = destination.data.pSlot.team;

				const sourceLocation = source.data.player.position;
				const sourceTeam = source.data.player.team;

				if (sourceLocation === destinationLocation) {
					return;
				}
				const player = activePlayers.find((p) => p.position === sourceLocation);
				const swapPlayer = activePlayers.find((p) => p.position === destinationLocation);
				const restOfPlayers = activePlayers.filter((p) => p !== player && p !== swapPlayer);

				if (swapPlayer) {
					//console.log($state.snapshot(swapPlayer), destinationLocation);
					activePlayers = [
						{ ...player, position: destinationLocation, team: destinationTeam },
						{ ...swapPlayer, position: sourceLocation, team: sourceTeam },
						...restOfPlayers
					];
				} else {
					activePlayers = [
						{ ...player, position: destinationLocation, team: destinationTeam },
						...restOfPlayers
					];
				}
				playerState.updateActiveplayers(activePlayers);
			}
		});
	});
</script>

<Pitch orientation={'horizontal'}>
	{#each slots as pSlot}
		<PlayerslotDnd {pSlot}>
			{@const player = activePlayers
				? activePlayers.find((p) => p.position === pSlot.position)
				: undefined}
			{#if player}
				<button
					class="contents"
					onclick={() => {
						editingPosition = pSlot.position;
						open = true;
						//console.log('edit player');
					}}
				>
					<PlayercardDnd {player} />
				</button>
			{:else}
				<button
					onclick={() => {
						playerState.updatePlayer({
							team: pSlot.team,
							position: pSlot.position,
							name: '',
							stats: {
								att: [5],
								def: [5],
								tec: [5]
							}
						});
						editingPosition = pSlot.position;
						open = true;
						//console.log('new player');
					}}
				>
					<Plus color="white" size="36" />
				</button>
			{/if}
		</PlayerslotDnd>
	{/each}
	<!-- {#each slots.team_b as slotB}
		<PlayerslotDnd pSlot={slotB}>
			{@const player = team_b
				? team_b.players.find((p) => p.position === slotB.position)
				: undefined}
			{#if player}
				<button
					class="contents"
					onclick={() => {
						editingPlayer = player;
						open = true;
						console.log('edit player');
					}}
				>
					<PlayercardDnd {player} />
				</button>
			{:else}
				<button
					onclick={() => {
						editingPlayer = undefined;
						open = true;
						console.log('new player');
					}}
				>
					<Plus color="white" size="36" />
				</button>
			{/if}
		</PlayerslotDnd>
	{/each} -->
</Pitch>
{#if open}
	<!-- TODO: si potrebbe passare solo la position e poi prendersi il player da dentro lo sheet -->
	<PlayerSheet
		bind:open
		player={playerState.value.activePlayers.find((p) => p.position == editingPosition)}
	/>
{/if}
<!-- <PlayerDialog bind:open slotPosition={dialogData.slotPosition} slotTeam={dialogData.slotTeam} /> -->
