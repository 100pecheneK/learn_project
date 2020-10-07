// import {model} from '~model'
import '~styles/main.css'
import {App} from '~app'


const model = JSON.parse(localStorage.getItem('model') || '[]')
new App(model).init()


