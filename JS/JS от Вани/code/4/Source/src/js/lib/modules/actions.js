import $ from '../core'

$.prototype.html = function (content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content
        } else {
            return this[i].innerHTML
        }
    }
    return this
}
$.prototype.value = function (value) {
    for (let i = 0; i < this.length; i++) {
        if (value) {
            this[i].value = value
        } else {
            this[i] = this[i].value
        }
    }
    return this
}
$.prototype.eq = function (i) {
    const swap = this[i]
    const objLength = Object.keys(this).length

    for (let i = 0; i < objLength; i++) {
        delete this[i]
    }

    this[0] = swap
    this.length = 1
    return this
}

$.prototype.index = function () {
    const parent = this[0].parentNode
    const childs = [...parent.children]

    return childs.findIndex(item => item === this[0])
}

$.prototype.find = function (selector) {
    let itemsCount = 0
    let itemsCounter = 0
    const objLength = Object.keys(this).length
    const copyObj = Object.assign({}, this)

    for (let i = 0; i < copyObj.length; i++) {
        const foundItems = copyObj[i].querySelectorAll(selector)
        if (!foundItems.length) {
            continue
        }
        for (let j = 0; j < foundItems.length; j++) {
            this[itemsCounter] = foundItems[j]
            itemsCounter++
        }
        itemsCount += foundItems.length
    }

    this.length = itemsCount

    for (; itemsCounter < objLength; itemsCounter++) {
        delete this[itemsCounter]
    }
    return this
}

$.prototype.closest = function (selector) {
    let counter = 0

    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].closest(selector) || this[i]
        counter++
    }

    const objLength = Object.keys(this).length
    for (; counter < objLength; counter++) {
        delete this[counter]
    }
    return this
}

$.prototype.siblings = function () {
    let itemsCount = 0
    let itemsCounter = 0
    const objLength = Object.keys(this).length
    const copyObj = Object.assign({}, this)

    for (let i = 0; i < copyObj.length; i++) {
        const childes = copyObj[i].parentNode.children
        for (let j = 0; j < childes.length; j++) {
            if (copyObj[i] === childes[j]) {
                continue
            }

            this[itemsCounter] = childes[j]
            itemsCounter++
        }
        itemsCount += childes.length - 1
    }

    this.length = itemsCount

    for (; itemsCounter < objLength; itemsCounter++) {
        delete this[itemsCounter]
    }
    return this
}