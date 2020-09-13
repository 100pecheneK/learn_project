import './slider'
import {
    modals,
    tabs,
    forms,
    changeModalState,
    timer,
    images
} from "./modules"


window.addEventListener('DOMContentLoaded', () => {


    'use strict'

    let state = {}
    const deadline = '2020-04-01'

    timer('#timer', deadline)
    changeModalState(state)

    modals(state)

    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active')
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click')
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block')

    forms(state)
    images()

})