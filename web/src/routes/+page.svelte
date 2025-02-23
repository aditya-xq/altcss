<script>
    // @ts-nocheck
    import { onMount } from 'svelte'
    
    let isDarkMode = $state(false)

    onMount(() => {
        if (typeof window !== 'undefined') {
            isDarkMode = document.documentElement.classList.contains('dark')
        }
    });

    function toggleTheme() {
        isDarkMode = !isDarkMode;
        if (typeof window !== 'undefined') {
            document.documentElement.classList.toggle('dark')
        }
    }
</script>

<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="AltCSS - An opinionated, offbeat, lightweight CSS component library built on Tailwind CSS for modern web projects">
    <meta name="keywords" content="CSS library, Tailwind CSS, web design, component library, lightweight CSS">
    <meta property="og:title" content="🌈 AltCSS - Lightweight CSS Component Library">
    <meta property="og:description" content="An opinionated, offbeat CSS library for modern web projects">
    <meta property="og:image" content="https://aditya-xq.github.io/altcss/assets/og-image.webp">
    <meta property="og:url" content="https://aditya-xq.github.io/altcss/">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="🌈 AltCSS">
    <meta name="twitter:description" content="Lightweight CSS Component Library">
    <meta name="robots" content="index, follow">
    <title>AltCSS</title>
    <link rel="canonical" href="https://aditya-xq.github.io/altcss/">
</svelte:head>
<header>
    <h4>🌈 AltCSS</h4>
    <nav aria-label="Main navigation">
        <details>
            <summary><p>Menu</p></summary>
            <div>
                <p><a href="./docs">
                    📂 Docs
                </a></p>
                <p><a href="https://medium.com/p/8f8e11f4a875" target="_blank" rel="noopener noreferrer">
                    ✍️ Blog
                </a></p>
                <p><a href="https://github.com/aditya-xq/altcss" target="_blank" rel="noopener noreferrer">
                    🌟 GitHub
                </a></p>
            </div>
        </details>
        <div>
            <p><a href="./docs">
                📂 Docs
            </a></p>
            <p><a href="https://medium.com/p/8f8e11f4a875" target="_blank" rel="noopener noreferrer">
                ✍️ Blog
            </a></p>
            <p><a href="https://github.com/aditya-xq/altcss" target="_blank" rel="noopener noreferrer">
                🌟 GitHub
            </a></p>
        </div>
    </nav>
</header>
<h1>🌈 Welcome to AltCSS</h1>
<h2>Opinionated, Offbeat, Lightweight</h2>
<h3>CSS Component Library</h3>
<section>
    <input checked={isDarkMode} type="checkbox" id="theme-toggle" onclick={toggleTheme}/>
</section>
<section>
    <p>This is a paragraph of text that explains something important. It's styled to be clean and readable in both light and dark mode.</p>
</section>
<section>
    <article>
        <figure>
            <figcaption>
                <h4>Design Principles</h4>
                <ul>
                    <li>Don't write class names</li>
                    <li>Don't write CSS</li>
                    <li>Keep it simple</li>
                    <li>Keep it clean</li>
                </ul>
            </figcaption>
        </figure>
    </article>
    <article>
        <figure>
            <figcaption>
                <h4>Roadmap</h4>
                <ol>
                    <li>Design for all html tags</li>
                    <li>Clean and minify CSS</li>
                    <li striked>Light/Dark mode </li>
                    <li>Design builder</li>
                </ol>
            </figcaption>
        </figure>
    </article>
</section>
<footer>
    <p>Made with 🌈 by <a href="https://github.com/aditya-xq">aditya-xq</a></p>
    <p>Licensed under MIT</p>
</footer>