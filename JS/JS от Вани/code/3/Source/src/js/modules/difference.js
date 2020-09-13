export default class Difference {
    constructor(officer, items) {
        this.officer = document.querySelector(officer)
        try{
            this.items = this.officer.querySelectorAll(items)
        }catch (e) {
            
        }
        this.counter = 0
    }

    hideItems() {
        this.items.forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.display = 'none'
            } else {
                item.style.cursor = 'pointer'
            }
            item.classList.add('animated')
        })
    }

    bindTrigger() {
        this.items[this.items.length - 1].addEventListener('click', () => {
            if (this.counter === this.items.length - 2) {
                const lastItemPos = this.items.length - 1
                this.items[lastItemPos].classList.add('fadeOut')
                this.items[lastItemPos].style.display = 'none'
                this.items[lastItemPos].remove()
            }
            this.items[this.counter].style.display = 'flex'
            this.items[this.counter].classList.add('fadeIn')

            this.counter++
        })
    }

    init() {
        try{
            this.hideItems()
        this.bindTrigger()
        }catch (e) {
            
        }
    }
}