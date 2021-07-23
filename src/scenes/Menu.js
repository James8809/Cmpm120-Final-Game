class Menu extends Phaser.Scene{
    constructor() {
        super("menuScene");
    }
    
    init() {

    }
    preload() {
        this.load.image('scene1_bg1', './assets/memory dive remake.png');
        this.load.image('scene1_bg11', './assets/kid_studying.png');
        this.load.image('scene2_bg22', './assets/kid_sleep.png');
        this.load.image('scene3_bg33', './assets/kid_end.png');
        this.load.image('child end','./assets/kid_end.png');
    }
    create() {
        this.add.image(0, 0, 'scene1_bg1').setOrigin(0, 0);
        
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        game.settings = {
            sceneControl: 0

        };
        
    }
    update() {
        if (keyENTER.isDown) {
            game.settings.sceneControl++;
            this.scene.start('scene0');
        }
    }
}