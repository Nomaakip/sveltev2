<script>
    let { title, content } = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={content} />
</svelte:head>