<script>
	import Center from '$lib/my_comps/center.svelte';
	import * as Drawer from '$lib/components/ui/drawer';
	import { Button } from '$lib/components/ui/button';
	import Futcardbig from '$lib/my_comps/futcardbig.svelte';
	import MySlider from '$lib/my_comps/MySlider.svelte';
	import Bolt from 'lucide-svelte/icons/zap';
	import Anchor from 'lucide-svelte/icons/anchor';
	import Shield from 'lucide-svelte/icons/shield';
	import Eye from 'lucide-svelte/icons/eye';
	import Input from '$lib/components/ui/input/input.svelte';
	import Futcardsmall from '$lib/my_comps/futcardsmall.svelte';

	let nome = $state('Gervino');
	/* silver 74, bronze 64 */

	let open = $state(false);

	let stats = $state([
		{
			value: [5],
			label: 'Attacco'
		},
		{
			value: [5],
			label: 'Difesa'
		},
		{
			value: [5],
			label: 'Tecnica'
		}
	]);
	const icons = [Bolt, Shield, Eye];
</script>

<div class="relative h-dvh w-full bg-[url('/imgs/pitch2.png')] bg-center bg-no-repeat">
	<Center>
		<Drawer.Root bind:open>
			<Drawer.Trigger>
				<Futcardsmall bind:stats bind:nome />
			</Drawer.Trigger>
			<Drawer.Content>
				<div class="flex w-full flex-col items-center gap-4 py-4">
					<Futcardbig bind:stats bind:nome />
					<div data-vaul-no-drag class="flex gap-4">
						{#each stats as stat, i (i)}
							<div class="flex flex-col items-center gap-1">
								<MySlider bind:value={stat.value}></MySlider>
							</div>
						{/each}
					</div>
					<Input placeholder="Nome" bind:value={nome} class="w-4/6 text-base" />
				</div>
			</Drawer.Content>
		</Drawer.Root>
	</Center>
	<button
		class="absolute right-4 top-4"
		onclick={() => {
			nome = 'Benny';
			open = !open;
		}}
	>
		<Anchor size="32" />
	</button>
	<button
		class="absolute left-4 top-4"
		onclick={() => {
			nome = 'Mattia';
			open = !open;
		}}
	>
		<Eye size="32" />
	</button>
</div>
