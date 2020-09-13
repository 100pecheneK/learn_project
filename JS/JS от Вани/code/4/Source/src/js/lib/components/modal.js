import $ from '../core'

$.prototype.modal = function (created) {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target')
        $(this[i]).onClick((e) => {
            e.preventDefault()
            $(target).fadeIn(200)
            document.body.style.overflow = 'hidden'
        })
        const closeElements = document.querySelectorAll(`${target} [data-close]`)
        closeElements.forEach(elem => {
            $(elem).onClick(() => {
                $(target).fadeOut(200)
                document.body.style.overflow = 'hidden'
                if (created) {
                    document.querySelector(target).remove()
                }
            })
        })
        $(target).onClick((e) => {
            if (e.target.classList.contains('modal')) {
                $(target).fadeOut(200)
                document.body.style.overflow = 'hidden'
                if (created) {
                    document.querySelector(target).remove()
                }
            }
        })
    }
}
$('[data-toogle="modal"]').modal()

$.prototype.createModal = function ({text, btns: {count, settings}} = {}) {
    for (let i = 0; i < this.length; i++) {
        const modal = document.createElement('div')
        modal.classList.add('modal')
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1))

        const buttons = []
        for (let j = 0; j < count; j++) {
            const btn = document.createElement('button')
            btn.classList.add('btn', ...settings[j][1])
            btn.textContent = settings[j][0]
            if (settings[j][2]) {
                btn.setAttribute('data-close', 'true')
            }
            if (settings[j][3] && typeof (settings[j][3]) === 'function') {
                btn.addEventListener('click', settings[j][3])
            }
            buttons.push(btn)
        }

        modal.innerHTML = `
                <div class="modal-dialog">
                    <div class="modal-content">
                        <button class="close" data-close><span>&times;</span></button>
                        <div class="modal-header">
                            <div class="modal-title">
                                ${text.title}
                            </div>
                            <div class="modal-body">
                                ${text.body}
                            </div>
                            <div class="modal-footer">
                                
                            </div>
                        </div>
                    </div>
                </div>
            `
        modal.querySelector('.modal-footer').append(...buttons)
        document.body.append(modal)
        $(this[i]).modal(true)
        $(this[i].getAttribute('data-target')).fadeIn(200)
    }

}