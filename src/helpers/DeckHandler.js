import CardBack from './cards/CardBack.js'
import Boolean from './cards/Boolean.js'
import Ping from './cards/Ping.js'

export default class DeckHandler {
    constructor(scene) {
        this.dealCards = (x, y, name, type) => {
            let cards = {
                cardBack: new CardBack(scene),
                boolean: new Boolean(scene),
                ping: new Ping(scene)
            }
            let newCard = cards[name]
            return(newCard.render(x, y, type))
        }
    }
}