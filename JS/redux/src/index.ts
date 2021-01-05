import { asyncIncrement } from './redux/actions/actions'
import { decrement, increment } from './redux/action-creators/counter'
import { store } from './redux/store'
import './styles.css'
import { changeTheme } from './redux/action-creators/theme'

const counter = <HTMLSpanElement>document.getElementById('counter')
const addBtn = <HTMLButtonElement>document.getElementById('add')
const subBtn = <HTMLButtonElement>document.getElementById('sub')
const asyncBtn = <HTMLButtonElement>document.getElementById('async')
const themeBtn = <HTMLButtonElement>document.getElementById('theme')

addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})
subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})
asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement())
})
themeBtn.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light') ? 'dark' : 'light'
  store.dispatch(changeTheme(newTheme))
})

store.subscribe(() => {
  const state = store.getState()
  counter.textContent = state.counterReducer.counter.toString()
  document.body.className = state.themeReducer.value
  ;[addBtn, subBtn, themeBtn, asyncBtn].forEach(
    btn => (btn.disabled = state.themeReducer.disabled)
  )
})

store.dispatch({ type: '__INIT__' })
