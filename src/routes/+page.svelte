<script>
	import Kirby from "$lib/kirby.svelte";
	import ClickButton from "$lib/clickButton.svelte";
	import Greet from "$lib/greet.svelte";

	const version = "1.1.6";

	const backgrounds = [
		"bg-gray-800",
		"bg-pink-300",
		"bg-linear-65 from-red-500 to-pink-500",
		"bg-linear-65 from-yellow-300 to-emerald-600",
	];

	let currentBackground = $state(backgrounds[0]);
</script>

<svelte:head>
	<title>welcome</title>
	<meta name="description" content="hell yeah" />
</svelte:head>

<div
	id="container"
	class="{currentBackground} text-white flex flex-col min-h-screen items-center justify-center gap-5 transition delay-200"
>
	<Greet {version} />

	<Kirby />

	<ClickButton />

	<h1 class="text-2xl">Backgrounds</h1>

	<div class="flex items-center justify-center flex-wrap gap-5">
		{#each backgrounds as bg}
			<button
				aria-label={bg}
				class="background h-20 w-40 bg-linear-65 {bg} rounded-md cursor-pointer"
				onclick={() => (currentBackground = bg)}
			></button>
		{/each}
	</div>
</div>
