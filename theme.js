document.getElementById('theme-toggle').addEventListener('change', (e) => {
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', e.target.checked ? 'dark' : 'light')
})
