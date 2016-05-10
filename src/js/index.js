module.exports = class Dropup {
  constructor (anchor, options = {theme: 'default'}) {
    this.anchor = anchor
    this.el = document.createElement('div')
    this.el.classList.add(`dropup--${options.theme}`)
  }

  open () {
    document.body.appendChild(this.el)
    this._position()
  }

  close () {
    this.el.parentElement.removeChild(this.el)
  }

  setContent (html) {
    this.el.innerHTML = html
  }

  _position () {
    let coords = this.anchor.getBoundingClientRect()

    this.el.style.left = coords.left
    this.el.style.top = coords.bottom
    this.el.style.width = this.anchor.offsetWidth
  }
}
