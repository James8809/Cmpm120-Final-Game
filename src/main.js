// James Liu, Darren Yang, Shimao Zhou, LA Police daily life
// we havent really complete it yet so we have to turn in what we have
// used multiple scene class, transition between scene class
// have instructions, have player input control
// animated police and truck car, scolling with a tilesprite?
// implement pyhsics.arcade collision, have looping bgm
// theoretically endless, playable for 15 seconds
// used randomness to generate trucks
// we have our game art assets mostly done by ourselves but not the sounds
// we were trying to add a game ai that can be displayed at the front 
// of the road as thief that player was supposed to chase
// but werent really able to implemet in time (see the commented out code)
// we really like what we did for the police car and truck but couldn't 
// really add more since we dont have time left. we had a great idea of 
// having to player chase thief as a police but couldn't finish in time :(
// oh also we added a kind of funny feature so try to find it if you can haha
let config = {
    type: Phaser.CANVAS,
    width: 1050,
    height: 600,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade'
    },
    scene: [Menu, Help, Play, Ending]
}

let game = new Phaser.Game(config);

let w = game.config.width;
let h = game.config.height;
let keyUP, keyDOWN, keyH, keyESC, keyENTER, keyF;
let wDivide = w/7;
let hDivide = h/5;
let borderUISize = w / 10;
let borderPadding = borderUISize / 3;
let truckHeight = 76;
let policeHeight = 59;
let policeMargin = (hDivide - policeHeight)/2;
let truckMargin = (hDivide - truckHeight)/2; 
let count = 0;
let musicConfig;
let music;