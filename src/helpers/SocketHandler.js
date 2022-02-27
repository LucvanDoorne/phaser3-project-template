import io from 'socket.io-client'

export default class SocketHandler {
    constructor(scene) {
        scene.socket = io('http://localhost:8769')

        scene.socket.on('connect', () => {
            console.log('Connected!')
            scene.socket.emit('dealDeck', scene.socket.id)
        })

        scene.socket.on('firstTurn', () => {
            scene.GameHandler.changeTurn()
        })

        scene.socket.on('changeGameState', (gameState) => {
            scene.gameHandler.changeGameState(gameState)
            if (gameState === "Initializing") {
                scene.DeckHandler.dealCard(1000, 860, "cardBack", "playerCard")
                scene.dealCards.setInteractive()
            }
        })

        scene.socket.on('dealCards', (socketId, cards) => {
            if (socketId === scene.socket.id) {
                for (let i in cards) {
                    let card = scene.gameHandler.playerHand.push(scene.DeckHandler.dealCard(155 + (i * 155), 860, cards[i], "playerCard"))
                }
            } 
        })

        scene.socket.on('cardPlayed', (cardName, socketId) => {
            if (socketId !== scene.socket.id) {
                
            }
        })
    }
}