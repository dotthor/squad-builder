<script lang="ts">
	import { teams } from '$lib/states.svelte';
	import Formation from '$lib/my_comps/formation.svelte';
	import * as Tabs from '$lib/components/ui/tabs';
	import { Swappable } from '@shopify/draggable';
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import Bin from 'lucide-svelte/icons/trash';
	onMount(() => {
		const swappable = new Swappable(document.querySelectorAll('#swappable'), {
			draggable: '.draggable-item'
		});
		//swappable.on('swappable:start', () => console.log('swappable:start'));
		swappable.on('swappable:swapped', (e) => {
			/* console.log(
				'swappable:swapped',
				e.dragEvent.data.originalSource.id,
				e.dragEvent.data.over.id
			); */
			//teams.swapPlayersById(e.dragEvent.data.originalSource.id, e.dragEvent.data.over.id, 'team_a');
		});
		//swappable.on('swappable:swap', () => console.log('swappable:swap'));
		//swappable.on('swappable:stop', (e) => console.log(e));
		//$inspect(teams.value.team_a);
	});
</script>

<div class="flex h-dvh w-full">
	<!-- <Button
		class=""
		onclick={() => {
			teams.shuffleTeams();
		}}
		size="icon"
		variant="destructive"
	>
		<Bin /></Button
	> -->
	<Tabs.Root value="team_a" class="flex w-full flex-col bg-slate-900">
		<Tabs.List class="mx-auto mt-2">
			<Tabs.Trigger value="team_a">Team A</Tabs.Trigger>
			<Tabs.Trigger value="team_b">Team B</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="team_a" class="grow">
			<Formation team={'team_a'} />
		</Tabs.Content>
		<Tabs.Content value="team_b" class="grow">
			<Formation team={'team_b'} />
		</Tabs.Content>
	</Tabs.Root>
</div>
