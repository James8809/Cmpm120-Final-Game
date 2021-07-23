
let config = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1000}
        }
    },
    scene: [Menu, Scene0, Scene01, Scene1, Scene02, Scene2, Scene03, Scene3, Scene04, credit]
}

let game = new Phaser.Game(config);
console.log("new");
let w = game.config.width;
let h = game.config.height;
let keyUP, keyDOWN, keyH, keyESC, keyENTER, keyF, keyLEFT, keyRIGHT, keySPACE;
let wDivide = w/7;
let hDivide = h/5;
let borderUISize = w / 10;
let borderPadding = borderUISize / 3;
let count = 0;
let musicConfig;
let music;
let player;
let musicOn = false;