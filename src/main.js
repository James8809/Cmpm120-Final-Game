
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
    scene: [Menu, Scene0, Scene1, Scene2, Scene3, Credit]
    // Menu, Scene0, Scene1, Scene2, 
}

let game = new Phaser.Game(config);
let w = game.config.width;
let h = game.config.height;
let keyUP, keyDOWN, keyENTER, keyF, keyLEFT, keyRIGHT, keySPACE, keyP;
let wDivide = w/7;
let hDivide = h/5;
let borderUISize = w / 10;
let borderPadding = borderUISize / 3;
let count = 0;
let musicConfig;
let music, step, pick, hurt;
let player;
let musicOn = false;