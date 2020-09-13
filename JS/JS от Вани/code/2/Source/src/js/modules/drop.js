export default () => {
    const fileInputs = document.querySelectorAll('[name="upload"]')
    const allDropEvents = ['dragenter', 'dragleave', 'dragover', 'drop']
    const inDropEvents = ['dragenter', 'dragover']
    const outDropEnevts = ['dragleave', 'drop']

    function preventDefaults(e) {
        e.preventDefault()
        e.stopPropagation()
    }

    function highlight(item) {
        item.closest('.file_upload').style.border = "5px solid red"
        item.closest('.file_upload').style.backgroundColor = "rgba(0,0,0,0.7)"
    }

    function unhighlight(item) {
        item.closest('.file_upload').style.border = "none"
        item.closest('.file_upload').style.backgroundColor = "#ededed"
    }


    allDropEvents.forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false)
        })
    })

    inDropEvents.forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highlight(input), false)
        })
    });

    outDropEnevts.forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhighlight(input), false)
        })
    });

    fileInputs.forEach(input => {
        input.addEventListener('.drop', (e) => {
            input.files = e.dataTransfer.files
            const dots = arr[0].length > 6 ? "..." : '.'
            const arr = input.files[0].name.split('.')
            
            const name = arr[0].substring(0, 6) + dots + arr[1]
            input.previousElementSibling.textContent = name
        })
    })
}