<script lang="ts">
	import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
	import PlayerslotDnd from './PlayerslotDnd.svelte';
	import PlayercardDnd from './PlayercardDnd.svelte';
	import Pitch from './pitch.svelte';
	import Plus from 'lucide-svelte/icons/plus';
	import PlayerDialog from './playerDialog.svelte';
	import { coords_5_a_side, type Coordinate, type Player } from '$lib/constants';
	import { teamsState } from '$lib/states.svelte';

	let dialogData: {
		slotPosition: number;
		slotTeam: 'team_a' | 'team_b';
	} = $state({
		slotPosition: 1,
		slotTeam: 'team_a'
	});

	const slots = {
		team_a: [
			{
				position: 1,
				location: {
					x: coords_5_a_side['diamond']['team_a'][1].x,
					y: coords_5_a_side['diamond']['team_a'][1].y
				}
			},
			{
				position: 2,
				location: {
					x: coords_5_a_side['diamond']['team_a'][2].x,
					y: coords_5_a_side['diamond']['team_a'][2].y
				}
			},
			{
				position: 3,
				location: {
					x: coords_5_a_side['diamond']['team_a'][3].x,
					y: coords_5_a_side['diamond']['team_a'][3].y
				}
			},
			{
				position: 4,
				location: {
					x: coords_5_a_side['diamond']['team_a'][4].x,
					y: coords_5_a_side['diamond']['team_a'][4].y
				}
			},
			{
				position: 5,
				location: {
					x: coords_5_a_side['diamond']['team_a'][5].x,
					y: coords_5_a_side['diamond']['team_a'][5].y
				}
			}
		],
		team_b: [
			{
				position: 1,
				location: {
					x: coords_5_a_side['diamond']['team_b'][1].x,
					y: coords_5_a_side['diamond']['team_b'][1].y
				}
			},
			{
				position: 2,
				location: {
					x: coords_5_a_side['diamond']['team_b'][2].x,
					y: coords_5_a_side['diamond']['team_b'][2].y
				}
			},
			{
				position: 3,
				location: {
					x: coords_5_a_side['diamond']['team_b'][3].x,
					y: coords_5_a_side['diamond']['team_b'][3].y
				}
			},
			{
				position: 4,
				location: {
					x: coords_5_a_side['diamond']['team_b'][4].x,
					y: coords_5_a_side['diamond']['team_b'][4].y
				}
			},
			{
				position: 5,
				location: {
					x: coords_5_a_side['diamond']['team_b'][5].x,
					y: coords_5_a_side['diamond']['team_b'][5].y
				}
			}
		]
	};
	/* let players = $state<Player[]>([
		{
			name: 'Benny',
			position: 1,
			stats: {
				att: 5,
				def: 5,
				tec: 5
			}
		},
		{
			name: 'Mattia',
			position: 2,
			stats: {
				att: 5,
				def: 5,
				tec: 5
			}
		},
		{
			name: 'Giacomo',
			position: 5,
			stats: {
				att: 5,
				def: 5,
				tec: 5
			}
		}
	]); */

	let team_a = teamsState.value.team_a;
	let team_b = teamsState.value.team_b;
	let open = $state(false);
	let editingPlayer = $state<Player | undefined>(undefined);
	$effect(() => {
		return monitorForElements({
			onDrop({ source, location }) {
				const destination = location.current.dropTargets[0];
				if (!destination) {
					// if dropped outside of any drop targets
					return;
				}
				const destinationLocation = destination.data.pSlot.position;
				const sourceLocation = source.data.player.position;

				if (sourceLocation === destinationLocation) {
					return;
				}
				const player = players.find((p) => p.position === sourceLocation);
				const swapPlayer = players.find((p) => p.position === destinationLocation);
				const restOfPlayers = players.filter((p) => p !== player && p !== swapPlayer);

				if (swapPlayer) {
					console.log($state.snapshot(swapPlayer), destinationLocation);
					players = [
						{ ...player, position: destinationLocation },
						{ ...swapPlayer, position: sourceLocation },
						...restOfPlayers
					];
				} else {
					players = [{ ...player, position: destinationLocation }, ...restOfPlayers];
				}
			}
		});
	});
</script>

<Pitch orientation={'horizontal'}>
	{#each slots.team_a as slotA}
		<PlayerslotDnd pSlot={slotA}>
			{@const player = team_a
				? team_a.players.find((p) => p.position === slotA.position)
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
	{/each}
	{#each slots.team_b as slotB}
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
	{/each}
</Pitch>
<PlayerDialog bind:open slotPosition={dialogData.slotPosition} slotTeam={dialogData.slotTeam} />
