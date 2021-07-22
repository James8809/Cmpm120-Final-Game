class Menu extends Phaser.Scene{
    constructor() {
        super("menuScene");
    }
    
    init() {

    }
    preload() {
        this.load.image('scene1_bg1', './assets/title.png');
        this.load.image('scene1_bg11', './assets/kid_studying.png');
        this.load.image('scene2_bg22', './assets/kid_sleep.png');
        this.load.image('scene3_bg33', './assets/kid_end.png');
    }
    create() {
        this.add.image(0, 0, 'scene1_bg1').setOrigin(0, 0);
        
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        
    }
    update() {
        if (keyENTER.isDown) {
            this.scene.start('scene0');
        }
    }
}