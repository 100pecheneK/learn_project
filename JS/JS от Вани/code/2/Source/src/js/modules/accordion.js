export default (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector)
    // blocks = document.querySelectorAll(itemsSelector)


    // сопоб 2
    const setMaxHeight0 = elem => elem.style.maxHeight = '0px'
    const setMaxHeightMax = elem => elem.style.maxHeight = `${elem.scrollHeight + 80}px`
    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            const sibling = this.nextElementSibling
            if (!this.classList.contains('active-style')) {
                btns.forEach(btn => {
                    btn.classList.remove('active-style')
                    btn.nextElementSibling.classList.remove('active-content')
                    setMaxHeight0(btn.nextElementSibling)
                })
            }
            this.classList.toggle('active-style')
            sibling.classList.toggle('active-content')
            if (this.classList.contains('active-style')) {
                setMaxHeightMax(sibling)
            } else {
                setMaxHeight0(sibling)
            }
        })
    })
    // способ 1
    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown')
    // })

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function () {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style')
    //             })
    //             this.classList.add('active', 'active-style')
    //         }
    //     })
    // })
}