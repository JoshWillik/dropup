export default class Dropup {
  constructor ({theme = 'default'}) {
    this.el = document.createElement('div')
    this.el.classList.add(`dropup--${theme}`)
  }

  open () {
    document.body.appendChild(this.el)
  }

  close () {
    this.el.parentElement.removeChild(this.el)
  }
}
