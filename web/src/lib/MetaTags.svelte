<script lang="ts">
    interface MetaProps {
        title?: string
        description?: string
        slug?: string
        image?: string
        keywords?: string
        author?: string
        date?: string
    }
    // Default values as fallback
    let { 
        title = "AltCSS Documentation", 
        description = "Learn how to use AltCSS, the class-free CSS library.", 
        slug = '',
        image = "https://aditya-xq.github.io/altcss/assets/og-image.webp",
        keywords = "AltCSS Documentation, CSS Library Guide, Web Development Tutorial, Documentation",
        author = "Aditya Vivek Thota",
        date,
    }: MetaProps = $props();
    
    const siteUrl = "https://aditya-xq.github.io/altcss";
    const fullUrl = `${siteUrl}${slug}`;
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="title" content={title}>
    <meta name="description" content={description}>
    
    <meta property="og:type" content="article">
    <meta property="og:url" content={fullUrl}>
    <meta property="og:title" content={title}>
    <meta property="og:description" content={description}>
    <meta property="og:image" content={image}>
    {#if date}
        <meta property="article:published_time" content={date}>
    {/if}

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content={fullUrl}>
    <meta name="twitter:title" content={title}>
    <meta name="twitter:description" content={description}>
    <meta name="twitter:image" content={image}>

    <meta name="keywords" content={keywords}>
    <meta name="author" content={author}>
    <link rel="canonical" href={fullUrl}>
</svelte:head>