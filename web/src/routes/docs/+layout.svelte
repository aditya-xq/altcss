<script lang="ts">
  import { onMount } from "svelte"
  import { afterNavigate } from "$app/navigation"
  let { children } = $props()
  let headings: HTMLHeadingElement[] = $state([])
  
  function updateHeadings() {
    const articleElement = document.querySelector('article')
    headings = Array.from(articleElement?.querySelectorAll('h3') || [])
  }

  afterNavigate(() => {
    updateHeadings()
  })

  onMount(() => {
    updateHeadings()
  })

</script>

<div>
  <header>
    <h4>🌈 AltCSS Documentation</h4>
    <nav><p><a href="/">🏠 Home</a></p></nav>
  </header>

  <main>
    <section>
      <nav>
        <p><a href="/docs/introduction">Introduction</a></p>
        <p><a href="/docs/installation">Installation</a></p>
      </nav>
    </section>
    <article>
      {@render children?.()}
    </article>
    <section>
      <h5>On this page</h5>
      <ul>
        {#each headings as heading}
          <li>
            <a href="#{heading.id}">
              {heading.textContent}
            </a>
          </li>
        {/each}
      </ul>
    </section>
  </main>
</div>