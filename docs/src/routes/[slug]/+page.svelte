<script lang="ts">
    import MetaTags from '$lib/MetaTags.svelte';
	let { data } = $props()
</script>

<MetaTags {...data.meta}/>
<data.content/>
