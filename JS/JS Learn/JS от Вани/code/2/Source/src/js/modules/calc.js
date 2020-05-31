import { getData } from '../services/requests'

export default (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result)

    let sum = 0

    const updateSelect = (data, element) => {
        data.forEach(item => {
            const option = document.createElement('option')
            option.value = item.value
            option.textContent = item.text
            element.append(option)
        })
    }
    const updateCalc = () => {
        getData('http://localhost:3000/calc')
            .then(data => {
                updateSelect(data.size, sizeBlock)
                updateSelect(data.material, materialBlock)
                updateSelect(data.options, optionsBlock)
            })
    }
    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value))

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = "Для расчета нужно выбрать размер картины и материал картины"
        } else if (promocodeBlock.value === 'PROMO') {
            resultBlock.textContent = Math.round(sum * 0.7)
        } else {
            resultBlock.textContent = sum
        }
    }
    updateCalc()
    sizeBlock.addEventListener('change', calcFunc)
    materialBlock.addEventListener('change', calcFunc)
    optionsBlock.addEventListener('change', calcFunc)
    promocodeBlock.addEventListener('input', calcFunc)
}