import Slider from "./slider"

export default class MainSlider extends Slider {

    showSlides(n) {
        if (n > this.slides.length)
            this.slideIndex = 1
        if (n < 1)
            this.slideIndex = this.slides.length

        try {
            this.hanson.style.opacity = '0'
            if (n === 3) {
                this.hanson.classList.add('animated')
                setTimeout(() => {
                    this.hanson.style.opacity = '1'
                    this.hanson.classList.add('slideInUp')
                }, 3000)
            } else {
                this.hanson.classList.remove('slideInUp')
            }
        } catch (e) {
        }

        this.slides.forEach(slide => slide.style.display = 'none')

        this.slides[this.slideIndex - 1].style.display = 'block'
    }

    changeSlides(n) {
        this.showSlides(this.slideIndex += n)
    }

    bindTriggers() {
        this.buttons.forEach(button => {
            button.addEventListener('click', () => {
                this.changeSlides(1)
            })
            button.parentNode.previousElementSibling
                .addEventListener('click', (e) => {
                    e.preventDefault()
                    this.slideIndex = 1
                    this.showSlides(this.slideIndex)
                })
        })

        this.prevs.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault()
                e.stopPropagation()
                this.changeSlides(-1)
            })
        })
        this.nexts.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault()
                e.stopPropagation()
                this.changeSlides(1)
            })
        })
    }

    render() {
        if (this.container) {
            try {
                this.hanson = document.querySelector('.hanson')
            } catch (e) {
            }
            this.showSlides(this.slideIndex)
            this.bindTriggers()
        }
    }
}