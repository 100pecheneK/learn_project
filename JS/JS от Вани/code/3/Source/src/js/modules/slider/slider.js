export default class Slider {

    constructor({
                    container = null,
                    buttons = null,
                    next = null,
                    nexts = null,
                    prev = null,
                    prevs = null,
                    activeClass = '',
                    animate = false,
                    autoplay = false
                }) {
        this.container = document.querySelector(container)
        try {
            this.slides = this.container.children
        } catch (e) {
        }
        this.buttons = document.querySelectorAll(buttons)
        this.next = document.querySelector(next)
        this.nexts = document.querySelectorAll(nexts)
        this.prev = document.querySelector(prev)
        this.prevs = document.querySelectorAll(prevs)
        this.activeClass = activeClass
        this.animate = animate
        this.autoplay = autoplay
        this.slideIndex = 1
    }
}