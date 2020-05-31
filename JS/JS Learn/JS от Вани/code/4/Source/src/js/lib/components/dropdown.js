import $ from '../core'

$.prototype.dropdown = function () {
    for (let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute('id')
        $(this[i]).onClick(() => {
            $(`[data-toggle-id="${id}"]`).fadeToggle(200)
        })
    }
}

$('.dropdown-toggle').dropdown()