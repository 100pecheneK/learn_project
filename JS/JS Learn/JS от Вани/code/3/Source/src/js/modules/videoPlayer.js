export default class VideoPlayer {
    constructor(triggers, overlay) {
        this.buttons = document.querySelectorAll(triggers)
        this.overlay = document.querySelector(overlay)
        this.close = this.overlay.querySelector('.close')
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this)
    }

    bindTriggers() {
        this.buttons.forEach((button, i) => {
            try {
                const blockedElement = button.closest('.module__video-item').nextElementSibling
                if (i % 2 === 0) {
                    blockedElement.setAttribute('data-disabled', 'true')
                }
            } catch (e) {

            }
            button.addEventListener('click', () => {
                if (!button.closest('.module__video-item') || button.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
                    this.activeButton = button
                    if (document.querySelector('iframe#frame')) {
                        this.overlay.style.display = 'flex'
                        if (this.url !== button.getAttribute('data-url')) {
                            this.url = button.getAttribute('data-url')
                            this.player.loadVideoById({videoId: this.url})
                        }
                    } else {
                        this.url = button.getAttribute('data-url')
                        this.createPlayer(this.url)
                    }
                }
            })
        })
    }

    bindCloseButton() {
        this.close.addEventListener('click', () => {
            this.overlay.style.display = 'none'
            this.player.stopVideo()
        })
    }

    onPlayerStateChange(state) {
        try {
            const blockedElement = this.activeButton.closest('.module__video-item').nextElementSibling
            const playButton = this.activeButton.querySelector('svg').cloneNode(true)
            if (state.data === 0) {
                if (blockedElement.querySelector('.play__circle').classList.contains('closed')) {
                    blockedElement.querySelector('.play__circle').classList.remove('closed')
                    blockedElement.querySelector('svg').replaceWith(playButton)
                    blockedElement.querySelector('.play__text').textContent = 'play video'
                    blockedElement.querySelector('.play__text').classList.remove('attention')
                    blockedElement.style.opacity = '1'
                    blockedElement.style.filter = 'none'
                    blockedElement.setAttribute('data-disabled', 'false')
                }
            }
        } catch (e) {

        }
    }

    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: url,
            events: {
                'onStateChange': this.onPlayerStateChange
            }
        })
        this.overlay.style.display = 'flex'
    }

    init() {
        if (this.buttons.length > 0) {
            const tag = document.createElement('script')
            tag.src = 'https://www.youtube.com/iframe_api'
            const firstScriptTag = document.getElementsByTagName('script')[0]
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

            this.bindTriggers()
            this.bindCloseButton()
        }
    }
}