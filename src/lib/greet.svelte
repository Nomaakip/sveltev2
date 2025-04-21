<script>
    let name = $state("name")
    let { version } = $props();
</script>

<h1 class="text-4xl text-center m-10">hi, {name}! | v{version}</h1>

<input type="text" bind:value={name} class="rounded-md bg-slate-700">