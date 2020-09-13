export default class ShowInfo {
    constructor(triggers) {
        this.buttons = document.querySelectorAll(triggers)
    }

    init() {
        this.buttons.forEach(button => {
            button.style.cursor = 'pointer'
            button.addEventListener('click', () => {
                const sibling = button.nextElementSibling
                sibling.classList.toggle('msg')
                sibling.style.marginTop = '20px'
            })
        })
    }
}