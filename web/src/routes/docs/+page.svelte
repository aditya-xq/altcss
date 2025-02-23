<script>
    import { base } from '$app/paths';
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    onMount(() => {
        goto(`${base}/docs/introduction`)
    })
</script>
