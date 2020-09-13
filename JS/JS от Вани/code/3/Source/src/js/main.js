import VideoPlayer from "./modules/videoPlayer"
import MainSlider from "./modules/slider/main-slider"
import MiniSlider from "./modules/slider/mini-slider"
import Difference from "./modules/difference"
import Form from "./modules/forms"
import ShowInfo from "./modules/showInfo"
import Download from "./modules/download"

window.addEventListener('DOMContentLoaded', () => {
    new MainSlider({
        container: '.page',
        buttons: '.next'
    }).render()

    new MiniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: 'card-active',
        animate: true
    }).init()
    new MiniSlider({
        container: '.modules__content-slider',
        next: '.modules__info-btns .slick-next',
        prev: '.modules__info-btns .slick-prev',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    }).init()
    new MiniSlider({
        container: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active'
    }).init()

    new VideoPlayer('.showup .play', '.overlay').init()

    new Difference('.officerold', '.officer__card-item').init()
    new Difference('.officernew', '.officer__card-item').init()

    new Form('#form1', 'assets/question.php').init()
    new Form('#form2', 'assets/question.php').init()

    // Modules.html
    new MainSlider({
        container: '.moduleapp',
        buttons: '.next',
        nexts: '.nextmodule',
        prevs: '.prevmodule'
    }).render()
    new VideoPlayer('.module__video-item .play', '.overlay').init()
    new ShowInfo('.module__info-show').init()
    new Download('.download').init()
})