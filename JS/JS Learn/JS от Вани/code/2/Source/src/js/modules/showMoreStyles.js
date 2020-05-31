import {getData} from "../services/requests"

export default (trigger, wrapper) => {
    const btn = document.querySelector(trigger)

    const createCards = (res) => {
        res.forEach(({src, title, link}) => {
            const card = document.createElement('div')
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')
            card.innerHTML = `
                 <div class="styles-block">
                     <img src="${src}" alt>
                     <h4>${title}</h4>
                     <a href="${link}">Подробнее</a>
                 </div>
            `
            document.querySelector(wrapper).append(card)
        })
    }
    btn.addEventListener('click', function () {
        getData('http://localhost:3000/styles')
            .then(res => {
                createCards(res)
                this.remove()
            })
            .catch(err => {
                const statusImg = document.createElement('img')
                statusImg.setAttribute('src', 'assets/img/fail.png')
                this.innerHTML = ''
                this.append(statusImg)
            })

    })

}