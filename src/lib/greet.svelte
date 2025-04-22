<script>
    import { fade } from 'svelte/transition';
    
    let name = $state("name")
    let { version } = $props();
</script>

<h1 class="text-4xl text-center break-all m-10">hi, {name}! | v{version}</h1>

<input type="text" bind:value={name} class="rounded-md bg-slate-700">