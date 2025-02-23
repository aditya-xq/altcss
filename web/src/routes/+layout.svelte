<script lang="ts">
  import { dev } from '$app/environment'
  import { onMount } from 'svelte'
  
  // Import local styles in dev, package styles in prod
  dev ? import('../../../dist/alt.min.css') : import('altcss/alt.min.css')

  let isDarkMode = $state(false)
  onMount(() => {
    if (typeof window !== 'undefined') {
      isDarkMode = document.documentElement.classList.contains('dark')
    }
  })

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark')
    }
  }
  
  let { children } = $props()
</script>

<input checked={isDarkMode} type="checkbox" id="theme-toggle" onclick={toggleTheme}/>

{@render children?.()}