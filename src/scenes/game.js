import CardHandler from '../helpers/CardHandler'
import DeckHandler from '../helpers/DeckHandler'
import GameHandler from '../helpers/GameHandler'
import InteractiveHandler from '../helpers/InteractiveHandler'
import SocketHandler from '../helpers/SocketHandler'
import UIHandler from "../helpers/UIHandler"

export default class Game extends Phaser.Scene {
    constructor() {
        super ({
            key: 'Game'
        })
    }

    preload() {
        this.load.image('background', 'src/assets/Background.jpg')
        this.load.image('aas harten', 'src/assets/cards/wit/withartenA.png')
        this.load.image('2 harten', 'src/assets/cards/wit/witharten2.png')
        this.load.image('3 harten', 'src/assets/cards/wit/witharten3.png')
        this.load.image('4 harten', 'src/assets/cards/wit/witharten4.png')
        this.load.image('5 harten', 'src/assets/cards/wit/witharten5.png')
        this.load.image('6 harten', 'src/assets/cards/wit/witharten6.png')
        this.load.image('7 harten', 'src/assets/cards/wit/witharten7.png')
        this.load.image('8 harten', 'src/assets/cards/wit/witharten8.png')
        this.load.image('9 harten', 'src/assets/cards/wit/witharten9.png')
        this.load.image('10 harten', 'src/assets/cards/wit/witharten10.png')
        this.load.image('koning harten', 'src/assets/cards/wit/withartenK.png')
        this.load.image('koningin harten', 'src/assets/cards/wit/withartenQ.png')
        this.load.image('aas ruiten', 'src/assets/cards/wit/witruitenA.png')
        this.load.image('2 ruiten', 'src/assets/cards/wit/witruiten2.png')
        this.load.image('3 ruiten', 'src/assets/cards/wit/witruiten3.png')
        this.load.image('4 ruiten', 'src/assets/cards/wit/witruiten4.png')
        this.load.image('5 ruiten', 'src/assets/cards/wit/witruiten5.png')
        this.load.image('6 ruiten', 'src/assets/cards/wit/witruiten6.png')
        this.load.image('7 ruiten', 'src/assets/cards/wit/witruiten7.png')
        this.load.image('8 ruiten', 'src/assets/cards/wit/witruiten8.png')
        this.load.image('9 ruiten', 'src/assets/cards/wit/witruiten9.png')
        this.load.image('10 ruiten', 'src/assets/cards/wit/witruiten10.png')
        this.load.image('koning ruiten', 'src/assets/cards/wit/witruitenK.png')
        this.load.image('koningin ruiten', 'src/assets/cards/wit/witruitenQ.png')
        this.load.image('aas schoppen', 'src/assets/cards/wit/witschoppenA.png')
        this.load.image('2 schoppen', 'src/assets/cards/wit/witschoppen2.png')
        this.load.image('3 schoppen', 'src/assets/cards/wit/witschoppen3.png')
        this.load.image('4 schoppen', 'src/assets/cards/wit/witschoppen4.png')
        this.load.image('5 schoppen', 'src/assets/cards/wit/witschoppen5.png')
        this.load.image('6 schoppen', 'src/assets/cards/wit/witschoppen6.png')
        this.load.image('7 schoppen', 'src/assets/cards/wit/witschoppen7.png')
        this.load.image('8 schoppen', 'src/assets/cards/wit/witschoppen8.png')
        this.load.image('9 schoppen', 'src/assets/cards/wit/witschoppen9.png')
        this.load.image('10 schoppen', 'src/assets/cards/wit/witschoppen10.png')
        this.load.image('koning schoppen', 'src/assets/cards/wit/witschoppenK.png')
        this.load.image('koningin schoppen', 'src/assets/cards/wit/witschoppenQ.png')
        this.load.image('aas klaveren', 'src/assets/cards/wit/witklaverA.png')
        this.load.image('2 klaveren', 'src/assets/cards/wit/witklaver2.png')
        this.load.image('3 klaveren', 'src/assets/cards/wit/witklaver3.png')
        this.load.image('4 klaveren', 'src/assets/cards/wit/witklaver4.png')
        this.load.image('5 klaveren', 'src/assets/cards/wit/witklaver5.png')
        this.load.image('6 klaveren', 'src/assets/cards/wit/witklaver6.png')
        this.load.image('7 klaveren', 'src/assets/cards/wit/witklaver7.png')
        this.load.image('8 klaveren', 'src/assets/cards/wit/witklaver8.png')
        this.load.image('9 klaveren', 'src/assets/cards/wit/witklaver9.png')
        this.load.image('10 klaveren', 'src/assets/cards/wit/witklaver10.png')
        this.load.image('koning klaveren', 'src/assets/cards/wit/witklaverK.png')
        this.load.image('koningin klaveren', 'src/assets/cards/wit/witklaverQ.png')
        this.load.image('boer harten', 'src/assets/cards/wit/withartenJ.png')
        this.load.image('boer ruiten', 'src/assets/cards/wit/witruitenJ.png')
        this.load.image('boer schoppen', 'src/assets/cards/wit/witschoppenJ.png')
        this.load.image('boer klaveren', 'src/assets/cards/wit/witklaverJ.png')
        this.load.image('joker 1', 'src/assets/cards/wit/witjoker.png')
        this.load.image('joker 2', 'src/assets/cards/wit/witjoker2.png')
        this.load.image('Arrow', 'src/assets/arrow.png')
        this.load.image('Table', 'src/assets/table.png')
        this.load.image('gray-chair', 'src/assets/gray-chair.png')
        this.load.image('brown-chair', 'src/assets/brown-chair.png')
        this.load.image('backcard', 'src/assets/backcard.jpg')
        this.load.spritesheet('button', 'src/assets/button.png', {frameWidth: 860, frameHeight: 378})
        this.load.image('Beurt-richting', 'src/assets/Arrow2.png')
        this.load.spritesheet('chair', 'src/assets/chair.png', {frameWidth: 384, frameHeight: 393})
        this.load.image('Klaver', 'src/assets/klaver.png')
        this.load.image('Schop', 'src/assets/schop2.png')
        this.load.image('Hart', 'src/assets/hart.png')
        this.load.image('Ruit', 'src/assets/ruit.png')
        this.load.spritesheet('fullscreen', 'src/assets/fullscreen.png', { frameWidth: 64, frameHeight: 64 })
    }

    create(){
        this.CardHandler = new CardHandler()
        this.DeckHandler = new DeckHandler(this)
        this.GameHandler = new GameHandler(this)
        this.SocketHandler = new SocketHandler(this)
        this.UIHandler = new UIHandler(this)
        this.UIHandler.buildUI()
        this.InteractiveHandler = new InteractiveHandler(this)
    }

    update() {

    }
}