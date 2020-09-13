

$('#dropdown').html(
    `
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton4">Ddasdasdropdown
        </button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton4">
            <a href="#" class="dropdown-item">Item </a>
            <a href="#" class="dropdown-item">Item 2</a>
            <a href="#" class="dropdown-item">Item 3</a>
            <a href="#" class="dropdown-item">Item 4</a>
        </div>
    </div>
`)
$('#dropdown2').html(
    `
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton4">Ddasdasdropdown
        </button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton4">
            <a href="#" class="dropdown-item">Item </a>
            <a href="#" class="dropdown-item">Item 2</a>
            <a href="#" class="dropdown-item">Item 3</a>
            <a href="#" class="dropdown-item">Item 4</a>
        </div>
    </div>
`)

$('#dropdownMenuButton4').dropdown()

$('#trig').onClick(function () {
    $(this).createModal({
        text: {
            title: 'Title',
            body: 'alalalalala'
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
                    'Save',
                    ['btn-success', 'mr-10'],
                    false,
                    () => {
                        alert('Saved!')
                    }
                ]
            ]
        }
    })
})

