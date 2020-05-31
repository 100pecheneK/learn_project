import Slider from "./slider"

export default class MiniSlider extends Slider {

    decorizeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass)
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4'
                slide.querySelector('.card__controls-arrow').style.opacity = '0'
            }
        })

        if (!this.slides[0].closest('button')) {
            this.slides[0].classList.add(this.activeClass)
            if (this.animate) {
                this.slides[0].querySelector('.card__title').style.opacity = '1'
                this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1'
            }
        }
    }

    nextSlide() {
        if (this.slides[1].tagName === 'BUTTON' && this.slides[2].tagName === 'BUTTON') {
            for (let i = 0; i < 3; i++) {
                this.container.appendChild(this.slides[0])
            }
        } else {
            this.container.appendChild(this.slides[0])
        }
        this.decorizeSlides()
    }

    bindTriggers() {
        this.next.addEventListener('click', () => this.nextSlide())
        this.prev.addEventListener('click', () => {
            const lastPos = this.slides.length - 1
            if (this.slides[lastPos].tagName === 'BUTTON' && this.slides[lastPos - 1].tagName === 'BUTTON') {
                for (let i = 0; i < 3; i++) {
                    const active = this.slides[this.slides.length - 1]
                    this.container.insertBefore(active, this.slides[0])
                }
            } else {
                const active = this.slides[this.slides.length - 1]
                this.container.insertBefore(active, this.slides[0])
            }
            this.decorizeSlides()
        })
    }

    init() {
        try {
            this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `

            this.bindTriggers()
            this.decorizeSlides()

            if (this.autoplay) {
                setInterval(() => this.nextSlide(), 3000)
            }
        } catch (e) {
        }
    }
}