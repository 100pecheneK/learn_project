$('[data-target="#modal_1"]').onClick(function () {
    $(this).createModal({
        text: {
            title: 'Tramp',
            body: 'TRAAAAAMP'
        },
        btns: {
            count: 2,
            settings: [
                [
                    'Close',
                    ['btn-danger', 'mr-10'],
                    true
                ],
                [
                    'Tramp',
                    ['btn-success', 'mr-10'],
                    false,
                    () => {
                        alert('Tramped!!!')
                    }
                ]
            ]
        }
    })
})
$('[data-target="#modal_2"]').onClick(function () {
    $(this).createModal({
        text: {
            title: 'Kit',
            body: 'KIIIIT'
        },
        btns: {
            count: 2,
            settings: [
                [
                    'Close',
                    ['btn-danger', 'mr-10'],
                    true
                ],
                [
                    'Kit',
                    ['btn-success', 'mr-10'],
                    false,
                    () => {
                        alert('Kited!!!')
                    }
                ]
            ]
        }
    })
})
$('[data-target="#modal_3"]').onClick(function () {
    $(this).createModal({
        text: {
            title: 'Cat',
            body: 'CAAAT'
        },
        btns: {
            count: 2,
            settings: [
                [
                    'Close',
                    ['btn-danger', 'mr-10'],
                    true
                ],
                [
                    'Kit',
                    ['btn-success', 'mr-10'],
                    false,
                    () => {
                        alert('Kited!!!')
                    }
                ]
            ]
        }
    })
})