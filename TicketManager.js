import EventEmitter from 'node:events'

export default class TicketManager extends EventEmitter {
    #supply = 0

    constructor(supply) {
        super()
        this.#supply = supply
    }

    buy(email, price) {
        const dateObjet = new Date()
        const date = `${dateObjet.toLocaleDateString('es-ES')} at: ${dateObjet.toLocaleTimeString('es-ES')}`
        this.#supply--
        this.emit("buy", email, price, date)
    }
}