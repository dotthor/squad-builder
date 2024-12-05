<script>
	import Center from '$lib/my_comps/center.svelte';
	import Statschart from '$lib/my_comps/statschart.svelte';

	const data = {
		datasets: [
			{
				label: 'My First Dataset',
				data: [65, 59, 80, 81, 56, 55, 40],
				fill: true,
				borderColor: 'red',
				tension: 0.1,
				backgroundColor: 'blue'
			}
		]
	};

	const options = {};
</script>

<Center>
	<Statschart {data} {options}></Statschart>
</Center>
