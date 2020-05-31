import {checkNumInputs} from "./utils"

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox')

    checkNumInputs('#width')
    checkNumInputs('#height')

    const bindActionToElements = (event, element, prop) => {
        element.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case'SPAN':
                        state[prop] = i
                        break
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            state[prop] = i === 0 ? 'Холодное' : 'Тёплое'
                            element.forEach((box, j) => {
                                box.checked = i === j
                            })
                        } else {
                            state[prop] = item.value
                        }
                        break
                    case 'SELECT':
                        state[prop] = item.value
                        break
                }
                console.log(state)
            })
        })
    }

    bindActionToElements('click', windowForm, 'form')
    bindActionToElements('input', windowWidth, 'width')
    bindActionToElements('input', windowHeight, 'height')
    bindActionToElements('change', windowType, 'type')
    bindActionToElements('change', windowProfile, 'profile')


}

export default changeModalState