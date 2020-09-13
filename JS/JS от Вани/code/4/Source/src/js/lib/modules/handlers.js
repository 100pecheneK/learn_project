import $ from '../core'

$.prototype.on = function (event, handler) {
    if (!event || !handler) {
        return this
    }
    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(event, handler)
    }
    return this
}

$.prototype.off = function (event, handler) {
    if (!event || !handler) {
        return this
    }
    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(event, handler)
    }
    return this
}

$.prototype.onClick = function (handler) {
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            this[i].addEventListener('click', handler)
        }
    }
    return this
}

$.prototype.click = function () {
    for (let i = 0; i < this.length; i++) {
        this[i].click()
    }
    return this
}