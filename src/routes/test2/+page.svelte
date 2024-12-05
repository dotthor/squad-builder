<script lang="ts">
	import Center from '$lib/my_comps/center.svelte';
	import Statschart from '$lib/my_comps/statschart.svelte';
	import type { ChartOptions } from 'chart.js';

	//const labels = Utils.months({ count: 7 });
	const data = {
		labels: ['Attacco', 'Difesa', 'Tecnica'],
		datasets: [
			{
				data: [10, 4, 10],
				borderWidth: 1
			}
		]
	};
	const options: ChartOptions<'radar'> = {
		elements: {
			line: {
				borderWidth: 3
			}
		},
		scales: {
			r: {
				min: 0,
				max: 10,
				ticks: {
					stepSize: 1
				}
			}
		},
		plugins: {
			legend: {
				display: false
			}
		}
	};
</script>

<Center>
	<div class="size-72">
		<Statschart {data} {options}></Statschart>
	</div>
</Center>
