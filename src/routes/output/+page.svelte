<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Progress } from '$lib/components/ui/progress';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const team1 = data.teams?.team1;
	const team2 = data.teams?.team2;

	const att1 = team1?.reduce((acc, p) => acc + parseInt(p.attValue), 0);
	const def1 = team1?.reduce((acc, p) => acc + parseInt(p.defValue), 0);
	const tec1 = team1?.reduce((acc, p) => acc + parseInt(p.tecValue), 0);

	const att2 = team2?.reduce((acc, p) => acc + parseInt(p.attValue), 0);
	const def2 = team2?.reduce((acc, p) => acc + parseInt(p.defValue), 0);
	const tec2 = team2?.reduce((acc, p) => acc + parseInt(p.tecValue), 0);

	//console.log(data);
</script>

<div class="flex h-dvh flex-col items-center justify-center">
	{#if !team1 || !team2}
		<p>Greve: qualcosa è andato storto :/</p>
		<Button class="mt-4 text-lg" size="lg" href="/">Torna indietro</Button>
	{:else}
		<div class="flex max-w-sm flex-wrap justify-center gap-2">
			<Card.Root class="w-10/12">
				<Card.Header>
					<Card.Title>Squadra A</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="flex flex-col gap-4">
						<div>
							<Progress value={att1} max={60} />
							<div class="flex justify-between">
								<span>Attacco:</span>
								<span>{att1}/60</span>
							</div>
						</div>
						<div>
							<Progress value={def1} max={60} />
							<div class="flex justify-between">
								<span>Difesa:</span>
								<span>{def1}/60</span>
							</div>
						</div>
						<div>
							<Progress value={tec1} max={60} />
							<div class="flex justify-between">
								<span>Tecnica:</span>
								<span>{tec1}/60</span>
							</div>
						</div>
					</div>
				</Card.Content>
				<Card.Footer>
					<div class="flex w-full items-center justify-between">
						{#each team1 as player}
							<p>{player.name}</p>
						{/each}
					</div>
				</Card.Footer>
			</Card.Root>
			<Card.Root class="w-10/12">
				<Card.Header>
					<Card.Title>Squadra B</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="flex flex-col gap-4">
						<div>
							<Progress value={att2} max={60} />
							<div class="flex justify-between">
								<span>Attacco:</span>
								<span>{att2}/60</span>
							</div>
						</div>
						<div>
							<Progress value={def2} max={60} />
							<div class="flex justify-between">
								<span>Difesa:</span>
								<span>{def2}/60</span>
							</div>
						</div>
						<div>
							<Progress value={tec2} max={60} />
							<div class="flex justify-between">
								<span>Tecnica:</span>
								<span>{tec2}/60</span>
							</div>
						</div>
					</div>
				</Card.Content>
				<Card.Footer>
					<div class="flex w-full items-center justify-between">
						{#each team2 as player}
							<div>{player.name}</div>
						{/each}
					</div>
				</Card.Footer>
			</Card.Root>
		</div>
		<Button class="mt-4 text-lg" size="lg" href="/">Torna indietro</Button>
	{/if}
</div>
