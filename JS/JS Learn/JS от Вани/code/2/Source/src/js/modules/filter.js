export default () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        no = document.querySelector('.portfolio-no')
    const selectors = [
        {
            'btn': '.all',
            'mark': '.all'
        },
        {
            'btn': '.lovers',
            'mark': '.lovers'
        },
        {
            'btn': '.chef',
            'mark': '.chef'
        },
        {
            'btn': '.girl',
            'mark': '.girl'
        },
        {
            'btn': '.guy',
            'mark': '.guy'
        },
        {
            'btn': '.grandmother',
            'mark': ''
        },
        {
            'btn': '.granddad',
            'mark': ''
        },
    ]


    const typeFilter = (markType) => {
        markAll.forEach(item => {
            item.style.display = 'none'
            item.classList.remove('animated', 'fadeIn')
        })
        no.style.display = 'none'
        no.classList.remove('animated', 'fadeIn')

        if (markType) {
            markType.forEach(item => {
                item.style.display = 'block'
                item.classList.add('animated', 'fadeIn')
            })
        } else {
            no.style.display = 'block'
            no.classList.add('animated', 'fadeIn')
        }
    }
    const bindBtn = () => {
        selectors.forEach(({ btn, mark }) => {
            const menuItem = menu.querySelector(btn)
            if (mark == '') {
                menuItem.addEventListener('click', () => typeFilter())
            } else {
                const markItem = wrapper.querySelectorAll(mark)
                menuItem.addEventListener('click', () => typeFilter(markItem))
            }
        })
    }
    bindBtn()
    menu.addEventListener('click', (e) => {
        const target = e.target
        if (target && target.tagName == 'LI') {
            items.forEach(item => item.classList.remove('active'))
            target.classList.add('active')
        }
    })
}