const timer = (selector, deadline) => {

    const addZero = num => num < 10 ? '0' + num : num
    const getTimeRemaining = (endtime) => {
        const time = Date.parse(endtime) - Date.parse(new Date),
            seconds = Math.floor((time / 1000) % 60),
            minutes = Math.floor((time / (1000 * 60)) % 60),
            hours = Math.floor((time / (1000 * 60 * 60)) % 24),
            days = Math.floor(time / (1000 * 60 * 60 * 24))
        return {
            'total': time,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
            'days': days
        }
    }
    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
            seconds = timer.querySelector('#seconds'),
            minutes = timer.querySelector('#minutes'),
            hours = timer.querySelector('#hours'),
            days = timer.querySelector('#days')
        const timeInterval = setInterval(() => updateClock(), 1000)

        updateClock()

        function updateClock() {
            const t = getTimeRemaining(endtime)
            seconds.textContent = addZero(t.seconds)
            minutes.textContent = addZero(t.minutes)
            hours.textContent = addZero(t.hours)
            days.textContent = addZero(t.days)
            if (t.total <= 0) {
                seconds.textContent = '00'
                minutes.textContent = '00'
                hours.textContent = '00'
                days.textContent = '00'
                clearInterval(timeInterval)
            }
        }
    }

    setClock(selector, deadline)
}

export default timer