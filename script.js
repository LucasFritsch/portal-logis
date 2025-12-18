const buttons = document.querySelectorAll(".bottom-nav button")
const pages = document.querySelectorAll(".page")

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetid = button.dataset.target

        // páginas
        pages.forEach(page => {
        page.classList.toggle(
            "page--active",
            page.id === targetid
        )
        })

        // botões
        buttons.forEach(btn => {
        btn.classList.toggle(
            "nav-item--active",
            btn.dataset.target === targetid
            )
        })
    })
})
