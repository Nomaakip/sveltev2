<script>
    import { fade } from 'svelte/transition';
    import { marked } from 'marked';
    
    let name = $state("name")
    let { version } = $props();
</script>

<h1 class="text-4xl text-center break-all m-10">{@html `hi, ${marked(name)}`} | v{version} |</h1>

<input type="text" bind:value={name} class="rounded-md bg-slate-700">