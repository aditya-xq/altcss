<script>
    // @ts-nocheck
    import { base } from '$app/paths'
    let dialogRef1 = $state(false)
    let dialogRef2 = $state(false)
    let dialogRef3 = $state(false)
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
                <p><a href="{base}/docs">
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
            <p><a href="{base}/docs">
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
    <p>This is a paragraph of text that explains something important. It's styled to be clean and readable in both light and dark mode.</p>
</section>
<section>
    <div id="a-carousal">
        <input type="radio" name="slider" id="slide1" checked>
        <input type="radio" name="slider" id="slide2">
        <input type="radio" name="slider" id="slide3">
        <input type="radio" name="slider" id="slide4">
        <input type="radio" name="slider" id="slide5">
        <input type="radio" name="slider" id="slide6">
        <div>
            <div>
                <h2>Slide 1</h2>
                <p>Here's a pure HTML & CSS carousel!</p>
            </div>
            <div>
                <h2>Slide 2</h2>
                <p>Using radio buttons</p>
            </div>
            <div>
                <h2>Slide 3</h2>
                <p>CSS :checked selector magic</p>
            </div>
            <div>
                <h2>Slide 4</h2>
                <p>No JavaScript required!</p>
            </div>
            <div>
                <h2>Slide 5</h2>
                <p>Supports up to 6 slides</p>
            </div>
            <div>
                <h2>Slide 6</h2>
                <p>Pure semantic HTML structure</p>
            </div>
        </div>
        <!-- Previous Buttons -->
        <label for="slide6">‹</label>
        <label for="slide1">‹</label>
        <label for="slide2">‹</label>
        <label for="slide3">‹</label>
        <label for="slide4">‹</label>
        <label for="slide5">‹</label>
        <!-- Next Buttons -->
        <label for="slide2">›</label>
        <label for="slide3">›</label>
        <label for="slide4">›</label>
        <label for="slide5">›</label>
        <label for="slide6">›</label>
        <label for="slide1">›</label>
        <!-- Indicator Dots -->
        <div>
            <label for="slide1"></label>
            <label for="slide2"></label>
            <label for="slide3"></label>
            <label for="slide4"></label>
            <label for="slide5"></label>
            <label for="slide6"></label>
        </div>
    </div>
</section>
<section>
    <p>Here are some clean buttons. Click them for a surprise!</p>
    <!-- Trigger Button -->
    <button data-variant="primary" onclick={() => dialogRef1.showModal()}>
        Primary
    </button>
    <button data-variant="secondary" onclick={() => dialogRef2.showModal()}>
        Secondary
    </button>
    <button data-variant="tertiary" onclick={() => dialogRef3.showModal()}>
        Tertiary
    </button>
</section>
<section>
    <div>
        <input type="radio" name="tabs" id="tab1" checked>
        <input type="radio" name="tabs" id="tab2">
        <input type="radio" name="tabs" id="tab3">
        <nav>
            <label for="tab1">This is a tab</label>
            <label for="tab2">Another tab</label>
            <label for="tab3">Yet another one</label>
        </nav>
        <section><p>Hello world</p></section>
        <section><p>It's made of pure HTML</p></section>
        <section><p>It's responsive too!</p></section>
    </div>
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
<section>
    <label for="input-id">Name</label>
    <input type="text" id="input-id" placeholder="Type here">
    <label for="textarea-id">A feature you would like to see in AltCSS</label>
    <textarea id="textarea-id" placeholder="Write something random..."></textarea>
</section>
<section>
    <p>Here are some checkboxes:</p>
    <div>
        <label>
            <input type="checkbox">
            <span>Awesome</span>
        </label>
        <label>
            <input type="checkbox" checked>
            <span>Incredible</span>
        </label>
        <label>
            <input type="checkbox" disabled>
            <span>Disabled</span>
        </label>
        <label>
            <input type="checkbox">
            <span>Check me!</span>
        </label>
    </div>
</section>
<section>
    <p>What do you think of AltCSS?</p>
    <div>
        <label>
            <input type="radio" name="radioGroup" value="option1">
            <span>It's unique</span>
        </label>
        <label>
            <input type="radio" name="radioGroup" value="option2">
            <span>Fascinating take</span>
        </label>
        <label>
            <input type="radio" name="radioGroup" value="option3" disabled>
            <span>It's meh!</span>
        </label>
        <label>
            <input type="radio" name="radioGroup" value="option4">
            <span>Something different</span>
        </label>
    </div>
</section>
<!-- Native Dialog Popup -->
<dialog bind:this={dialogRef1} size="s">
    <form method="dialog">
        <header>
            <h4>A smol popup appeared!</h4>
            <button type="button" onclick={() => dialogRef1.close()}>✕</button>
        </header>
        <section>
            <p>This is a minimal popup dialog box. It is ideal for binary userflows to confirm or cancel something.</p>
        </section>
        <!-- Optional footer -->
        <footer>
            <button data-variant="tertiary" value="cancel">Cancel</button>
            <button data-variant="primary" value="confirm">Confirm</button>
        </footer>
    </form>
</dialog>
<dialog bind:this={dialogRef2} size="m">
    <form method="dialog">
        <header>
            <h4>You have opened a medium sized popup!</h4>
            <button type="button" onclick={() => dialogRef2.close()}>✕</button>
        </header>
        <section>
            <p>This is ideal for more descriptive messages and some form field configurations.</p>
        </section>
        <!-- Optional footer -->
        <footer>
            <button data-variant="tertiary" value="cancel">Cancel</button>
            <button data-variant="primary" value="confirm">Confirm</button>
        </footer>
    </form>
</dialog>
<dialog bind:this={dialogRef3} size="l">
    <form method="dialog">
        <header>
            <h4>This is a large popup!</h4>
            <button type="button" onclick={() => dialogRef3.close()}>✕</button>
        </header>
        <section>
            <p>Perfect for settings, forms and data intensive userflows.</p>
        </section>
        <footer>
            <button data-variant="tertiary" value="cancel">Cancel</button>
            <button data-variant="primary" value="confirm">Confirm</button>
        </footer>
    </form>
</dialog>

<footer>
    <p>Made with 🌈 by <a href="https://github.com/aditya-xq">aditya-xq</a></p>
    <p>Licensed under MIT</p>
</footer>