import Phaser from 'phaser';
import Game from "./scenes/game.js"

const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: 'pesten',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height: 720
    },
    scene: [ Game ]
};

const game = new Phaser.Game(config);
