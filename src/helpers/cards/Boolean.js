import Card from "./Card.js"

export default class Boolean extends Card {
    constructor(scene) {
        super(scene)
        this.name = "boolean"
        this.PlayerCardSprite = "cyanBoolean"
    }
}