import $ from '../core'

$.prototype.animateOverTime = function (duration, handler, finaly) {
    let timeStart

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time
        }

        let timeElapsed = time - timeStart
        let complection = Math.min(timeElapsed / duration, 1)

        handler(complection)

        if (timeElapsed < duration) {
            requestAnimationFrame(_animateOverTime)
        } else {
            if (typeof finaly === 'function') {
                finaly()
            }
        }
    }

    return _animateOverTime
}

$.prototype._fadeIn = function (item, display) {
    item.style.display = display
    const _fadeIn = complection => {
        item.style.opacity = complection
    }
    return _fadeIn
}
$.prototype._fadeOut = function (item) {
    return complection => {
        item.style.opacity = `${1 - complection}`
        if (complection === 1) {
            item.style.display = 'none'
        }
    }
}
$.prototype.fadeIn = function (duration, display = 'block', finaly) {
    for (let i = 0; i < this.length; i++) {
        const _fadeIn = this._fadeIn(this[i], display)
        const animate = this.animateOverTime(duration, _fadeIn, finaly)
        requestAnimationFrame(animate)
    }
    return this
}

$.prototype.fadeOut = function (duration, finaly) {
    for (let i = 0; i < this.length; i++) {
        const _fadeOut = this._fadeOut(this[i])
        const animate = this.animateOverTime(duration, _fadeOut, finaly)
        requestAnimationFrame(animate)
    }
    return this
}

$.prototype.fadeToggle = function (duration, display = 'block', finaly) {
    for (let i = 0; i < this.length; i++) {

        if (window.getComputedStyle(this[i]).display === 'none') {
            const _fadeIn = this._fadeIn(this[i], display)
            const animate = this.animateOverTime(duration, _fadeIn, finaly)
            requestAnimationFrame(animate)
        } else {
            const _fadeOut = this._fadeOut(this[i])
            const animate = this.animateOverTime(duration, _fadeOut, finaly)
            requestAnimationFrame(animate)
        }


    }
    return this
}
