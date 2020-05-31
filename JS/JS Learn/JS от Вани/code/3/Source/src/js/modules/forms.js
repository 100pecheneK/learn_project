export default class Form {
    constructor(form, path) {
        this.form = document.querySelector(form)
        try {
            this.inputs = this.form.querySelectorAll('input')
        } catch (e) {
        }
        this.path = path
        this.message = {
            loading: 'Loading',
            success: 'Well done!',
            failure: 'Error!!!'
        }
    }

    async sendData(url, data) {
        const res = await fetch(url, {
            method: 'POST',
            body: data
        })
        return await res.text()
    }

    clearInputs() {
        this.inputs.forEach(input => input.value = '')
    }

    validateEmailInputs() {
        const emailInputs = this.form.querySelectorAll('[type="email"]')

        emailInputs.forEach(input => {
            input.addEventListener('keypress', function (e) {
                if (e.key.match(/[^a-z0-9@.]/ig)) {
                    e.preventDefault()
                }
            })
        })
    }

    validatePhoneInputs() {
        console.log('Не понял эту тему')
    }

    bindForm() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault()

            const statusMessage = document.createElement('div')
            statusMessage.style.cssText = `
                    margin-top: 15px;
                    font-size: 18px;
                    color: black>;
                    background-color: red;
                `
            this.form.parentNode.append(statusMessage)
            statusMessage.textContent = this.message.loading
            const formData = new FormData(this.form)
            this.sendData(this.path, formData)
                .then(res => {
                    console.log(res)
                    statusMessage.textContent = this.message.success
                })
                .catch(e => {
                    console.error(e)
                    statusMessage.textContent = this.message.failure
                })
                .finally(() => {
                    this.clearInputs()
                    setTimeout(() => {
                        statusMessage.remove()
                    }, 4000)
                })
        })
    }

    init() {
        try {
            this.validateEmailInputs()
            this.validatePhoneInputs()
            this.bindForm()
        } catch (e) {

        }
    }
}