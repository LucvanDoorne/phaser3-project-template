export default class InteractiveHandler {
    constructor(scene) {
        //deelt de kaarten uit
        scene.dealCards.on('pointerdown', () => {
            scene.socket.emit("dealCards", scene.socket.id)
            scene.dealCards.disableInteractive()
        })

        scene.dealCards.on('pointerover', () => {
            scene.dealCards.setColor()
        })

        scene.dealCards.on('pointerout', () => {
            scene.dealCards.setColor()
        })

        /*scene.buttonPlayCard.on('pointerup', () => {
            scene.socket.emit('cardPlayed', geselecteerdeKaart, scene.socket.id)
        })*/
    }
}