const mask = (selector) => {
    const setCursorPosition = (pos, elem) => {
        console.log(pos)
        elem.focus()
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos)
        } else if (elem.createTextRange) {
            const range = elem.createTextRange()
            range.collapse(true)
            range.moveEnd('character', pos)
            range.moveStart('character', pos)
            range.select()
        }
    }

    function createMask(event) {
        // console.log('value', this.value)
        const matrix = '(___) ___-__-__'
        const def = matrix.replace(/\D/g, '')
        let i = 0
        let val = this.value.replace(/[+7\D]/g, '')
        if (def.length >= val.length) {
            val = def
        }
        console.log('def', def)
        console.log('val', val)
        this.value = '+7 ' + matrix.replace(/./g, (symbol) => {
            if (/[_\d]/.test(symbol) && i < val.length) {
                return val.charAt(i++)
            } else if (i >= val.length) {
                return ''
            } else {
                return symbol
            }
            // return /[_\d]/.test(symbol) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : symbol
        })
        if (event.type === 'blur') {
            if (this.value.length == 2) {
                this.value = ''
            }
        } else {
            setCursorPosition(this.value.length, this)
        }
    }

    const inputs = document.querySelectorAll(selector)

    inputs.forEach(item => {
        item.addEventListener('input', createMask)
        item.addEventListener('focus', createMask)
        item.addEventListener('blur', createMask)
    })
}

export default mask


