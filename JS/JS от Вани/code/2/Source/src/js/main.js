import {
    modals,
    sliders,
    forms,
    mask,
    checkTextInputs,
    showMoreStyles,
    calc,
    filter,
    picture,
    accordion,
    burger,
    scroll,
    drop,
} from './modules'


window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    modals()

    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn')
    sliders('.main-slider-item', 'vertical')

    forms()

    mask('[name="phone"]')
    checkTextInputs('[name="name"]')
    checkTextInputs('[name="message"]')

    showMoreStyles('.button-styles', '#styles .row')

    calc('#size', '#material', '#options', '.promocode', '.calc-price')
    filter()
    picture('.sizes-block')
    accordion('.accordion-heading')
    burger('.burger-menu', '.burger')
    scroll('.pageup')
    drop()
})
