export default class UIHandler {
    constructor(scene) {

        this.buildBackground = () => {
            scene.background = scene.add.image(640,360,'background')
            scene.background.scale = 0.34
        }

        this.buildRest = () => {
            //maakt de tafel
            scene.table = scene.add.image(170, 170, 'Table')
            scene.table.scale = 0.5
            scene.table.depth = 3

            //maakt de pakstapel afbeelding
            scene.backcard = scene.add.image(730, 290, 'backcard')
            scene.backcard.scale = 0.2

            //full screen button
            scene.fullscreen = scene.add.image(1264, 16, 'fullscreen', 0).setOrigin(1, 0).setInteractive()
            scene.fullscreen.on('pointerup', function(event) {
                if (scene.scale.isFullscreen) {
                    scene.fullscreen.setFrame(0)
                    scene.scale.stopFullscreen()
                }else {
                    scene.fullscreen.setFrame(1)
                    scene.scale.startFullscreen()
                }
            }, scene)
        }

        this.buildGameText = () => {
            scene.dealCards = scene.add.text(200, 200, "Deal Cards", { font: '14px Arial'})
        }
        
        this.buildUI = () => {
            this.buildGameText()
            this.buildBackground()
            this.buildRest()
        }
    }
}